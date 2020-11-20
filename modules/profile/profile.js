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

  /*
        .setTitle(userName)
        .setURL('https://discord.js.org/')
        .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true }
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
        */
  exports.embed = embed;
};
