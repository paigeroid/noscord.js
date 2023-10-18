const TypeService = require('../../index.js');
const fs = require('fs');

TypeService.newC("GuildMember");

module.exports = GuildMember;

let cust_dir = require('./custard/_funkydir');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
