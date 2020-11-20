const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { prefix, token } = require('./config.json');
// modules

// command 폴더 내의 .js 파일들 가져오기
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./modules/commands/').filter((file) => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./modules/commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`${client.user.tag}에 로그인하였습니다!`);
});
client.on('message', (message) => {
    // 명령어 자동 인식
    if (!message.content.startsWith(prefix) || message.author.bot) return; // prefix로 시작하지 않거나 봇이면 실행 종료
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return; // 명령어가 없으면 실행 종료
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});
client.login(token);
