const { Client } = require("discord.js")

const client = new Client({intents: 53608447})
client.on("ready", () => {
    console.log('✅ Le bot est en ligne')
})

client.login("MTI3MzA0MzkzNDk1MTY0MTI0NA.G3f_A4.t1dO4CWeHS2yZ0VIcuDbhy5Yh72vWk0P-6PRG8")