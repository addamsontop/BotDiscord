const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const config = require("./config.json")
const loadCommands = require("./Handler/CommandHandler")

client.on('ready', () => {
    console.log(`✅ Le bot est désormais en ligne`);
});

loadCommands(client)

client.login(config.token)