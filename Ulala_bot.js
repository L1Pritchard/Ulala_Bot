const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.login("45I2GhEtKVnMdAgrgFne2ON41GbNDVg8")