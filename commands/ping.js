exports.run = (client, Discord, message, args) => {
const embed = new Discord.RichEmbed()
  .setTitle("Ping")
  .setAuthor(message.author.username, message.author.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("Ping? Pong! Your response time was " + client.ping + "milliseconds!")
  .setFooter("Evisocrat", message.author.defaultAvatarURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  /*
  * Wew
  */
    message.channel.send({embed}).catch(console.error);
}
