exports.run = (client, Discord, message, args) => {
var sayings = ["It is certain",
										"It is decidedly so",
										"Without a doubt",
										"Yes, definitely",
										"You may rely on it",
										"As I see it, yes",
										"Most likely",
										"Outlook good",
										"Yes",
										"Signs point to yes",
										"Reply hazy try again",
										"Ask again later",
										"Better not tell you now",
										"Cannot predict now",
										"Concentrate and ask again",
										"Don't count on it",
										"My reply is no",
										"My sources say no",
										"Outlook not so good",
										"Very doubtful"];

		 var result = Math.floor((Math.random() * sayings.length) + 0);
const embed = new Discord.RichEmbed()
  .setTitle("8ball")
  .setAuthor(message.author.username, message.author.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor([179, 179, 255])
  .setDescription("Did you forget about me? Your answer is " + sayings[result] + ".")
  .setFooter("Evisocrat", message.author.defaultAvatarURL)
  .setThumbnail("https://images.emojiterra.com/emojione/v2/512px/1f3b1.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  /*
  * Wew
  */
    message.channel.send({embed}).catch(console.error);
     }
