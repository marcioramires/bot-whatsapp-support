const { Client }  = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr,{small:true})
})

client.on( 'message', (message) => {
    if(message.body.includes('erro') || message.body.includes('esse problema')){
        message.reply('No code, no support!')
    }
})

client.on('ready', () => {
    console.log('Bot is running...')
})

client.initialize();