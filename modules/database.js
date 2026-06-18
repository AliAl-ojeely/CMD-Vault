// modules/database.js
const windowsCommands = require('../data/win-commands');
const linuxCommands = require('../data/linux-commands');
const macCommands = require('../data/mac-commands');
const aiPrompts = require('../data/ai-prompts.js');

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
    ...aiPrompts,
    ...windowsCommands,
    ...linuxCommands,
    ...macCommands
]);

async function loadCommands() {
    return [...windowsCommands, ...linuxCommands, ...macCommands, ...aiPrompts];
}

module.exports = { loadCommands };