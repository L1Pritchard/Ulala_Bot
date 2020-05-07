const Discord = require(`discord.js`);

module.exports = {
    name: `crystals`,
	description: 
	`Shows the optimal Hero Bond gems for the requested class.\n> **The current list of classes are:**
		> Warrior
		> Gladiator (alias: glad)
		> Shaman (alias: sham)
		> Druid
		> Warlock (alias: lock)
		> Assassin (alias: sin)
		> Hunter (alias: hunt)
        > Mage`,
    aliases: [`bondcrystals`],
    usage: `[class]`,
    args: true,
	execute(message, args) {
        const embed = new Discord.MessageEmbed().setDescription(`You need to add a valid class to the end of the command.\nPlease try again.`).setTitle(`ERROR`);

		if (args[0] === `shaman` || args[0] === `sham`) {
			embed.setColor(`BLUE`)
			embed.setTitle(`Optimal Shaman crystals`)
			embed.setDescription(`The top gems for Shaman`)
            embed.addFields(
                {name: `\u200B`, value: `Attribute Crystals:`},
                {name: `1`, value: `Attack/Crit 3`, inline: true},
                {name: `2`, value: `Attack/Crit 2`, inline: true},
                {name: `3`, value: `Crit 3`, inline: true},
                {name: `4`, value: `Crit 2`, inline: true},
                {name: `5`, value: `HP 3`, inline: true},
                {name: `6`, value: `HP 2`, inline: true},
                {name: `7`, value: `Armor/HP 3`, inline: true},
                {name: `8`, value: `Armor/HP 2`, inline: true},
                {name: `9`, value: `Attack/Impale 3`, inline: true},
                {name: `\u200B`, value: `\u200B`},
                {name: `\u200B`, value: `Skill Crystals:`},
                {name: `\u200B`, value: `ATK SPD`, inline: true},
                {name: `\u200B`, value: `Charging`, inline: true},
                {name: `\u200B`, value: `Combo`, inline: true},
                {name: `\u200B`, value: `Support`, inline: true},
                {name: `\u200B`, value: `Life-steal`, inline: true},
                {name: `\u200B`, value: `Secret`, inline: true})
		}
		
		else if (args[0] === `druid`) {
			embed.setColor(`GREEN`)
			embed.setTitle(`Optimal Druid gems `)
			embed.setDescription(`The top gems for Druid`)
            embed.addFields(
                {name: `\u200B`, value: `Attribute Crystals:`},
                {name: `1`, value: `Attack/Crit 3`, inline: true},
                {name: `2`, value: `Attack/Crit 2`, inline: true},
                {name: `3`, value: `Attack/Impale 3`, inline: true},
                {name: `4`, value: `Attack/Impale 2`, inline: true},
                {name: `5`, value: `Crit 3`, inline: true},
                {name: `6`, value: `Crit 2`, inline: true},
                {name: `7`, value: `Impale 3`, inline: true},
                {name: `8`, value: `Armor/HP 3`, inline: true},
                {name: `9`, value: `HP 3`, inline: true},
                {name: `\u200B`, value: `\u200B`},
                {name: `\u200B`, value: `Skill Crystals:`},
                {name: `\u200B`, value: `Gifting`, inline: true},
                {name: `\u200B`, value: `Combo`, inline: true},
                {name: `\u200B`, value: `Secret`, inline: true},
                {name: `\u200B`, value: `Charging`, inline: true},
                {name: `\u200B`, value: `Resist`, inline: true},
                {name: `\u200B`, value: `Survival`, inline: true})
		}
            
		else if (args[0] === `warrior`) {
			embed.setColor(`GREY`)
			embed.setTitle(`Optimal Warrior gems `)
			embed.setDescription(`The top gems for Warrior`)
            embed.addFields(
                {name: `\u200B`, value: `Attribute Crystals:`},
                {name: `1`, value: `HP/Armor 3`, inline: true},
                {name: `2`, value: `HP/Armor 2`, inline: true},
                {name: `3`, value: `Block/Armor`, inline: true},
                {name: `4`, value: `Block/Armor`, inline: true},
                {name: `5`, value: `HP 3`, inline: true},
                {name: `6`, value: `HP 2`, inline: true},
                {name: `7`, value: `Block 3`, inline: true},
                {name: `8`, value: `Block 2`, inline: true},
                {name: `9`, value: `Players Choice`, inline: true},
                {name: `\u200B`, value: `\u200B`},
                {name: `\u200B`, value: `Skill Crystals:`},
                {name: `\u200B`, value: `Resist`, inline: true},
                {name: `\u200B`, value: `Shield`, inline: true},
                {name: `\u200B`, value: `Survival`, inline: true},
                {name: `\u200B`, value: `ATK SPD`, inline: true},
                {name: `\u200B`, value: `Gifting`, inline: true},
                {name: `\u200B`, value: `Combo or Piercing`, inline: true})
		}

		else if (args[0] === `gladiator` || args[0] === `glad`) {
			embed.setColor(`DARK_RED`)
			embed.setTitle(`Optimal Gladiator gems `)
			embed.setDescription(`The top gems for Gladiator`)
            embed.addFields(
                {name: `\u200B`, value: `Attribute Crystals:`},
                {name: `1`, value: `HP 3`, inline: true},
                {name: `2`, value: `HP 2`, inline: true},
                {name: `3`, value: `HP/Armor 3`, inline: true},
                {name: `4`, value: `HP/Armor 2`, inline: true},
                {name: `5`, value: `Block 3`, inline: true},
                {name: `6`, value: `Block 2`, inline: true},
                {name: `7`, value: `Block/Armor 3`, inline: true},
                {name: `8`, value: `Block/Armor 2`, inline: true},
                {name: `9`, value: `Impale 2`, inline: true},
                {name: `\u200B`, value: `\u200B`},
                {name: `\u200B`, value: `Skill Crystals:`},
                {name: `\u200B`, value: `Survival`, inline: true},
                {name: `\u200B`, value: `Life-Steal`, inline: true},
                {name: `\u200B`, value: `Combo`, inline: true},
                {name: `\u200B`, value: `Shield`, inline: true},
                {name: `\u200B`, value: `Piercing`, inline: true},
                {name: `\u200B`, value: `Gifting`, inline: true})
		}

		else if (args[0] === `assassin` || args[0] === `sin`) {
			embed.setColor(`RED`)
			embed.setTitle(`Optimal Assassin gems `)
			embed.setDescription(`The top gems for Assassin`)
            embed.addFields(
                {name: `\u200B`, value: `Attribute Crystals:`},
                {name: `1`, value: `Attack/Crit 3`, inline: true},
                {name: `2`, value: `Attack/Crit 2`, inline: true},
                {name: `3`, value: `Crit 3`, inline: true},
                {name: `4`, value: `Crit 2`, inline: true},
                {name: `5`, value: `Attack/Impale 3`, inline: true},
                {name: `6`, value: `Attack/Impale 2`, inline: true},
                {name: `7`, value: `HP 3`, inline: true},
                {name: `8`, value: `HP 2`, inline: true},
                {name: `9`, value: `Impale 3`, inline: true},
                {name: `\u200B`, value: `\u200B`},
                {name: `\u200B`, value: `Skill Crystals:`},
                {name: `\u200B`, value: `Combo`, inline: true},
                {name: `\u200B`, value: `Piercing`, inline: true},
                {name: `\u200B`, value: `Gifting`, inline: true},
                {name: `\u200B`, value: `Secret`, inline: true},
                {name: `\u200B`, value: `Charging`, inline: true},
                {name: `\u200B`, value: `Pursuing`, inline: true})
		}

		else if (args[0] === `hunter` || args[0] === `hunt`) {
			embed.setColor(`DARK_GREEN`)
			embed.setTitle(`Optimal Hunter gems `)
			embed.setDescription(`The top gems for Hunter`)
            embed.addFields(
                {name: `\u200B`, value: `Attribute Crystals:`},
                {name: `1`, value: `Attack/Crit 3`, inline: true},
                {name: `2`, value: `Attack/Crit 2`, inline: true},
                {name: `3`, value: `Crit 3`, inline: true},
                {name: `4`, value: `Crit 2`, inline: true},
                {name: `5`, value: `Attack/Impale 3`, inline: true},
                {name: `6`, value: `Attack/Impale 2`, inline: true},
                {name: `7`, value: `HP 3`, inline: true},
                {name: `8`, value: `HP 2`, inline: true},
                {name: `9`, value: `Impale 3`, inline: true},
                {name: `\u200B`, value: `\u200B`},
                {name: `\u200B`, value: `Skill Crystals:`},
                {name: `\u200B`, value: `Combo`, inline: true},
                {name: `\u200B`, value: `Piercing`, inline: true},
                {name: `\u200B`, value: `Gifting`, inline: true},
                {name: `\u200B`, value: `Secret`, inline: true},
                {name: `\u200B`, value: `Charging`, inline: true},
                {name: `\u200B`, value: `Pursuing`, inline: true})
		}

		else if (args[0] === `mage`) {
			embed.setColor(`BLUE`)
			embed.setTitle(`Optimal Mage gems `)
			embed.setDescription(`The top gems for Mage`)
            embed.addFields(
                {name: `\u200B`, value: `Attribute Crystals:`},
                {name: `1`, value: `Attack/Crit 3`, inline: true},
                {name: `2`, value: `Attack/Crit 2`, inline: true},
                {name: `3`, value: `Crit 3`, inline: true},
                {name: `4`, value: `Crit 2`, inline: true},
                {name: `5`, value: `Attack/Impale 3`, inline: true},
                {name: `6`, value: `Attack/Impale 2`, inline: true},
                {name: `7`, value: `HP 3`, inline: true},
                {name: `8`, value: `HP 2`, inline: true},
                {name: `9`, value: `Impale 3`, inline: true},
                {name: `\u200B`, value: `\u200B`},
                {name: `\u200B`, value: `Skill Crystals:`},
                {name: `\u200B`, value: `Combo`, inline: true},
                {name: `\u200B`, value: `Piercing`, inline: true},
                {name: `\u200B`, value: `Gifting`, inline: true},
                {name: `\u200B`, value: `Secret`, inline: true},
                {name: `\u200B`, value: `Charging`, inline: true},
                {name: `\u200B`, value: `Pursuing`, inline: true})
		}

		else if (args[0] === `warlock` || args[0] === `lock`) {
			embed.setColor(`PURPLE`)
			embed.setTitle(`Optimal Warlock gems `)
			embed.setDescription(`The top gems for Warlock`)
            embed.addFields(
                {name: `\u200B`, value: `Attribute Crystals:`},
                {name: `1`, value: `Attack/Crit 3`, inline: true},
                {name: `2`, value: `Attack/Crit 2`, inline: true},
                {name: `3`, value: `Crit 3`, inline: true},
                {name: `4`, value: `Crit 2`, inline: true},
                {name: `5`, value: `Attack/Impale 3`, inline: true},
                {name: `6`, value: `Attack/Impale 2`, inline: true},
                {name: `7`, value: `HP 3`, inline: true},
                {name: `8`, value: `HP 2`, inline: true},
                {name: `9`, value: `Impale 3`, inline: true},
                {name: `\u200B`, value: `\u200B`},
                {name: `\u200B`, value: `Skill Crystals:`},
                {name: `\u200B`, value: `Combo`, inline: true},
                {name: `\u200B`, value: `Piercing`, inline: true},
                {name: `\u200B`, value: `Gifting`, inline: true},
                {name: `\u200B`, value: `Secret`, inline: true},
                {name: `\u200B`, value: `Charging`, inline: true},
                {name: `\u200B`, value: `Pursuing or ATK SPD`, inline: true})
		}
    message.channel.send(embed)
    },
};