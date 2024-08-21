const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const config = require("./config.json")

client.on('ready', () => {
    console.log(`✅ Le bot est désormais en ligne`);
    require("./SaveCommands/SaveCommand.js")
});

client.login(config.token)