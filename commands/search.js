/**
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : SITHUWA-MD
 * @author : SalmanYtOfficial <https://github.com/salmanytofficial>
 * @description : SITHUWA ,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const moment = require('moment-timezone')
const {fetchJson,cmd, tlang } = require('../lib')
let gis = require("async-g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

    //---------------------------------------------------------------------------
cmd({
            pattern: "imdb",
            category: "search",
	    react :'🖼️',
            desc: "Sends image of asked Movie/Series.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`_Name a Series or movie ${tlang().greet}._`);
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);
            let imdbt = "";
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` 𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
            imdbt += "🎬Title      : " + fids.data.Title + "\n";
            imdbt += "📅Year       : " + fids.data.Year + "\n";
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n";
            imdbt += "📆Released   : " + fids.data.Released + "\n";
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n";
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";
            imdbt += "✍Writer     : " + fids.data.Writer + "\n";
            imdbt += "👨Actors     : " + fids.data.Actors + "\n";
            imdbt += "📃Plot       : " + fids.data.Plot + "\n";
            imdbt += "🌐Language   : " + fids.data.Language + "\n";
            imdbt += "🌍Country    : " + fids.data.Country + "\n";
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";
            imdbt += "🏙️Production : " + fids.data.Production + "\n";
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";
            imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";
            Void.sendMessage(citel.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "weather",
            category: "search",
	    react :'🗯',
            desc: "Sends weather info about asked place.",
            use: '<location>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply("Give me location.Baka!!");
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = "";
            textw += `*🌟Weather of  ${text}*\n\n`;
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`;
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`;
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`;
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`;
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`;
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`;
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`;
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`;
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`;
            textw += `*Country:-* ${wdata.data.sys.country}\n`;


            return await citel.reply(textw)
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "horo",
            category: "search",
	    react :'👻',
            desc: "Gives horoscope info of user.",
            use: '<sign>\n:Example: horo libra',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply("Provide me a sign!")
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`;
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date;
                        console.log(date);
                        let textw = "";
                        textw += `*🌟 Horoscope of  ${text}*\n\n`;
                        textw += `*Current Date:* ${json.current_date}.\n`;
                        textw += `*Sign:* ${text}.\n`;
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`;
                        textw += `*Compatibility:* ${json.compatibility}.\n`;
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`;
                        textw += `*Lucky Color:* ${json.color}.\n`;
                        textw += `*Today Mood:* ${json.mood}.\n`;
                        textw += `*Overall:* ${json.description}.\n`;
                        citel.reply(textw)
                    });

            } catch (e) {
                console.log(e)
            }
        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "google",
        alias :['search','gsearch'],
        category: "search",
	react :'✅',
        desc: "Sends info of given query from Google Search.",
        use: '<text>',
        filename: __filename,
    },
    async(Void, citel, text) => {
        if (!text) return citel.reply(`give me a query\n*Example : .google Who is Sithuwa Md.*`);
        let google = require('google-it');
        google({ 'query': text}).then(res => {
            let msg= `Google Search From : ${text} \n\n`;
            for (let g of res) {
                msg+= `➣ Title : ${g.title}\n`;
                msg+= `➣ Description : ${g.snippet}\n`;
                msg+= `➣ Link : ${g.link}\n\n────────────────────────\n\n`;
            }
         
            return citel.reply(msg);
        })
    }
)
  //---------------------------------------------------------------------------
    cmd({
        pattern: "truecall",
        alias :['trucall','tcall'],
        category: "search",
	react :'📞',
        desc: "Sends info of given query from truecall Search.",
        use: '<text>',
        filename: __filename,
    },
   async (Void, citel, text) => {
	if (!text && !citel.quoted) return await citel.reply('_Enter the number you want to search_');
	const number = citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, '')
	const result = await truecaller(number, citel.user_id)
	return await citel.reply(result);
})
    //---------------------------------------------------------------------------
cmd({
            pattern: "image",
            category: "search",
	    react :'🖼️',
            desc: "Searches Image on Google",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply("Provide me a query!")
            if (!text) return reply("Hey bie please tell me for which pic you're looking");
            let name1 = text.split("|")[0]
            let name2 = text.split("|")[1] || `1`
            citel.reply(`Sending ${name2} image(s) of ${name1} in chat`)
            let nn = name2
            for (let i = 0; i < nn; i++) {

                let n = await gis(name1)
                    images = n[Math.floor(Math.random() * n.length)].url;
                    await Void.sendMessage(citel.chat, {image: {  url: images,}, caption: `_SITHUWA Image Search_\n*${name1}*`,}, { quoted: citel, });
            }
        }
    )
    //---------------------------------------------------------------------------

cmd({
        pattern: "cricket",
        alias :['cs','mach'],
        category: "search",
	react :'💣',
        desc: "Cricket Search.",
        use: ' ',
        filename: __filename,
    },
    async(bot, man, tax) => {

          man.send (`*_Please Wait, While Getting Cricket Updates_*`);
const _0x485f13=_0xc8fc;(function(_0xea9292,_0x3f139b){const _0x213a89=_0xc8fc,_0x3e0c50=_0xea9292();while(!![]){try{const _0x36daa8=-parseInt(_0x213a89(0x78))/(0x3b3+-0x23da+-0x405*-0x8)+parseInt(_0x213a89(0x6c))/(-0x915+-0x3c4*0x8+0x2737*0x1)+parseInt(_0x213a89(0x70))/(0x1a8c+-0xdf3*-0x1+-0x287c)+parseInt(_0x213a89(0x82))/(0xe17+0x1*-0x12f+-0xce4)*(-parseInt(_0x213a89(0x76))/(-0x6ec+0x21bd+-0x1acc))+-parseInt(_0x213a89(0x81))/(0x1*0x169f+-0x26e4+0x2b*0x61)+-parseInt(_0x213a89(0x87))/(0xdc2+0xf6b+-0x1*0x1d26)+parseInt(_0x213a89(0x8a))/(0x8*-0x353+-0x5aa+0x204a);if(_0x36daa8===_0x3f139b)break;else _0x3e0c50['push'](_0x3e0c50['shift']());}catch(_0x27ba26){_0x3e0c50['push'](_0x3e0c50['shift']());}}}(_0x33fc,0x3e36*-0xa+-0x154cdc+0xe*0x287c5));const response=await fetch(_0x485f13(0x86)+_0x485f13(0x7d)+_0x485f13(0x6f)+_0x485f13(0x73)+_0x485f13(0x79)+_0x485f13(0x7b)+_0x485f13(0x77)+_0x485f13(0x8d)+_0x485f13(0x7f)),dat=await response[_0x485f13(0x88)]();function _0xc8fc(_0x2f821a,_0x33dadc){const _0x5a8907=_0x33fc();return _0xc8fc=function(_0x19d3dd,_0xd34c1d){_0x19d3dd=_0x19d3dd-(-0x471*-0x4+0x17f5+-0x2952);let _0x2eab78=_0x5a8907[_0x19d3dd];return _0x2eab78;},_0xc8fc(_0x2f821a,_0x33dadc);}function _0x33fc(){const _0x4576c5=['reply','\x0a*•𝙼𝙰𝚃𝙲𝙷\x20𝙴','com/v1/cur','3854604oDkQWW','𝚃𝙰𝚃𝚄𝚂•*\x20','𝙰𝚃𝙴•*\x20','rentMatche','length','matchStart','2210285SqEbaS','c9-47c5-8f','1300428xSrjMf','s?apikey=f','𝙰𝙼𝙴•*\x20','68d1cb5-a9','\x0a*✯────𝐌𝐀𝐓','i.cricapi.','𝙽𝙳𝙴𝙳•*\x20','ace78','\x0a*•𝙼𝙰𝚃𝙲𝙷\x20𝙽','1610550BQOseR','4lHQhEe','𝚃𝙰𝚁𝚃𝙴𝙳•*\x20','matchEnded','data','https://ap','4494392EmBlJn','json','\x0a*•𝙼𝙰𝚃𝙲𝙷\x20𝙳','12533368EWYRzv','name','status','cd-fbfe52b','dateTimeGM','log','𝐂𝐇\x20','────✯*','\x0a*•𝙼𝙰𝚃𝙲𝙷\x20𝚂','1135682ImKxKM'];_0x33fc=function(){return _0x4576c5;};return _0x33fc();}console[_0x485f13(0x68)](dat);for(let i=-0x6b*0x2+0x90d*-0x2+0x12f0;i<dat[_0x485f13(0x85)][_0x485f13(0x74)];i++){let j=i+(-0x12*-0x10b+0x5d*0x68+-0x388d);tax+=_0x485f13(0x7c)+_0x485f13(0x69)+i+_0x485f13(0x6a),tax+=_0x485f13(0x80)+_0x485f13(0x7a)+dat[_0x485f13(0x85)][i][_0x485f13(0x8b)],tax+=_0x485f13(0x6b)+_0x485f13(0x71)+dat[_0x485f13(0x85)][i][_0x485f13(0x8c)],tax+=_0x485f13(0x89)+_0x485f13(0x72)+dat[_0x485f13(0x85)][i][_0x485f13(0x67)+'T'],tax+=_0x485f13(0x6b)+_0x485f13(0x83)+dat[_0x485f13(0x85)][i][_0x485f13(0x75)+'ed'],tax+=_0x485f13(0x6e)+_0x485f13(0x7e)+dat[_0x485f13(0x85)][i][_0x485f13(0x84)]+'\x0a';}return await man[_0x485f13(0x6d)](tax);


})
//-----------------------------------------------------------------------------
cmd({
            pattern: "couplepp",
            category: "search",
	    react :'👩‍❤️‍👨',
            desc: "Sends two couples pics.",
            filename: __filename,
        },
        async(Void, citel, text) => {
            let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
            let random = anu[Math.floor(Math.random() * anu.length)]
            Void.sendMessage(citel.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: citel })
            Void.sendMessage(citel.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: citel })
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "iswa",
        category: "search",
	react :'🪀',
        desc: "Searches in given rage about given number.",
        use: '94xxxxxxxxx',
        filename: __filename,
    },
    async(Void, citel, text) => {
        var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return citel.reply('You did not add x\nExample: iswa 94xxxxxxxxx')
        citel.reply(`Searching for WhatsApp account in given range...`)

        function countInstances(string, word) {
            return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {   randomxx = 10 } 
        else if (random_length == 2) { randomxx = 100  } 
        else if (random_length == 3) {randomxx = 1000  }
        var text = `*--『 List of Whatsapp Numbers 』--*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random;
            if (random_length == 1) {
                random = `${status1}`
            } else if (random_length == 2) {
                random = `${status1}${status2}`
            } else if (random_length == 3) {
                random = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Void.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Void.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text += `🧐 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n ✨*Bio :* ${anu1.status}\n🍁*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch { nowhatsapp += `${number0}${i}${number1}\n` }
        }
        citel.reply(`${text}${nobio}${nowhatsapp}`)

    }
)
