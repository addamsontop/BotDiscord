const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (message.content.toLowerCase() === 'bonjour bot') {
        message.channel.send('Bonjour à toi aussi!');
    }

    if (message.content.toLowerCase() === 'comment ça va ?') {
        message.channel.send('Je vais bien, merci de demander !');
    }
});


client.login("MTI3MzA0MzkzNDk1MTY0MTI0NA.G3f_A4.t1dO4CWeHS2yZ0VIcuDbhy5Yh72vWk0P-6PRG8")