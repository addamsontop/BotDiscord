const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.login("MTI3MzA0MzkzNDk1MTY0MTI0NA.G3f_A4.t1dO4CWeHS2yZ0VIcuDbhy5Yh72vWk0P-6PRG8")