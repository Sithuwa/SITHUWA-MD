const os = require('os');
const { tlang, botpic,cmd,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')

//---------------------------------------------------------------------------

cmd({

            pattern: "හායි",
            desc: "(menu cmdlist).",
            category: "list",
            react: "👩‍💻",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
            let buttons = [{
                    buttonId: `${prefix}system`,
                    buttonText: {
                        displayText: "System",
                    },
                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                        displayText: "Ping",
                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },
                caption: `
*හායි යාලුවෙ..👋මොකො කරන්නෙ..🧞‍♀️*
`,
                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
cmd({

            pattern: "Mk",
            desc: "(menu cmdlist).",
            category: "list",
            react: "👩‍💻",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
            let buttons = [{
                    buttonId: `${prefix}system`,
                    buttonText: {
                        displayText: "System",
                    },
                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                        displayText: "Ping",
                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },
                caption: `
*මොකුත් නැ අනෙ ඔයා මොනවද කරන්නෙ..🧞‍♀️*
`,
                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
cmd({

            pattern: "Gn",
            desc: "(menu cmdlist).",
            category: "list",
            react: "👩‍💻",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
            let buttons = [{
                    buttonId: `${prefix}system`,
                    buttonText: {
                        displayText: "System",
                    },
                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                        displayText: "Ping",
                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },
                caption: `
*හොල්මන් එයි පරිස්සමෙන් නිදාගන්න...👻*
`,
                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
cmd({

            pattern: "Gm",
            desc: "(menu cmdlist).",
            category: "list",
            react: "👋",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
            let buttons = [{
                    buttonId: `${prefix}system`,
                    buttonText: {
                        displayText: "System",
                    },
                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                        displayText: "Ping",
                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },
                caption: `
*ගුඩ් මෝනිම් ලස්සන ලමයෝ....💓*
`,
                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
