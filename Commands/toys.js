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
		if (args[0] === `shaman`) {
			embed.setColor(`BLUE`)
			embed.setTitle(`Optimal Shaman Toys`)
			embed.setDescription(`The Top 4 Toys for Shaman`)
            embed.addFields(
                {name: `First`, value: `Sheep`},
                {name: `Second`, value: `Snow Marmot`},
                {name: `Third`, value: `Hermic Crab`},
                {name: `Fourth`, value: `Ankylosaur`},
                {name: `\u200B`, value: `\u200B`},
                {name: `Optionals:`, value: `Irish Elk \nQueen Dragon\nWind Dragon`})
        }
            
            
            //Last Map, the Last Continent.
            //What will you most “Likely Use” that normally a shaman doesn’t use. 
            //1: Irish Elk 100% situational 
            //2: Queen Dragon 50% Situational 
            //3: Wind Dragon 10% small`)

    message.channel.send(embed)
    },
};