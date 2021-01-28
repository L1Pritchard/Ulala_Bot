const Discord = require(`discord.js`);

module.exports = {
	name: `war`,
	description: ``,
	aliases: [`war`],
	usage: `[]`,
	args: false,
	execute(message) {
        //ATK 1 fields
        var ATK11 = `No one, yet :(`;
        var ATK12 = ` `;
        var ATK13 = ` `;
        var ATK14 = ` `;

        //ATK 2 fields
        var ATK21 = `No one, yet :(`;
        var ATK22 = ` `;
        var ATK23 = ` `;
        var ATK24 = ` `;

        //ATK 3 fields
        var ATK31 = `No one, yet :(`;
        var ATK32 = ` `;
        var ATK33 = ` `;
        var ATK34 = ` `;

        //ATK 4 fields
        var ATK41 = `No one, yet :(`;
        var ATK42 = ` `;
        var ATK43 = ` `;
        var ATK44 = ` `;

        //ATK 5 fields
        var ATK51 = `No one, yet :(`;
        var ATK52 = ` `;
        var ATK53 = ` `;
        var ATK54 = ` `;

        //ATK 6 fields
        var ATK61 = `No one, yet :(`;
        var ATK62 = ` `;
        var ATK63 = ` `;
        var ATK64 = ` `;

        //ATK 7 fields
        var ATK71 = `No one, yet :(`;
        var ATK72 = ` `;
        var ATK73 = ` `;
        var ATK74 = ` `;

        //ATK 8 fields
        var ATK81 = `No one, yet :(`;
        var ATK82 = ` `;
        var ATK83 = ` `;
        var ATK84 = ` `;
        const embed = new Discord.MessageEmbed()
            .setTitle(`ATK Teams`)
            .setDescription(`React with the team you have joined in-game`)
            .setColor(`GREY`)
            .addFields(
                {name: `ATK 1`, value: `${ATK11}\n${ATK12}\n${ATK13}\n${ATK14}`, inline: true},
                {name: `ATK 2`, value: `No one, yet :(`, inline: true},
                {name: `\u200b`, value: `\u200b`, inline: false},
                {name: `ATK 3`, value: `No one, yet :(`, inline: true},
                {name: `ATK 4`, value: `No one, yet :(`, inline: true},
                {name: `\u200b`, value: `\u200b`, inline: false},
                {name: `ATK 5`, value: `No one, yet :(`, inline: true},
                {name: `ATK 6`, value: `No one, yet :(`, inline: true},
                {name: `\u200b`, value: `\u200b`, inline: false},
                {name: `ATK 7`, value: `No one, yet :(`, inline: true},
                {name: `ATK 8`, value: `No one, yet :(`, inline: true},

            )
			message.channel.send(embed).then(sentEmbed => {
				sentEmbed.react(`1️⃣`);
                sentEmbed.react(`2️⃣`);
                sentEmbed.react(`3️⃣`);
                sentEmbed.react(`4️⃣`);
                sentEmbed.react(`5️⃣`);
                sentEmbed.react(`6️⃣`);
                sentEmbed.react(`7️⃣`);
                sentEmbed.react(`8️⃣`);

			const filter = (reaction, user) => {
			return [`1️⃣`, `2️⃣`, `3️⃣`, `4️⃣`, `5️⃣`, `6️⃣`, `7️⃣`, `8️⃣`,].includes(reaction.emoji.name) && user.id === message.author.id;
			};

			const collector = sentEmbed.createReactionCollector(filter, { maxUsers: 32, time: 600000, errors: [`time`] });
				collector.on(`collect`, (reaction, user) => {

					if (reaction.emoji.name === `1️⃣`) {
                        ATK11 = user.username;
                        embed.spliceFields(0, 1, {name: `ATK 1`, value: `${ATK11}\n${ATK12}\n${ATK13}\n${ATK14}`, inline: true})
						sentEmbed.edit(embed);
						collector.empty();
					}
					else if (reaction.emoji.name === `2️⃣`) {
                        ATK21 = user.username;
                        embed.spliceFields(1, 1, {name: `ATK 2`, value: `${ATK21}\n${ATK22}\n${ATK23}\n${ATK24}`, inline: true})
						sentEmbed.edit(embed);
						collector.empty();
                    }
                    else if (reaction.emoji.name === `3️⃣`) {
                        ATK31 = user.username;
                        embed.spliceFields(3, 1, {name: `ATK 3`, value: `${ATK31}\n${ATK32}\n${ATK33}\n${ATK34}`, inline: true})
						sentEmbed.edit(embed);
						collector.empty();
                    }
                    else if (reaction.emoji.name === `4️⃣`) {
                        ATK41 = user.username;
                        embed.spliceFields(4, 1, {name: `ATK 4`, value: `${ATK41}\n${ATK42}\n${ATK43}\n${ATK44}`, inline: true})
						sentEmbed.edit(embed);
						collector.empty();
                    }
                    else if (reaction.emoji.name === `5️⃣`) {
                        ATK51 = user.username;
                        embed.spliceFields(6, 1, {name: `ATK 5`, value: `${ATK51}\n${ATK52}\n${ATK53}\n${ATK54}`, inline: true})
						sentEmbed.edit(embed);
						collector.empty();
                    }
                    else if (reaction.emoji.name === `6️⃣`) {
                        ATK61 = user.username;
                        embed.spliceFields(7, 1, {name: `ATK 6`, value: `${ATK61}\n${ATK62}\n${ATK63}\n${ATK64}`, inline: true})
						sentEmbed.edit(embed);
						collector.empty();
                    }
                    else if (reaction.emoji.name === `7️⃣`) {
                        ATK71 = user.username;
                        embed.spliceFields(9, 1, {name: `ATK 7`, value: `${ATK71}\n${ATK72}\n${ATK73}\n${ATK74}`, inline: true})
						sentEmbed.edit(embed);
						collector.empty();
                    }
                    else if (reaction.emoji.name === `8️⃣`) {
                        ATK81 = user.username;
                        embed.spliceFields(10, 1, {name: `ATK 8`, value: `${ATK81}\n${ATK82}\n${ATK83}\n${ATK84}`, inline: true})
						sentEmbed.edit(embed);
						collector.empty();
                    }
                },
                collector.on(`dispose`, (reaction, user) => {

                    if (reaction.emoji.name === `1️⃣`) {
                        if (ATK11 === user.username) {
                        ATK11 = `Empty`;
                        embed.spliceFields(0, 1, {name: `ATK 1`, value: `${ATK11}\n${ATK12}\n${ATK13}\n${ATK14}`, inline: true})
                        sentEmbed.edit(embed);
                        collector.empty();
                        };
                    }
                    else if (reaction.emoji.name === `2️⃣`) {
                        ATK21 = user.username;
                        embed.spliceFields(1, 1, {name: `ATK 2`, value: `${ATK21}\n${ATK22}\n${ATK23}\n${ATK24}`, inline: true})
                        sentEmbed.edit(embed);
                        collector.empty();
                    }
                    else if (reaction.emoji.name === `3️⃣`) {
                        ATK31 = user.username;
                        embed.spliceFields(3, 1, {name: `ATK 3`, value: `${ATK31}\n${ATK32}\n${ATK33}\n${ATK34}`, inline: true})
                        sentEmbed.edit(embed);
                        collector.empty();
                    }
                    else if (reaction.emoji.name === `4️⃣`) {
                        ATK41 = user.username;
                        embed.spliceFields(4, 1, {name: `ATK 4`, value: `${ATK41}\n${ATK42}\n${ATK43}\n${ATK44}`, inline: true})
                        sentEmbed.edit(embed);
                        collector.empty();
                    }
                    else if (reaction.emoji.name === `5️⃣`) {
                        ATK51 = user.username;
                        embed.spliceFields(6, 1, {name: `ATK 5`, value: `${ATK51}\n${ATK52}\n${ATK53}\n${ATK54}`, inline: true})
                        sentEmbed.edit(embed);
                        collector.empty();
                    }
                    else if (reaction.emoji.name === `6️⃣`) {
                        ATK61 = user.username;
                        embed.spliceFields(7, 1, {name: `ATK 6`, value: `${ATK61}\n${ATK62}\n${ATK63}\n${ATK64}`, inline: true})
                        sentEmbed.edit(embed);
                        collector.empty();
                    }
                    else if (reaction.emoji.name === `7️⃣`) {
                        ATK71 = user.username;
                        embed.spliceFields(9, 1, {name: `ATK 7`, value: `${ATK71}\n${ATK72}\n${ATK73}\n${ATK74}`, inline: true})
                        sentEmbed.edit(embed);
                        collector.empty();
                    }
                    else if (reaction.emoji.name === `8️⃣`) {
                        ATK81 = user.username;
                        embed.spliceFields(10, 1, {name: `ATK 8`, value: `${ATK81}\n${ATK82}\n${ATK83}\n${ATK84}`, inline: true})
                        sentEmbed.edit(embed);
                        collector.empty();
                    }
				}),
            )});
		}

		/*if (args[0] === `glad` || args[0] === `gladiator`) {
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
		}*/

		/*if (args[0] === `shaman` || args[0] === `sham`) {
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
		}*/

		/*if (args[0] === `druid`) {
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
		};*/

		/*if (args[0] === `warlock` || args[0] === `lock`) {
			embed.setColor(`PURPLE`)
			embed.setTitle(`Optimal Warlock Clatter Cards`)
			embed.setDescription(`These are the optimal, end-game Warlock Clatter Cards`)
			embed.attachFiles(['./clatter/warlock.jpg'])
			embed.setImage(`attachment://warlock.jpg`)
			message.channel.send(embed)
		};*/

		/*if (args[0] === `assassin` || args[0] === `sin`) {
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
		};*/
            };
//};