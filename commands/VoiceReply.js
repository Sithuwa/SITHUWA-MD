
client.on('message', (message) => {
  // Send a voice reply to every message
  client.sendMessage(message.from, {
    audio: {
      url: 'https://example.com/audio.mp3',
    },
  });
});

// Schedule a task to send the voice reply every minute
new Cron.CronJob('0 * * * *', () => {
  // Send the voice reply
}, null, true);

client.connect();

