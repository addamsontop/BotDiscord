module.exports = {
    name: "hello",
    async execute(interaction) {
        await interaction.reply({content: "Bonjour a toi aussi"})
    }
}