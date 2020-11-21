const Discord = require('discord.js');
module.exports = {
    name: '명령어',
    description: 'ping test',
    execute(message, args) {
        const embed = new Discord.MessageEmbed().setColor('#0099ff').setAuthor(this.description);
        /*
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
            */
        message.channel.send(embed);
    },
};
