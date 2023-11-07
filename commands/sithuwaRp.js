const os = require('os');
const { tlang, botpic,cmd,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')

//---------------------------------------------------------------------------

cmd({

            pattern: "gm",
            desc: "Bot Chat Voice.",
            category: "Voice Chat",
            react: "👩‍💻",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
              await Void.sendPresenceUpdate('recording', citel.chat);
            await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/Sithuwa/SITHUWA-MD/raw/main/media/Gm.mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
//---------------------------------------------------------------------------
