exports.run = (client, message, args) => {
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
		 var ResultEmbed = {"title": "8ball Answer", "description": sayings[result], "color": 01301313, "thumbnail": "http://www.pngmart.com/files/3/8-Ball-Pool-Transparent-PNG.png"};
     message.reply({embed: ResultEmbed});
     }
