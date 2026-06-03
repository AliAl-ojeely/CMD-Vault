const { app } = require('electron');
const EventEmitter = require('events');
const packageJson = require('../package.json');

const isOnline = async () => {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3000);
        await fetch('https://api.github.com', { method: 'HEAD', signal: controller.signal });
        clearTimeout(timeout);
        return true;
    } catch {
        return false;
    }
};

// Optional: try to use semver if installed, otherwise fallback
let semver;
try {
    semver = require('semver');
} catch (e) {
    semver = null;
}

const GITHUB_REPO = 'AliAl-ojeely/CMD-VAULT';   // <-- change to your actual repo
const USER_AGENT = 'CMD-Vault/1.0.0';

function simpleCompare(v1, v2) {
    const p1 = v1.split('.').map(Number);
    const p2 = v2.split('.').map(Number);
    for (let i = 0; i < Math.max(p1.length, p2.length); i++) {
        const n1 = p1[i] || 0;
        const n2 = p2[i] || 0;
        if (n1 > n2) return 1;
        if (n1 < n2) return -1;
    }
    return 0;
}

const compareVersions = semver ? semver.gt : (a, b) => simpleCompare(a, b) > 0;

class Updater extends EventEmitter {
    constructor(options = {}) {
        super();
        this.repo = options.repo || GITHUB_REPO;
        this.userAgent = options.userAgent || USER_AGENT;
        this.currentVersion = packageJson.version;
        this.includePrerelease = options.includePrerelease || false;
        this.cacheTtlMs = options.cacheTtlMs || 5 * 60 * 1000;
        this.lastCheck = null;
        this.cachedResult = null;
    }

    async getLatestRelease() {
        if (!(await isOnline())) {
            return { error: 'No internet connection', offline: true };
        }
        const now = Date.now();
        if (this.cachedResult && this.lastCheck && (now - this.lastCheck) < this.cacheTtlMs) {
            return this.cachedResult;
        }

        try {
            const url = this.includePrerelease
                ? `https://api.github.com/repos/${this.repo}/releases?per_page=1`
                : `https://api.github.com/repos/${this.repo}/releases/latest`;

            const response = await fetch(url, {
                headers: { 'User-Agent': this.userAgent }
            });

            const remaining = response.headers.get('x-ratelimit-remaining');
            const reset = response.headers.get('x-ratelimit-reset');
            if (response.status === 403 && remaining === '0') {
                const resetDate = new Date(reset * 1000);
                this.emit('rate-limited', { resetDate });
                return {
                    error: `GitHub API rate limit exceeded. Resets at ${resetDate.toLocaleString()}`,
                    rateLimited: true,
                    resetDate
                };
            }

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            let release;
            if (this.includePrerelease) {
                const releases = await response.json();
                release = releases[0];
                if (!release) throw new Error('No releases found');
            } else {
                release = await response.json();
            }

            const latestVersion = release.tag_name.replace(/^v/, '');
            const hasUpdate = compareVersions(latestVersion, this.currentVersion);

            const result = {
                hasUpdate,
                currentVersion: this.currentVersion,
                latestVersion: release.tag_name,
                releaseNotes: release.body,
                downloadUrl: release.html_url,
                releaseDate: release.published_at,
                assets: release.assets || [],
                prerelease: release.prerelease || false
            };

            this.cachedResult = result;
            this.lastCheck = now;

            return result;
        } catch (err) {
            console.error('[UPDATER] Error checking for updates:', err);
            this.emit('error', err);
            return { error: err.message };
        }
    }

    async checkGitHubReleases() {
        return this.getLatestRelease();
    }

    startAutoCheck(intervalMs = 60 * 60 * 1000, callback = null) {
        if (this.intervalId) clearInterval(this.intervalId);
        this.intervalId = setInterval(async () => {
            const result = await this.checkGitHubReleases();
            if (result.hasUpdate && callback) callback(result);
            this.emit('auto-check', result);
        }, intervalMs);
        return this.intervalId;
    }

    stopAutoCheck() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}

const defaultUpdater = new Updater();

module.exports = {
    checkGitHubReleases: () => defaultUpdater.checkGitHubReleases(),
    Updater,
    defaultUpdater
};