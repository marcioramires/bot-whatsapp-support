// const { Client, LocalAuth }  = require('whatsapp-web.js');
// const qrcode = require('qrcode-terminal');

// const client = new Client({
//     authStrategy: new LocalAuth({ dataPath: './.wwebjs_auth/session' })
// });

// client.on('qr', (qr) => {
//     // Generate and scan this code with your phone
//     qrcode.generate(qr,{small:true})
// })

// client.on( 'message', (message) => {
//     if(message.body.includes('erro') || message.body.includes('esse problema')){
//         message.reply('No code, no support!')
//     }
// })

// client.on('ready', () => {
//     console.log('Bot is running...')
// })

// client.initialize();

const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
 
const client = new Client({
    authStrategy: new LocalAuth(),
});
 
client.initialize();
 
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});
 
client.on('authenticated', () => {
    console.log('Authenticated');
  });
 
client.on('ready', () => {
  console.log('Client is ready!');
});