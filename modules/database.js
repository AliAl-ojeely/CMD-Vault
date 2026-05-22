// modules/database.js
const windowsCommands = require('../data/win-commands');
const linuxCommands = require('../data/linux-commands');
const macCommands = require('../data/mac-commands');

// Combine all commands, then remove duplicates by command string + platform
function deduplicateCommands(commands) {
    const seen = new Set();
    return commands.filter(cmd => {
        const key = `${cmd.platform}::${cmd.command}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

const allCommands = deduplicateCommands([
    ...windowsCommands,
    ...linuxCommands,
    ...macCommands
]);

async function loadCommands() {
    return allCommands;
}

module.exports = { loadCommands };