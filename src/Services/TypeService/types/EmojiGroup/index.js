const TypeService = require('../../index.js');
const { Soup } = require('stews');
const fs = require('fs');


TypeService.newC("EmojiGroup", class extends Soup {
    constructor(guild) {
        super(Object);
    }
});


module.exports = EmojiGroup;


let cust_dir = require('./custard/_funkydir');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});