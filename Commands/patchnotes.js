const Discord = require(`discord.js`);
const fs = require(`fs`);

module.exports = {
    name: `patchnotes`,
	description: 
	`Provides a preview of the patch notes and the option to send them to <#640817663131516939>`,
    aliases: [`patch`],
    args: false,
    cooldown: 600,
	execute(message) {

            fs.readFile(`./patchnotes.txt`, `utf8`, function(err, contents) {
                const announcementchannel = message.client.channels.cache.get(`640817663131516939`);
                const confirmchannel = message.client.channels.cache.get(`704372707764207678`);
                
                if (!message.member.roles.cache.some(roles => roles.name === "Officer")) {
                    message.reply(`you don't have permission to use this command.`);
                    return;
                }

                confirmchannel.send(`contents`, {split: true});

                confirmchannel.send(`\*\*\_\_Are you happy with these patch notes to be send to everyone using the \`@here\` tag?\_\_\*\*`).then(sentMessage => {
                    sentMessage.react(`👍`);
                    sentMessage.react(`👎`);

                const filter = (reaction, user) => {
                    return [`👍`, `👎`].includes(reaction.emoji.name) && user.id === message.author.id;
                };

                sentMessage.awaitReactions(filter, { max: 1, time: 60000, errors: [`time`] })
                    .then(collected => {
                        const reaction = collected.first();

                        if (reaction.emoji.name === `👍`) {
                            announcementchannel.send(`\@here`);
                            announcementchannel.send(`contents`, {split: true});
                            message.reply(`these patch notes have been sent!`)
                        }
                        else {
                            message.channel.bulkDelete(2, true);
                            message.reply(`you have decided not to send these patch notes.`);
                            
                        }
                    })
                    .catch(collected => {
                        message.channel.bulkDelete(2, true);
                        message.reply(`you didn't react in 1 minute, announcement cancelled.`);
                    
                    });
                });
            });

            message.delete();

    },
};