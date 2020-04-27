module.exports = {
    name: `user`,
    description: `Information about the user`,
    cooldown: 50,
    execute(message, args) {
        message.channel.send(`Your username is: ${message.author.username}\nYour ID: ${message.author.id}`);
    },
}