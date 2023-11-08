const {cmd } = require('../lib')

cmd({
            pattern: "insta",
            desc: "Downloads video from insta.",
            category: "downloader",
            filename: __filename,
            use: '<faded-Alan Walker>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Example : ${prefix}video Back in black`)
            let instadl = require("secktor-pack")
            let search = await instadl(text)
	    let i = search.all[1] ;
	    	
            const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`;   };
            try {
		let urlinsta = i.url ; 
                let infoinsta = await instadl.getInfo(urlinsta);

                let VidTime = Math.floor(i.timestamp* 60);
		if( VidTime  >= videotime) return await citel.reply(`❌ Video file too big!`);
                let titleinsta = infoinsta.videoDetails.title;
                let randomName = getRandom(".mp4");
                const stream = instadl(urlinsta, {   filter: (info) => info.itag == 22 || info.itag == 18, })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                   
		let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        mimetype: 'video/mp4',
                        caption: "  •ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ• " + Config.caption ,
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);

                }catch(e){return await citel.reply("Error While Downloading Video : " + e ); }
		    
