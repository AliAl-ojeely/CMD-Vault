const fs = require('fs');
const path = require('path');

const windowsCommands = require('./win-commands');
const linuxCommands = require('./linux-commands');
const macCommands = require('./mac-commands');
const gitCommands = require('./git-commands');
const flutterCommands = require('./flutter-commands');
const nodejsCommands = require('./nodejs-commands');

const allCommands = [
    ...windowsCommands,
    ...linuxCommands,
    ...macCommands,
    ...gitCommands,
    ...flutterCommands,
    ...nodejsCommands
];

const outputPath = path.join(__dirname, 'commands.json');
fs.writeFileSync(outputPath, JSON.stringify(allCommands, null, 2), 'utf-8');

console.log(`✅ Generated commands.json with ${allCommands.length} commands.`);