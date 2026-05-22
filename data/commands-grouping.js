// data/commands-grouping.js
const fs = require('fs');
const path = require('path');

const windowsCommands = require('./win-commands');
const linuxCommands = require('./linux-commands');
const macCommands = require('./mac-commands');

// Combine all commands into one array
const allCommands = [
    ...windowsCommands,
    ...linuxCommands,
    ...macCommands
];

// Write to commands.json
const outputPath = path.join(__dirname, 'commands.json');
fs.writeFileSync(outputPath, JSON.stringify(allCommands, null, 2), 'utf-8');

console.log(`✅ Generated commands.json with ${allCommands.length} commands.`);