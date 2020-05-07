const Discord = require(`discord.js`);
const fs = require(`fs`);
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(`./Commands`).filter(file => file.endsWith(`.js`));
const { prefix, token } = require(`./config.json`);
cooldowns = new Discord.Collection();

client.once(`ready`, () => {
    console.log(`Booted up successfully!\nCurrent server, ${client.guilds.name}, has ${client.users.size} members`);
    client.user.setActivity(`!help for my list of commands`)
});

for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);
    client.commands.set(command.name, command);
}

client.on(`message`, message => {
    if (!message.content.startsWith(prefix) || message.author.box) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
        if (!command) return

    //Argument checks
    if (command.args && !args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}`);
    }

    //Command cooldowns
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown) * 1000;    

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    

    //Command execution
    try {
        command.execute(message, args);
    }

    catch (error) {
        console.error(error);
        message.reply(`there was an error trying to execute that command.`);
    }

});




client.login(token);