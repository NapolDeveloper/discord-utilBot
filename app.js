const Discord = require('discord.js');
const client = new Discord.Client();
const Token = require('./token.json');
client.on('ready', () => {
    console.log(`${client.user.tag}에 로그인하였습니다!`);
});
client.on('message', (msg) => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});
client.login(Token.token);
