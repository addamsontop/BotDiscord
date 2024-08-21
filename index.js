const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { loadCommands } = require('./Handler/commandHandler');
const { handleInteraction } = require('./Handler/interactionHandler');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Map();

client.once('ready', () => {
    console.log('\x1b[32m%s\x1b[0m', `✅ Le client est en ligne`);
});

loadCommands(client);

client.on('interactionCreate', async interaction => {
    await handleInteraction(interaction, client);
});

client.login(token);
