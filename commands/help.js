exports.run = (client, Discord, message, args) => {
const embed = new Discord.RichEmbed()
  .setTitle("Evie Help")
  .setAuthor(message.author.username, message.author.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("Hi! I'm **Evisocrat**, a wild.. animal tamed by **m3nt8l#5084**. You may call me evie_. \n Like any other domestic animal, I can do tricks. m3nt8l has teached me a lot of tricks (see below) and I can even talk!")
  .setFooter("Evisocrat", message.author.defaultAvatarURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.gg/h5Cz6a9")
  /*
  * I don't bite, and my commands don't either! So, let's make some fields.
  */
    .addField("Statistics", "The prefix for my tricks is ;\nYou are on the shard " + client.shard.id + "/"+ client.options.shardCount + ".\n And that's all I have, currently.")
    .addField("Informational", ";ping - Displays the current heartbeat.\n **Lord m3nt8l has been hiding some secrets**", true)
    .addField("Answers", ";8ball - Shake the 8ball.\n **Lord m3nt8l has been hiding some secrets**", true)
    .addField("Fun", "**Lord m3nt8l has been hiding some secrets**", true)
    .addField("Music", "idk", true);
  /*
  * Wew
  */
    message.reply("I've sent some help to your DM inbox! See you soon. 🐈").catch(console.error);
    message.react("🐶").catch(console.error);
    message.author.send({embed}).catch(console.error);
}
