const {fetchJson,cmd, tlang,sleep } = require('../lib')

//---------------------------------------------------------------------------

cmd({

            pattern: "Hi",

            desc: "hacking prank",

            use: ' ',

            filename: __filename,

        },

        async(Void,citel, text) => {

citel.reply("```Injecting malware```")

await sleep(1000)
