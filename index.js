const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzQ5NjM4NTc0NjU1Mjc1MDg4.X0u5Uw.bYNwbkNJ4A1-l9lYLDO2Jc77uxk';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);