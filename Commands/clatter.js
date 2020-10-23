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
			embed.setImage("https://i.imgur.com/smcjKp8.jpg")
			embed.setDescription(`This is a standard build for end-game Warriors.`);
			message.channel.send(embed).then(sentEmbed => {
				sentEmbed.react(`1️⃣`);
				sentEmbed.react(`2️⃣`);

			const filter = (reaction, user) => {
			return [`1️⃣`, `2️⃣`].includes(reaction.emoji.name) && user.id === message.author.id;
			};

			const collector = sentEmbed.createReactionCollector(filter, { maxUsers: 1, time: 60000, errors: [`time`] });
				collector.on(`collect`, (reaction, user) => {

					if (reaction.emoji.name === `1️⃣`) {
						embed.setImage("https://i.imgur.com/smcjKp8.jpg");
						embed.setDescription(`This is a standard build for end-game Warriors.`);
						sentEmbed.edit(embed);
						reaction.users.remove(user.id);
						collector.empty();
					}
					else if (reaction.emoji.name === `2️⃣`) {
						embed.setImage("https://i.imgur.com/HHS5Kof.jpg");
						embed.setDescription(`This build sacrifices the Warg King for slightly more damage.`)
						sentEmbed.edit(embed);
						reaction.users.remove(user.id);
						collector.empty();
					}
				})
			});
		}

		if (args[0] === `glad` || args[0] === `gladiator`) {
			embed.setColor(`DARK_RED`)
			embed.setTitle(`Optimal Gladiator Clatter Cards`)
			embed.setImage(`https://i.imgur.com/smcjKp8.jpg`)
			embed.setDescription(`This is a standard build for end-game Gladiators.`);
			message.channel.send(embed).then(sentEmbed => {
				sentEmbed.react(`1️⃣`);
				sentEmbed.react(`2️⃣`);

			const filter = (reaction, user) => {
			return [`1️⃣`, `2️⃣`].includes(reaction.emoji.name) && user.id === message.author.id;
			};

			const collector = sentEmbed.createReactionCollector(filter, { maxUsers: 1, time: 60000, errors: [`time`] });
				collector.on(`collect`, (reaction, user) => {

					if (reaction.emoji.name === `1️⃣`) {
						embed.setImage("https://i.imgur.com/smcjKp8.jpg");
						embed.setDescription(`This is a standard build for end-game Gladiators.`);
						sentEmbed.edit(embed);
						reaction.users.remove(user.id);
						collector.empty();
					}
					else if (reaction.emoji.name === `2️⃣`) {
						embed.setImage("https://i.imgur.com/HHS5Kof.jpg");
						embed.setDescription(`This build sacrifices the Warg King for slightly more damage.`)
						sentEmbed.edit(embed);
						reaction.users.remove(user.id);
						collector.empty();
					}
				})
			});
		}

		if (args[0] === `shaman` || args[0] === `sham`) {
			embed.setColor(`BLUE`)
			embed.setTitle(`Optimal Shaman Clatter Cards`)
			embed.setImage(`https://i.imgur.com/Tg8kc9o.jpg`)
			embed.setDescription(`This is a standard poison build.`)
			message.channel.send(embed).then(sentEmbed => {
				sentEmbed.react(`1️⃣`);
				sentEmbed.react(`2️⃣`);
				sentEmbed.react(`3️⃣`);


			const filter = (reaction, user) => {
			return [`1️⃣`, `2️⃣`, `3️⃣`].includes(reaction.emoji.name) && user.id === message.author.id;
			};

			const collector = sentEmbed.createReactionCollector(filter, { maxUsers: 1, time: 60000, errors: [`time`] });
				collector.on(`collect`, (reaction, user) => {

					if (reaction.emoji.name === `1️⃣`) {
						embed.setImage("https://i.imgur.com/Tg8kc9o.jpg");
						embed.setDescription(`This is a standard poison build.`);
						sentEmbed.edit(embed);
						reaction.users.remove(user.id);
						collector.empty();
					}
					else if (reaction.emoji.name === `2️⃣`) {
						embed.setImage("https://i.imgur.com/9NT7Oat.png");
						embed.setDescription(`This is a standard non-poison build.`)
						sentEmbed.edit(embed);
						reaction.users.remove(user.id);
						collector.empty();
					}
					else if (reaction.emoji.name === `3️⃣`) {
						embed.setImage("https://i.imgur.com/ltvd4nF.png");
						embed.setDescription(`This build is for end-game, Evergreen and after.`)
						sentEmbed.edit(embed);
						reaction.users.remove(user.id);
						collector.empty();
					}
				})
			});
		}

		if (args[0] === `druid`) {
			embed.setColor(`GREEN`)
			embed.setTitle(`Optimal Druid Clatter Cards`)
			embed.setImage(`https://i.imgur.com/Tg8kc9o.jpg`)
			embed.setDescription(`This is a standard poison build.`)
			message.channel.send(embed).then(sentEmbed => {
				sentEmbed.react(`1️⃣`);
				sentEmbed.react(`2️⃣`);
				sentEmbed.react(`3️⃣`);


			const filter = (reaction, user) => {
			return [`1️⃣`, `2️⃣`, `3️⃣`].includes(reaction.emoji.name) && user.id === message.author.id;
			};

			const collector = sentEmbed.createReactionCollector(filter, { maxUsers: 1, time: 60000, errors: [`time`] });
				collector.on(`collect`, (reaction, user) => {

					if (reaction.emoji.name === `1️⃣`) {
						embed.setImage("https://i.imgur.com/Tg8kc9o.jpg");
						embed.setDescription(`This is a standard poison build.`);
						sentEmbed.edit(embed);
						reaction.users.remove(user.id);
						collector.empty();
					}
					else if (reaction.emoji.name === `2️⃣`) {
						embed.setImage("https://i.imgur.com/9NT7Oat.png");
						embed.setDescription(`This is a standard non-poison build.`)
						sentEmbed.edit(embed);
						reaction.users.remove(user.id);
						collector.empty();
					}
					else if (reaction.emoji.name === `3️⃣`) {
						embed.setImage("https://i.imgur.com/ltvd4nF.png");
						embed.setDescription(`This build is for end-game, Evergreen and after.`)
						sentEmbed.edit(embed);
						reaction.users.remove(user.id);
						collector.empty();
					}
				})
			})
		};

		if (args[0] === `warlock` || args[0] === `lock`) {
			embed.setColor(`PURPLE`)
			embed.setTitle(`Optimal Warlock Clatter Cards`)
			embed.setDescription(`These are the optimal, end-game Warlock Clatter Cards`)
			embed.attachFiles(['./clatter/warlock.jpg'])
			embed.setImage(`attachment://warlock.jpg`)
			message.channel.send(embed)
		};

		if (args[0] === `assassin` || args[0] === `sin`) {
			embed.setColor(`RED`)
			embed.setTitle(`Optimal Assassin Clatter Cards`)
			embed.setDescription(`These are the optimal, end-game Assassin Clatter Cards`)
			embed.attachFiles(['./clatter/assassin.jpg'])
			embed.setImage(`attachment://assassin.jpg`)
			message.channel.send(embed)
		};

		if (args[0] === `hunter` || args[0] === `hunt`) {
			embed.setColor(`DARK_GREEN`)
			embed.setTitle(`Optimal Hunter Clatter Cards`)
			embed.setDescription(`These are the optimal, end-game Hunter Clatter Cards`)
			embed.attachFiles(['./clatter/hunter.jpg'])
			embed.setImage(`attachment://hunter.jpg`)
			message.channel.send(embed)
		};

		if (args[0] === `mage`) {
			embed.setColor(`BLUE`)
			embed.setTitle(`Optimal Mage Clatter Cards`)
			embed.setDescription(`These are the optimal, end-game Mage Clatter Cards`)
			embed.attachFiles(['./clatter/mage.jpg'])
			embed.setImage(`attachment://mage.jpg`)
			message.channel.send(embed)
		};
	},
};