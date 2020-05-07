const Discord = require(`discord.js`);

module.exports = {
    name: `talents`,
	description: 
	`Shows the optimal Hero Bond talents route for the requested class.\n> **The current list of classes are:**
		> Warrior
		> Gladiator (alias: glad)
		> Shaman (alias: sham)
		> Druid
		> Warlock (alias: lock)
		> Assassin (alias: sin)
		> Hunter (alias: hunt)
        > Mage`,
    aliases: [`talentpath`],
    usage: `[class]`,
    args: true,
	execute(message, args) {
        const embed = new Discord.MessageEmbed().setDescription(`You need to add a valid class to the end of the command.\nPlease try again.`).setTitle(`ERROR`);

		if (args[0] === `shaman` || args[0] === `sham`) {
			embed.setColor(`BLUE`)
			embed.setTitle(`Optimal Shaman talents route`)
			embed.setDescription(`The optimal talent route for Shaman`)
            embed.attachFiles(['./talents/shaman.jpg'])
			embed.setImage(`attachment://shaman.jpg`)
		}
		
		else if (args[0] === `druid`) {
			embed.setColor(`GREEN`)
			embed.setTitle(`Optimal Druid talent route`)
			embed.setDescription(`The optimal talent route for Druid`)
            embed.attachFiles(['./talents/druid.jpg'])
			embed.setImage(`attachment://druid.jpg`)
		}
            
		else if (args[0] === `warrior`) {
			embed.setColor(`GREY`)
			embed.setTitle(`Optimal Warrior talent route`)
			embed.setDescription(`The optimal talent route for Warrior`)
            embed.attachFiles(['./talents/warrior.jpg'])
			embed.setImage(`attachment://warrior.jpg`)
		}

		else if (args[0] === `gladiator` || args[0] === `glad`) {
			embed.setColor(`DARK_RED`)
			embed.setTitle(`Optimal Gladiator talent route`)
			embed.setDescription(`The optimal talent route for Gladiator is currently unavailable.\nIf you have a route we can use, please DM or ping Toyota`)
            //embed.attachFiles(['./talents/gladiator.jpg'])
			//embed.setImage(`attachment://gladiator.jpg`)
		}

		else if (args[0] === `assassin` || args[0] === `sin`) {
			embed.setColor(`RED`)
			embed.setTitle(`Optimal Assassin talent route`)
			embed.setDescription(`The optimal talent route for Assassin`)
            embed.attachFiles(['./talents/assassin.jpg'])
			embed.setImage(`attachment://assassin.jpg`)
		}

		else if (args[0] === `hunter` || args[0] === `hunt`) {
			embed.setColor(`DARK_GREEN`)
			embed.setTitle(`Optimal Hunter talent route`)
			embed.setDescription(`The optimal talent route for Hunter is currently unavailable.\nIf you have a route we can use, please DM or ping Toyota`)
            //embed.attachFiles(['./talents/hunter.jpg'])
			//embed.setImage(`attachment://hunter.jpg`)
		}

		else if (args[0] === `mage`) {
			embed.setColor(`BLUE`)
			embed.setTitle(`Optimal Mage talent route`)
			embed.setDescription(`The optimal talent route for Mage is currently unavailable.\nIf you have a route we can use, please DM or ping Toyota`)
            //embed.attachFiles(['./talents/mage.jpg'])
			//embed.setImage(`attachment://mage.jpg`)
		}

		else if (args[0] === `warlock` || args[0] === `lock`) {
			embed.setColor(`PURPLE`)
			embed.setTitle(`Optimal Warlock talent route`)
			embed.setDescription(`The optimal talent route for Warlock`)
            embed.attachFiles(['./talents/warlock.jpg'])
			embed.setImage(`attachment://warlock.jpg`)
		}
    message.channel.send(embed)
    },
};