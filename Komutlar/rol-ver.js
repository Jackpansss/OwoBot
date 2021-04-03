const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  if (!message.guild) {
    const Jackpan = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        "⚠ **Uyarı** ⚠",
        "`rol-ver` **Adlı Komutu Özel Mesajlarda Kullanamazsın!**"
      );
    return message.author.sendEmbed(Jackpan);
  }
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const EmbedJackpan = new Discord.MessageEmbed()
      .setDescription("```⚠ Ne yazık ki bu komutu kullanmaya yetkin yok. ⚠ ```")
      .setColor("BLACK");
 
    message.channel.send(EmbedJackpan);
    return;
  }
 
  let guild = message.guild;
  let rol = message.mentions.roles.first();
  let user = message.mentions.members.first();

  if (!user)
    return message
      .reply("**⚠ Rol verebilmek icin kullanıcının ismini ve verilecek rölü yazmalısın! ⚠ **")
      .catch(console.error);

  user.roles.add(rol);
  const Jackpan = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(
      `✅  Başarıyla ${user} İsimli Kullanıcıya ${rol} İsimli Rol Verildi!`
    )
    .setFooter("Captan Bot");
  message.channel.send(Jackpan);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 5
};
 //Crew Code
exports.help = {
  name: "rol-ver",
  description: "İstediğiniz kişiyi istediğiniz rolü verir.",
  usage: "rol-ver [kullanıcı] [@rol]"
};