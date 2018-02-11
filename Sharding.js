/*
    The following code goes into it's own file, and you run this file
    instead of your main bot file.
*/

const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./Master.js');
Manager.spawn(14); // This example will spawn 14 shards (35,000 guilds);
