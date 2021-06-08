const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.js");

client.on('ready', () => {
    console.log(`Join Server: https://discord.gg/gU7XAxTpX5`)
})

client.on("message", (message) => {
    if (message.author.bot) return
    if (message.channel.id === config.channelid) {
    const fetch = require("node-fetch").default;
                     
     fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${config.botname}&ownername=Romeo#0700`, {
        
    })
        .then(res => res.json())
        .then(data => {
            message.channel.send(data.message);
        })
        .catch(e => console.error('Error Occur Join my server for help'));
      }
      console.log(`Message: ${message.content}`)
    })

client.login(process.env.TOKEN);
