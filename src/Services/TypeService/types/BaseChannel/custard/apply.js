const BaseChannel = require('../index.js');
const pend = require('pender');


BaseChannel.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "guilds", "util");

    // ids
    this.id = ctx.id;
    this.name = ctx.name;
    this.nsfw = ctx.nsfw;
    this.type = ctx.type;
    this.viewable = ctx.viewable;
	if (ctx.parentId) {
		this.category = await channels.get(ctx.parentId, this.guild);
		this.categoryId = ctx.parentId;
	}
	if (ctx.guildId) {
		this.guild;
    	this.guildId = ctx.guildId;
		this.url = `https://discord.com/channels/${ctx.guildId}/${ctx.id}`;
	}
	else {
		this.url = `https://discord.com/channels/@me/${ctx.id}`;
	}
    this.mention = `<#${ctx.id}>`;

    // times
    this.timestamps = {
        created: new Timestamp(ctx.createdAt),
    }


    this.deleteable = ctx.deleteable;

	// this.topic = ctx.topic;

    // stuff
    if (ctx.guildId) this.guild = await guilds.get(ctx.guildId);
	if (ctx.parentId) this.category = await channels.get(ctx.parentId, this.guild);

	this.client = client;
    
	this.flags = ctx.flags;
    this.partial = ctx.partial;
    /*this.permissionOverwrites = ctx.permissionOverwrites;
    this.permissionsLocked = ctx.permissionsLocked;
    this.position = ctx.position;
    this.rateLimitPerUser = ctx.rateLimitPerUser;
    this.rawPosition = ctx.rawPosition;
    this.threads // await channels.threads(ctx);
    */

});
