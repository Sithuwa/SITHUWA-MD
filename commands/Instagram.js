const {cmd } = require('../lib')
cmd({
        pattern: "insta",
        desc: "download instagram post.",
        category: "downloader",
        filename: __filename
    },
    async(core) => {
	var instavid = /(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/, instastory = /\/stories\/([^\s&]+)/
	var { url, type } = core.input && instavid.test(core.input) ? { url:core.input, type:'vid' } : core.input && instastory.test(core.input) ? { url:core.input, type:'story' } : { url:false, type:false }
	if(!url) {
		return await core.reply(string().insta.need)
	}

	if(type == 'story') {
		return await core.reply(string().insta.story)
	}

	try {
		await core.send((dataDb.InstaDownload || string().insta.dload).setup(core))
		var data = await axios({
			method: 'GET',
			url : Api_url,
			params : {
				api:process.env.Ravindu_Manoj_Api,
				code: 'instagram',
				url
			}
		})
		if(data.data.code != 200) {
			return await core.reply('Invalid Request' + data.data.error)
		}

		await core.send((dataDb.InstaUplaod || string().insta.uload).setup(core))

		var linkdata = await linkPreview(core.input)
		if(!linkdata.mime || linkdata.mime === 'text/html') {
			return await core.reply('*I Am Not Expert For Download This Link*')
		}

		if(linkdata.mime.cut('/')[0] == 'image') {
			return await core.mediasend('image', data.data.result.url, dataDb.caption.setup(core))
		}

		if(linkdata.mime.cut('/')[0] == 'video') {
			return await core.mediasend('video', data.data.result.url, dataDb.caption.setup(core))
		}
	} catch(e) {
		await core.reply(string().insta.error)
	}
}
