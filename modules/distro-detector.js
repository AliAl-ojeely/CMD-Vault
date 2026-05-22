const fs = require('fs').promises;

async function detectDistro() {
    try {
        const content = await fs.readFile('/etc/os-release', 'utf-8');
        const lines = content.split('\n');
        const idLine = lines.find(line => line.startsWith('ID='));
        if (!idLine) return 'unknown';
        const id = idLine.split('=')[1].replace(/"/g, '').toLowerCase();

        const debianIds = ['ubuntu', 'debian', 'linuxmint', 'pop', 'elementary'];
        const redhatIds = ['fedora', 'rhel', 'centos', 'rocky', 'almalinux'];
        const archIds = ['arch', 'manjaro', 'endeavouros'];

        if (debianIds.includes(id)) return 'debian';
        if (redhatIds.includes(id)) return 'redhat';
        if (archIds.includes(id)) return 'arch';
        return 'unknown';
    } catch {
        return 'unknown';
    }
}

module.exports = { detectDistro };