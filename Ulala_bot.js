const Discord = require(`discord.js`);
const fs = require(`fs`);
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(`./Commands`).filter(file => file.endsWith(`.js`));
const { prefix, token } = require(`./config.json`);
cooldowns = new Discord.Collection();
const CronJob = require(`cron`).CronJob;

//boot message
client.once(`ready`, () => {
    console.log(`Booted up successfully!\nCurrently serving ${client.guilds.cache.size} servers with ${client.users.cache.size} users!`);
    client.user.setActivity(`!help`, {type: "LISTENING"})
});

//checks for command files
for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);
    client.commands.set(command.name, command);
}

//auto message for new members
client.on(`guildMemberAdd`, member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === `general`);
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}.\nPlease make sure to add yourself to the Clan War spreadsheet if you aren\'t on there already.`);
});

//command processing
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

//autotimer for war placements
const warjob1 = new CronJob(`10 9 * * 4`, function() {
    const warchannel = client.channels.cache.get(`641976295781040135`);//clan-war channel
    const warann = client.channels.cache.get(`669663004031320077`);//war announcement channel
    const warembed = new Discord.MessageEmbed()
        .setColor(`RED`)
        .setTitle(`ALERT`)
        .setDescription(`War placements are now open.\n\n 
                        Please check your placement in ${warann}.`)
    warchannel.send(`@everyone`);
    warchannel.send(warembed);
}, null, true, `Europe/London`);
warjob1.start();

//autotimer for war placements last call
const warjob2 = new CronJob(`0 21 * * 5`, function() {
    const warchannel = client.channels.cache.get(`641976295781040135`);//clan-war channel
    const warann = client.channels.cache.get(`669663004031320077`);//war announcement channel
    const warembed2 = new Discord.MessageEmbed()
        .setColor(`RED`)
        .setTitle(`\*\*ALERT\*\*`)
        .setDescription(`War placements are closing at 9AM BST tomorrow!.\n\n 
                        Please check your placement in ${warann} and join if you haven't already.\n\n
                        If you do not join you may be kicked out of the clan.`)
    warchannel.send(`@everyone`);
    warchannel.send(warembed2);
    
}, null, true, `Europe/London`);
warjob2.start();


client.login(token);