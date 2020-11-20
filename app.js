const Discord = require('discord.js');
const client = new Discord.Client();
const Token = require('./token.json');

// modules
const Profile = require('./modules/profile/profile');
client.on('ready', () => {
  console.log(`${client.user.tag}에 로그인하였습니다!`);
});
client.on('message', (msg) => {
  // 명령어 임베드
  if (msg.content.startsWith('!명령어')) {
    msg.channel.send('test');
  }
  // 프로필 임베드
  if (msg.content.startsWith('!프로필')) {
    const { guild } = msg;
    const user = msg.mentions.users.first() || msg.member.user;
    const member = guild.members.cache.get(user.id);
    Profile.makeEmbed(member.nickname, msg.author.id, user.tag, msg.author.displayAvatarURL()); // 함수 호출로 임베드 생성
    msg.reply(Profile.embed);
  }
});
client.login(Token.token);
