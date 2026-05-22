// modules/database.js
const windowsCommands = require('../data/win-commands');
const linuxCommands = require('../data/linux-commands');
const macCommands = require('../data/mac-commands');

const allCommands = [
    ...windowsCommands,
    ...linuxCommands,
    ...macCommands
];

async function loadCommands() {
    console.log('✅ New database.js loaded – total commands:', allCommands.length);
    return allCommands;
}

module.exports = { loadCommands };