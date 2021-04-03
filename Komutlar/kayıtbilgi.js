const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("❤️» The Bull's Kayıt Komutları ❤️")
.setTitle("<a:dizzy:750065080741134407> **-kayıt-ol** = Yazarak kayıt olursunuz. <a:confetti_ball:749525084586115153> \n <a:dizzy:750065080741134407>")
.setDescription()
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['kyb'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'kayıt-bilgi',
  category: 'moderasyon',
  description: 'Yardım Menüsü.',
   usage:'-kayıt-bilgi'
}