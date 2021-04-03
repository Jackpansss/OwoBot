const Discord = require ("discord.js");

exports.run = (client, message) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
const EmbedJackpan = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » CAPTAN Bot  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)** **•** **[Web-Site]( )**
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [-ilet](https://discord.gg/qzHTkhjQgT) → Yapımcıma yazdığınız yazıyı iletir!.**Boş yere kullanmayın!!!**
> [-aşk-ölç](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişinin aşkını ölcer <3 .
> [-kullanıcı-bilgi](https://discord.gg/qzHTkhjQgT) → Etiketlediniz kullanıcın bilgilerini gösterir.
> [-medya](https://discord.gg/qzHTkhjQgT) → Sosyal medyalarım. 
> [-toplamkomut](https://discord.gg/qzHTkhjQgT) → Botta ne kadar komut oldunu gösterir.
> [-aile](https://discord.gg/qzHTkhjQgT) → Ne kadar büyük bi aile oldumuzu öğrenmek istermisin?
> [-say](https://discord.gg/qzHTkhjQgT) → Sunucu hakkında detaylı bilgi verir.
> [-avatar](https://discord.gg/qzHTkhjQgT) → Etiketlediğin birisinin avatarını gösterir.
> [-yetkilerim](https://discord.gg/qzHTkhjQgT) → Hangi yetkilere sahip olduğunuzu gösterir.
> [-profil](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişini profilini görürsünüz.
> [-sunucuresmi](https://discord.gg/qzHTkhjQgT) → Sunucu resmini gösterir.
> [-ping](https://discord.gg/qzHTkhjQgT) → Botun Pingine Bakarsın. 
> [-kurallar](https://discord.gg/qzHTkhjQgT) → Genel kuralları gösterir.
> [-davet](https://discord.gg/qzHTkhjQgT) → beni sunucuna ekle.
> [-botbilgi](https://discord.gg/qzHTkhjQgT) → Bot hakkında bilgi gösterir
> [-bug-bildir](https://discord.gg/qzHTkhjQgT) → Yazdığınız bug'u yapımcılarıma bildirir.
> [-istek-kod](https://discord.gg/qzHTkhjQgT) → Yazdığınız istek kodu yapımcılarıma bildirir.
> [-instagram](https://discord.gg/qzHTkhjQgT) → Yazdığınız intagram kullanıcsı hakkında bilgi verir.

**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : Manyak*#9999**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2020 Captan | Tüm hakları saklıdır.
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'kullanıcı', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-kullanıcı'
};