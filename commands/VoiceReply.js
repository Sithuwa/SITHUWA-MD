async function sendVoiceReply(to, audioUrl) {
  const response = await fetch('https://api.whatsapp.com/send/message', {
    method: 'POST',
    headers: {
      'Authorization': ' ',
    },
    body: JSON.stringify({
      to,
      audio: {
        url: audioUrl,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send voice reply');
  }
}
