const os = require('os');
const { tlang, botpic,cmd,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')

//---------------------------------------------------------------------------

cmd({

            pattern: "gm",
            alias:['goodmorning','ගුඩ්මෝනිම්'],
            desc: "chat bot voice.",
            category: "voice chat",
            react: "🥳",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
              await Void.sendPresenceUpdate('recording', citel.chat);
            await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/Sithuwa/SITHUWA-MD/raw/main/media/Gm.mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
        }
    )
//---------------------------------------------------------------------------

cmd({

            pattern: "gn",
            alias:['goodnight','ගුඩ්නයිට්'],
            desc: "chat bot voice.",
            category: "voice chat",
            react: "👻",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
              await Void.sendPresenceUpdate('recording', citel.chat);
            await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/Sithuwa/SITHUWA-MD/raw/main/media/Gn.mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
        }
    )
//---------------------------------------------------------------------------

cmd({

            pattern: "bye",
            alias:['by','බායි'],
            desc: "chat bot voice.",
            category: "voice chat",
            react: "👋",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
              await Void.sendPresenceUpdate('recording', citel.chat);
            await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/Sithuwa/SITHUWA-MD/raw/main/media/Bye.mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
        }
    )
//---------------------------------------------------------------------------

cmd({

            pattern: "hmm",
            alias:['hum','හ්ම්ම්','හුම්ම්'],
            desc: "chat bot voice.",
            category: "voice chat",
            react: "😒",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
              await Void.sendPresenceUpdate('recording', citel.chat);
            await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/Sithuwa/SITHUWA-MD/raw/main/media/Hmm.mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
        }
    )
//---------------------------------------------------------------------------

cmd({

            pattern: "hi",
            alias:['හායි','hello'],
            desc: "chat bot voice.",
            category: "voice chat",
            react: "😃",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
              await Void.sendPresenceUpdate('recording', citel.chat);
            await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/Sithuwa/SITHUWA-MD/raw/main/media/Hi.mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
        }
    )
//---------------------------------------------------------------------------
