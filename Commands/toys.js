const Discord = require(`discord.js`);

module.exports = {
	name: `toys`,
	description: 
	`Shows the optimal toys for the requested class.\n> **The current list of classes are:**
		> Warrior
		> Gladiator (alias: glad)
		> Shaman (alias: sham)
		> Druid
		> Warlock (alias: lock)
		> Assassin (alias: sin)
		> Hunter (alias: hunt)
		> Mage`,
	args: true,
	execute(message, args) {
		const embed = new Discord.MessageEmbed();
		if (args[0] === `shaman` | `sham`) {
			embed.setColor(`BLUE`)
			embed.setTitle(`Optimal Shaman Toys`)
			embed.setDescription(`The Top 4 Toys for Shaman`)
            embed.addFields(
                {name: `First`, value: `Sheep`},
                {name: `Second`, value: `Snow Marmot (keep regular too)`},
                {name: `Third`, value: `Hermic Crab`},
                {name: `Fourth`, value: `Ankylosaur`},
                {name: `\u200B`, value: `\u200B`},
                {name: `Optionals:`, value: `Irish Elk\nQueen Dragon\nWind Dragon`})
		}
		
		if (args[0] === `druid`) {
			embed.setColor(`GREEN`)
			embed.setTitle(`Optimal Druid Toys`)
			embed.setDescription(`The Top 4 Toys for Druid`)
            embed.addFields(
                {name: `First`, value: `Sheep`},
                {name: `Second`, value: `Snow Marmot (keep regular too)`},
                {name: `Third`, value: `Hermit Crab`},
                {name: `Fourth`, value: `Moblin`},
                {name: `\u200B`, value: `\u200B`},
                {name: `Optionals:`, value: `Irish Elk\nQueen Dragon\nWind Dragon\nDodo Bird\nDandelion`})
		}
            
		if (args[0] === `warrior`) {
			embed.setColor(`GREY`)
			embed.setTitle(`Optimal Warrior Toys`)
			embed.setDescription(`The Top 4 Toys for Warrior`)
            embed.addFields(
                {name: `First`, value: `White Camel`},
                {name: `Second`, value: `Irish Elk`},
                {name: `Third`, value: `Narwhal King`},
                {name: `Fourth`, value: `Snow Marmot (keep regular too)`},
                {name: `\u200B`, value: `\u200B`},
                {name: `Optionals:`, value: `Dimetrodon\nTriceratops\nWalrus\nAnkylosaur\nWind Dragon\nDandelion`})
		}

		if (args[0] === `gladiator` | `glad`) {
			embed.setColor(`DARK_RED`)
			embed.setTitle(`Optimal Gladiator Toys`)
			embed.setDescription(`The Top 4 Toys for Gladiator`)
            embed.addFields(
                {name: `First`, value: `Snow Marmot (keep regular too)`},
                {name: `Second`, value: `White Camel`},
                {name: `Third`, value: `Natwhal King`},
                {name: `Fourth`, value: `Irish Elk`},
                {name: `\u200B`, value: `\u200B`},
                {name: `Optionals:`, value: `Dimetrodon\nTriceratops\nDandelion\nWind Dragon\nAnkylosaur`})
		}

		if (args[0] === `assassin` | `sin`) {
			embed.setColor(`RED`)
			embed.setTitle(`Optimal Assassin Toys`)
			embed.setDescription(`The Top 4 Toys for Assassin`)
            embed.addFields(
                {name: `First`, value: `Snow Marmot (keep regular too)`},
                {name: `Second`, value: `Black Moblin`},
                {name: `Third`, value: `Sabre Tiger King`},
                {name: `Fourth`, value: `Brown Bear`},
                {name: `\u200B`, value: `\u200B`},
                {name: `Optionals:`, value: `Anyklosaur\nUnicorn Gorilla\nYak King`})
		}

		if (args[0] === `hunter` | `hunt`) {
			embed.setColor(`DARK_GREEN`)
			embed.setTitle(`Optimal Hunter Toys`)
			embed.setDescription(`The Top 4 Toys for Hunter`)
            embed.addFields(
                {name: `First`, value: `Black Moblin`},
                {name: `Second`, value: `Brown Bear`},
                {name: `Third`, value: `Sabre Tiger King`},
                {name: `Fourth`, value: `Snowfield Marmot`},
                {name: `\u200B`, value: `\u200B`},
                {name: `Optionals:`, value: `Anyklosaur\nUnicorn Gorilla\nWarg King\nYak King`})
		}

		if (args[0] === `mage`) {
			embed.setColor(`BLUE`)
			embed.setTitle(`Optimal Mage Toys`)
			embed.setDescription(`The Top 4 Toys for Mage`)
            embed.addFields(
                {name: `First`, value: `Snow Marmot (keep regular too)`},
                {name: `Second`, value: `Black Moblin`},
                {name: `Third`, value: `Sabre Tiger King`},
                {name: `Fourth`, value: `Yak King`},
                {name: `\u200B`, value: `\u200B`},
                {name: `Optionals:`, value: `Brown Bear\nAnkylosaur\nUnicorn Gorilla\nWarg King`})
		}

		if (args[0] === `warlock` | `lock`) {
			embed.setColor(`PURPLE`)
			embed.setTitle(`Optimal Warlock Toys`)
			embed.setDescription(`The Top 4 Toys for Warlock`)
            embed.addFields(
                {name: `First`, value: `Black Moblin`},
                {name: `Second`, value: `Brown Bear`},
                {name: `Third`, value: `Sabre Tiger King`},
                {name: `Fourth`, value: `Snow Marmot (keep regular too)`},
                {name: `\u200B`, value: `\u200B`},
                {name: `Optionals:`, value: `Ankylosaur\nUnicorn Gorilla\nWarg King\nYak King`})
		}
    message.channel.send(embed)
    },
};