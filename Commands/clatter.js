const Discord = require(`discord.js`);

module.exports = {
	name: `clatter`,
	description: 
	`Shows the optimal clatter cards for the requested class.\n> **The current list of classes are:**
		> Warrior
		> Gladiator (alias: glad)
		> Shaman (alias: sham)
		> Druid
		> Warlock (alias: lock)
		> Assassin (alias: sin)
		> Hunter (alias: hunt)
		> Mage`,
	aliases: [`cards`],
	usage: `[class]`,
	args: true,
	execute(message, args) {
		const embed = new Discord.MessageEmbed().setDescription(`You need to add a valid class to the end of the command.\nPlease try again.`).setTitle(`ERROR`);
		if (args[0] === `warrior`) {
			embed.setColor(`GREY`)
			embed.setTitle(`Optimal Warrior Clatter Cards`)
			embed.setDescription(`These are the optimal, end-game Warrior Clatter Cards.`)
			embed.attachFiles(['./clatter/warrior.jpg'])
			embed.setImage(`attachment://warrior.jpg`)
		}

		if (args[0] === `glad` || args[0] === `gladiator`) {
			embed.setColor(`DARK_RED`)
			embed.setTitle(`Optimal Gladiator Clatter Cards`)
			embed.setDescription(`These are the optimal, end-game Gladiator Clatter Cards`)
			embed.attachFiles(['./clatter/gladiator.jpg'])
			embed.setImage(`attachment://gladiator.jpg`)
		}

		if (args[0] === `shaman` || args[0] === `sham`) {
			embed.setColor(`BLUE`)
			embed.setTitle(`Optimal Shaman Clatter Cards`)
			embed.setDescription(`These are the optimal, end-game Shaman Clatter Cards`)
			embed.attachFiles(['./clatter/shaman.jpg'])
			embed.setImage(`attachment://shaman.jpg`)
		}

		if (args[0] === `druid`) {
			embed.setColor(`GREEN`)
			embed.setTitle(`Optimal Druid Clatter Cards`)
			embed.setDescription(`These are the optimal, end-game Druid Clatter Cards`)
			embed.attachFiles(['./clatter/druid.jpg'])
			embed.setImage(`attachment://druid.jpg`)
		}

		if (args[0] === `warlock` || args[0] === `lock`) {
			embed.setColor(`PURPLE`)
			embed.setTitle(`Optimal Warlock Clatter Cards`)
			embed.setDescription(`These are the optimal, end-game Warlock Clatter Cards`)
			embed.attachFiles(['./clatter/warlock.jpg'])
			embed.setImage(`attachment://warlock.jpg`)
		}

		if (args[0] === `assassin` || args[0] === `sin`) {
			embed.setColor(`RED`)
			embed.setTitle(`Optimal Assassin Clatter Cards`)
			embed.setDescription(`These are the optimal, end-game Assassin Clatter Cards`)
			embed.attachFiles(['./clatter/assassin.jpg'])
			embed.setImage(`attachment://assassin.jpg`)
		}

		if (args[0] === `hunter` || args[0] === `hunt`) {
			embed.setColor(`DARK_GREEN`)
			embed.setTitle(`Optimal Hunter Clatter Cards`)
			embed.setDescription(`These are the optimal, end-game Hunter Clatter Cards`)
			embed.attachFiles(['./clatter/hunter.jpg'])
			embed.setImage(`attachment://hunter.jpg`)
		}

		if (args[0] === `mage`) {
			embed.setColor(`BLUE`)
			embed.setTitle(`Optimal Mage Clatter Cards`)
			embed.setDescription(`These are the optimal, end-game Mage Clatter Cards`)
			embed.attachFiles(['./clatter/mage.jpg'])
			embed.setImage(`attachment://mage.jpg`)
		}

	message.channel.send(embed)
	},
};