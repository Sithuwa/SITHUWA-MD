const {cmd } = require('../lib')
cmd({
        pattern: "insta",
        desc: "download instagram post.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
        const { Insta } = require('../lib')
if(!text) return citel.reply('Need post url.')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], (`*Downloaded Media from instagram.*`)
        
Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
return fs.unlinkSync(`./${randomName}`);
        
}catch(e){return await citel.reply("🥺 Error While Downloading Video : " + e ); }
    })
