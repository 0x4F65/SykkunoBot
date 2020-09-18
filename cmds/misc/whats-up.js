const { Command } = require('discord.js-commando');
module.exports = class WhatsUpCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'whatsup',
			group: 'misc',
			memberName: 'whatsup',
			description: 'What\'s up guys'
		});
	}

	run(message) {
		return message.say('**What is up guys, It\'s Sykkuno here!**');
	}
};