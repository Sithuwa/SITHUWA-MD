//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                            

/**
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : SITHUWA-MD
 * @author : SITHUWA <https://github.com/Sithuwa>
 * @description : SITHUWA-MD,A Multi-Device whatsapp bot.
 * @version 1.0.0
 **/
 
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

const {cmd , name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');

    cmd({
        pattern: "facebook",
        alias:["fb","fbdl"],
        category: "downloader",
        desc: "downloads facebook videos",
        use: "paste fb video link"
        },
       async(Void, citel, text) => {
           var _0x43ef=["\x72\x65\x70\x6C\x79","\x20","\x73\x70\x6C\x69\x74","","\x63\x68\x61\x74","\x75\x72\x6C","\x72\x65\x73\x75\x6C\x74","\x62\x6F\x74\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x74\x68\x65\x6E","\x66\x61\x63\x65\x62\x6F\x6F\x6B\x64\x6C\x76\x32","\x45\x72\x72\x6F\x72\x20\x77\x68\x69\x6C\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x72\x65\x71\x75\x65\x73\x74"];if(!text){return citel[_0x43ef[0]]("\x2A\x5F\x47\x69\x76\x65\x20\x6D\x65\x20\x66\x61\x63\x65\x62\x6F\x6F\x6B\x20\x76\x69\x64\x65\x6F\x20\x6C\x69\x6E\x6B\x5F\x2A")};let txt=text?text[_0x43ef[2]](_0x43ef[1])[0]:_0x43ef[3];try{bocil[_0x43ef[10]](text)[_0x43ef[9]](async (_0x2bacx2)=>{return Void[_0x43ef[8]](citel[_0x43ef[4]],{video:{url:_0x2bacx2[_0x43ef[6]][0][_0x43ef[5]]},caption:("\u2570\u2508\u27A4\x20\uD835\uDE76\uD835\uDE74\uD835\uDE7D\uD835\uDE74\uD835\uDE81\uD835\uDE70\uD835\uDE83\uD835\uDE74\uD835\uDE73\x20\uD835\uDE71\uD835\uDE88\x20"+name[_0x43ef[7]]+_0x43ef[3]),width:550,height:470},{quoted:citel})})}catch(e){return citel[_0x43ef[0]](_0x43ef[11])}})
   

async function tiktokdl (url) {
    const gettoken = await axios.get("https://tikdown.org/id");
    const $ = cheerio.load(gettoken.data);
    const token = $("#download-form > input[type=hidden]:nth-child(2)").attr("value");
    const param = {
        url: url,
        _token: token,
    };
    const { data } = await axios.request("https://tikdown.org/getAjax?", {
        method: "post",
        data: new URLSearchParams(Object.entries(param)),
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        },
    });
    var getdata = cheerio.load(data.html);
    if (data.status) {
        return {
            status: true,
            thumbnail: getdata("img").attr("src"),
            video: getdata("div.download-links > div:nth-child(1) > a").attr("href"),
            audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"),
        };
    } else return { status: false };
};



cmd({
            pattern: "tiktok",
	    alias:['tt','ttdl'],
            desc: "Downloads Tiktok Videos Via Url.",
            category: "downloader",
            use: "paste tiktok video link",
},

        async(Void, citel, text) => {
            if(!text) return await citel.reply(`*_Give me tiktok video link_*`);
            let txt = text ? text.split(" ")[0]:'';
            if (!/tiktok/.test(txt)) return await citel.reply(`*_Please give me valid tiktok video link..!_*`);
            const { status ,thumbnail, video, audio } = await tiktokdl(txt)
            //console.log("url : " , video  ,"\nThumbnail : " , thumbnail ,"\n Audio url : " , audio )
            if (status) return await Void.sendMessage(citel.chat, {video : {url : video } ,caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`,height: 470,width: 540,  } , {quoted : citel });
            else return await citel.reply("Error while downloading your video") 
        })           
