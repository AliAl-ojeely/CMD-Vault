const windowsCommands = require('../data/win-commands');
const linuxCommands = require('../data/linux-commands');
const macCommands = require('../data/mac-commands');
const aiPrompts = require('../data/ai-prompts.js');
const gitCommands = require('../data/git-commands.js');
const flutterCommands = require('../data/flutter-commands.js');
const nodejsCommands = require('../data/nodejs-commands.js');
const dockerCommands = require('../data/docker-commands.js');

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
    ...macCommands,
    ...gitCommands,
    ...flutterCommands,
    ...nodejsCommands,
    ...dockerCommands
]);

async function loadCommands() {
    return [...windowsCommands, ...linuxCommands, ...macCommands, ...aiPrompts, ...gitCommands, ...flutterCommands, ...nodejsCommands, ...dockerCommands];
}

module.exports = { loadCommands };