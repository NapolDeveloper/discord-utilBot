const Discord = require('discord.js');
const client = new Discord.Client();

exports.makeEmbed = function (userNickname, userId, userTag, avatarUrl) {
  const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setAuthor(userNickname + '의 프로필')
    .addField((name = '서버 닉네임'), (value = userNickname))
    .addFields(
      {
        name: '유저 ID',
        value: userId,
        inline: true,
      },
      {
        name: '유저 Tag',
        value: userTag,
        inline: true,
      }
    )
    .setThumbnail(avatarUrl);
  exports.embed = embed;
};
