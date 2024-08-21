const fs = require('fs');
const path = require('path');

function loadCommands(client) {
    const commandsPath = path.join(__dirname, '../commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        client.commands.set(command.name, command);
        console.log('\x1b[34m%s\x1b[0m', "[COMMANDS] " + command.name + " a bien été ajoutée")
    }
}

module.exports = { loadCommands };

