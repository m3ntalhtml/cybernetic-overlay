exports.run = (client, Discord, message, args) => {
const embed = new Discord.RichEmbed()
  .setTitle("Welcome to the OmniVent Discord server")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("Welcome to the **OmniVent** Discord server, a Discord server by people on roblox, fueled by a community. Let's go over the rules:\n You wait a moment, User. Let's get it right; I have a few things to say to you. Basic stuff first: Never be cruel, never be cowardly and never forget to be thinking forward. Remember, hate is always foolish and kindness is always wise. Always try to be nice but never fail to be successful. Oh, and you mustn't tell anyone your personal info; no one would understand it anyway.. Laugh hard, run fast, discuss a lot. User, we let you go.")
  /*
   * Takes a Date object, defaults to current date.
   */
  /*
  * I don't bite, and my commands don't either! So, let's make some fields.
  */
  /*
  * Wew
  */
    message.delete()
    message.channel.send({embed}).catch(console.error);
}
