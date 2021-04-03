const Discord = require ("discord.js");

exports.run = (client, message) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
const JackpanCodeembed = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Jackron Bot  **")
.setThumbnail("https://cdn.discordapp.com/attachments/779099271441809420/780001661166813204/gif_lencor.gif")
.setDescription(`

**• Komutlar**
> [-kayit-bilgi](https://discord.gg/qzHTkhjQgT) → Kayıt olma bilgilerini gösterir.
> [-davetoluştur](https://discord.gg/qzHTkhjQgT) → Davet Linki oluşturur.
> [-yetkilerim](https://discord.gg/qzHTkhjQgT) → Mevcut İzinlerini ve rollerini gösterir.
> [--bug-bildir](https://discord.gg/qzHTkhjQgT) → Bot ile herhangi bir bug görürseniz bize bildirebilirsiniz.
> [-istek-kod](https://discord.gg/qzHTkhjQgT) → Herhangi bir yeni sistem isteyebilirsiniz (tavsiye vs.)
> [-davet-siralaması](https://discord.gg/qzHTkhjQgT) → En çok davet atan kişileri gösterir.
> [-taç](https://discord.gg/qzHTkhjQgT) → Emeği Geçenler :) 

**• Bilgilendirme**

> :robot: **Yapımcım : Jackpan*#7134**
© 2020 Jackron | Tüm hakları saklıdır.
`)
 
 

return message.channel.send(JackpanCodeembed)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['yardım','yardim',''], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardim', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardim'
};