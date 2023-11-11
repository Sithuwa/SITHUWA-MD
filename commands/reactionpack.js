//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                            𝚅.𝟷.𝟸.𝟽                                                   // 
//                          //
//                                          BY:SITHUM-KALHARA                                             //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

/**

 
 cmd({
            pattern: "reactions-pack",
            category: "reactions",
            use: '<quote|reply|tag>',
        },
 **/




        const axios = require('axios')
        const { fetchJson,cmd, GIFBufferToVideoBuffer} = require('../lib')
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "bite",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel, text) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/bite`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} bitten to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} bitten to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
            cmd({
                pattern: "poke",
                category: "reactions",
                use: '<quote|reply|tag>',
            },
            async(Void, citel) => {
                var bite = await fetchJson(`https://api.waifu.pics/sfw/poke`);
                const response = await axios.get(bite.url, {
                    responseType: "arraybuffer",
                });
                const buffer = Buffer.from(response.data, "utf-8");
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                let gif = await GIFBufferToVideoBuffer(buffer);
                if (users) {
                    let cap = `@${citel.sender.split("@")[0]} poked to @${users.split("@")[0]} `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                } else {
                    let cap = `@${citel.sender.split("@")[0]} poked to everyone. `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                }
            }
        )
    //-----------------------------------------------------------------------
    cmd({
                pattern: "hug",
                category: "reactions",
                use: '<quote|reply|tag>',
            },
            async(Void, citel) => {
                var bite = await fetchJson(`https://api.waifu.pics/sfw/hug`);
                const response = await axios.get(bite.url, {
                    responseType: "arraybuffer",
                });
                const buffer = Buffer.from(response.data, "utf-8");
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                let gif = await GIFBufferToVideoBuffer(buffer);
                if (users) {
                    let cap = `@${citel.sender.split("@")[0]} hug to @${users.split("@")[0]} `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                } else {
                    let cap = `@${citel.sender.split("@")[0]} huged to everyone. `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                }
            }
        )
    //-----------------------------------------------------------------------
    cmd({
                pattern: "hold",
                category: "reactions",
                use: '<quote|reply|tag>',
            },
            async(Void, citel) => {
                var bite = await fetchJson(`https://api.waifu.pics/sfw/handhold`);
                const response = await axios.get(bite.url, {
                    responseType: "arraybuffer",
                });
                const buffer = Buffer.from(response.data, "utf-8");
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                let gif = await GIFBufferToVideoBuffer(buffer);
                if (users) {
                    let cap = `@${citel.sender.split("@")[0]} hold hand of @${users.split("@")[0]} `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                } else {
                    let cap = `@${citel.sender.split("@")[0]} holed to everyone. `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                }
            }
        ) 
    //-----------------------------------------------------------------------
    cmd({
                pattern: "hifi",
                category: "reactions",
                use: '<quote|reply|tag>',
            },
            async(Void, citel) => {
                var bite = await fetchJson(`https://api.waifu.pics/sfw/highfive`);
                const response = await axios.get(bite.url, {
                    responseType: "arraybuffer",
                });
                const buffer = Buffer.from(response.data, "utf-8");
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                let gif = await GIFBufferToVideoBuffer(buffer);
                if (users) {
                    let cap = `@${citel.sender.split("@")[0]} highfive with @${users.split("@")[0]} `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                } else {
                    let cap = `@${citel.sender.split("@")[0]} highfived with everyone. `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                }
            }
        )
            //------------------------------------------------------------------------------
        cmd({
                    pattern: "blush",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/blush`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} blushed to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} blushed to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "punch",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/kick`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} punched to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} punched everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "pat",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/pat`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} patted with @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} patted with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "kiss",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/kiss`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} kissed to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} kissed with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "kill",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/kill`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} killed @${users.split("@")[0]}. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} killed everyone over here. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "happy",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/dance`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} felt happy with @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} felt happy with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "dance",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/dance`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} danced with @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} danced with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "yeet",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/yeet`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} yeeted to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} yeeted with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "wink",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/wink`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} winked with @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} winked with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "slap",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/slap`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} slapped @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} slapped to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "bonk",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/bonk`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} bonked to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} bonked to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "bully",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/bully`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} bullied to @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} bullied to everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                    pattern: "cringe",
                    category: "reactions",
                    use: '<quote|reply|tag>',
                },
                async(Void, citel) => {
        
                    var bite = await fetchJson(`https://api.waifu.pics/sfw/cringe`);
                    const response = await axios.get(bite.url, {
                        responseType: "arraybuffer",
                    });
                    const buffer = Buffer.from(response.data, "utf-8");
                    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                    let gif = await GIFBufferToVideoBuffer(buffer);
                    if (users) {
                        let cap = `@${citel.sender.split("@")[0]} cringed at @${users.split("@")[0]} `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                    } else {
                        let cap = `@${citel.sender.split("@")[0]} cringed with everyone. `;
                        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                    }
                }
            )
            //---------------------------------------------------------------------------
        cmd({
                pattern: "cuddle",
                category: "reactions",
                use: '<quote|reply|tag>',
            },
            async(Void, citel) => {
        
                var bite = await fetchJson(`https://api.waifu.pics/sfw/cuddle`);
                const response = await axios.get(bite.url, {
                    responseType: "arraybuffer",
                });
                const buffer = Buffer.from(response.data, "utf-8");
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                let gif = await GIFBufferToVideoBuffer(buffer);
                if (users) {
                    let cap = `@${citel.sender.split("@")[0]} cuddled with @${users.split("@")[0]} `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
                } else {
                    let cap = `@${citel.sender.split("@")[0]} cuddled with everyone. `;
                    Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
                }
            }
        )
