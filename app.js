const Discord = require('discord.js');
const client = new Discord.Client();
const Token = require('./token.json');

// modules
const Profile = require('./modules/profile/profile');
client.on('ready', () => {
    console.log(`${client.user.tag}에 로그인하였습니다!`);
});
client.on('message', (msg) => {
    if (msg.content.startsWith('!명령어')) {
        msg.channel.send('test');
    }
    if (msg.content.startsWith('!프로필')) {
        Profile.makeEmbed(msg.author.username, msg.author.id, msg.author.avatarURL); // 함수 호출로 임베드 생성
        msg.reply(Profile.embed);
    }
});
client.login(Token.token);
