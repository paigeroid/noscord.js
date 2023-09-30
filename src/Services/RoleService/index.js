const { Client } = require('../../Client');
const fs = require('fs');

Client.newC("RoleService");

module.exports = RoleService;


let cust_dir = require('./custard/_funkydir');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

cust.forEach( (file) => {
    require(`./custard/${file}`);
});
