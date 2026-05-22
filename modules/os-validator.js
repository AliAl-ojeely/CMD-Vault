const os = require('os');

function validateOS(commandPlatform) {
    const current = process.platform; // 'win32', 'linux', 'darwin'
    const platformMap = {
        windows: 'win32',
        linux: 'linux',
        macos: 'darwin',
        mac: 'darwin',
        darwin: 'darwin',
        win32: 'win32',
    };
    const required = platformMap[commandPlatform] || commandPlatform;

    if (required === 'all' || required === current) {
        return { allowed: true };
    }

    return {
        allowed: false,
        message: `This command is intended for ${commandPlatform} but you are on ${current}.`,
    };
}

module.exports = { validateOS };
