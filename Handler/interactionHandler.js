async function handleInteraction(interaction, client) {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: "🔧 Une erreur est survenue lors de l'execution de la commande", ephemeral: true });
    }
}

module.exports = { handleInteraction };
