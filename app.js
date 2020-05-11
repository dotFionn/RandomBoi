const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //client.user.setActivity('.sel <options |-separated>', { type: 'LISTENING' });
    client.user.setPresence({ activity: { name: '.sel', type: 'LISTENING' }, status: 'online' })
});

client.on('message', msg => {
    if (msg.content.startsWith('.sel')) {
        //
        let msg_components = msg.content.split(" ")
        msg_components.shift();
        let str = msg_components.join(' ');
        if (str.includes('|')) {
            let strs = str.split('|');
            let nr = Math.floor(Math.random() * strs.length);
            msg.reply(strs[nr]);
        } else {
            msg.reply(str);
        }
    }
});

client.login(process.env.BOT_TOKEN);