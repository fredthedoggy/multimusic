const Embeds = require('../embed.js');
const discord = require('discord.js');

module.exports = {
	name: 'about',
	description: 'displays information about MultiMusic',
	permission: 'EVERYONE',
	cooldown: 2,
	execute(message) {
		const embed = new discord.MessageEmbed()
		embed.setTitle("MultiMusic");
		embed.setDescription("MultiMusic is a music bot designed to fix the issue of needing multiple bots.");
		embed.addFields(
            { name: `Author:`, value: `<@547890787682222081>` }
        );
		const CreatedEmbed = Embeds.EmbedGen(embed);
		message.channel.send({ embed: CreatedEmbed })
	}
};
