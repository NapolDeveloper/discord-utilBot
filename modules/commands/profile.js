const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
  name: '프로필',
  description: 'test',
  execute(message, args) {
    const { guild } = message;
    // const { name, region, memberCount, owner, afkTimeout } = guild;

    const user = message.mentions.users.first() || message.member.user;
    const member = guild.members.cache.get(user.id);
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setAuthor(member.nickname + '의 프로필')
      .addField((name = '서버 닉네임'), (value = member.nickname))
      .addFields(
        {
          name: '유저 ID',
          value: message.author.id,
          inline: true,
        },
        {
          name: '유저 Tag',
          value: user.tag,
          inline: true,
        }
      )
      .setThumbnail(message.author.displayAvatarURL());
    message.channel.send(embed);
  },
};
