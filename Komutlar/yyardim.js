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
> [-mute](https://discord.gg/qzHTkhjQgT) → Belirli kişiyi muteler.
> [-unmute](https://discord.gg/qzHTkhjQgT) → Muteli kullanıcının mustesini açar.
> [-yavaşmod](https://discord.gg/qzHTkhjQgT) → Komutu kullandığın kanalın yavaş modunu ayarlar (-yavaşmod 3) gibi.
> [-unban](https://discord.gg/qzHTkhjQgT) → Banlı bir kullanıcının mutesini açar.
> [-rolver](https://discord.gg/qzHTkhjQgT) → Belirli kullanıcıya rolverir
> [-rolal](https://discord.gg/qzHTkhjQgT) → Belirli bir kullanıcıdan rol alır.
> [-sa-as](https://discord.gg/qzHTkhjQgT) → sa yazanlara as diye cevap verir.
> [-reklam](https://discord.gg/qzHTkhjQgT) → Reklam Engeli reklam yapmayı önler.
> [-pm](https://discord.gg/qzHTkhjQgT) → Belirli bir kişiye özelden mesaj atar.
> [-fakemesaj](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişiye @everyone atar ama görünmez.
> [-duyuru](https://discord.gg/qzHTkhjQgT) → İstediğiniz yazıyı duyuru şeklinde atar.
> [-anket](https://discord.gg/qzHTkhjQgT) → Anket Oluşturur.
> [-nick](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişinin ismini değiştirir.
> [-kayitayarla](https://discord.gg/qzHTkhjQgT) → Kayıt Odası oluşturur sadece seçtiğiniz kanalda kayıt yapar.
> [-sil](https://discord.gg/qzHTkhjQgT) → (-sil 100) 100 adet mesaj siler. istediğiniz rakamı yazarsanız istediğiniz kadarını siler.
> [-id](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişinin ID'sini verir.
> [-idkanal](https://discord.gg/qzHTkhjQgT) → Etiketlediğin Kanalın ID'sini verir.
> [-üyedürüm](https://discord.gg/qzHTkhjQgT) → Sunucudaki üye durumunu belirtir.
**• Bilgilendirme**
** Bunların Çalışması için botun üyelerden üstün bir yetkiye sahip olması gerekmektedir**
** Komutları Kullanabilmeniz için Üyelerden üstün bir role sahip olmanız gerekmektedir Sunucu Sahibi olmanız bir anlam ifade etmemektedir.**

> :robot: **Yapımcım : Jackpan*#7134**
© 2020 Jackron | Tüm hakları saklıdır.
`)
 
 

return message.channel.send(JackpanCodeembed)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['yyardım','yyardim',''], 
    permLevel: 2
};
  
  exports.help = {
    name: 'yyardim', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yyardim'
};