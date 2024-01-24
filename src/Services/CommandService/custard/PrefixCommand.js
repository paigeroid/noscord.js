const CommandService = require('../index.js');
const { Soup } = require('stews');


CommandService.newC("PrefixCommand", class {
	constructor(info, data) {
		const client = this.parent.parent;

		info = new Soup(info);

		this.name = info.name;
		this.cooldown = info.cooldown;
			
		this.data = data;

		// adds it to the list
		client.pCommands.push(this.name, this);
	}

	get info() {
		let stuff = this;
		
		return new Soup({ 
			name: stuff.name,  
			cooldown: stuff.cooldown
		});
	}
});


module.exports = SlashCommand;
