const whatsapp = require('whatsapp-web.js');

const bot = new whatsapp.Bot();

bot.on('message', (message) => {
  // Respond to the message here.
});

bot.start();
