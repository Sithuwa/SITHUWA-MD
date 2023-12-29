//result from musixmatcH 
const {
    cmd,
    fetchJson,
    lang,
    config
} = require('../lib');


cmd({
    pattern: 'lyrics',
    desc: lang.LYRICS.DESC,
    type: "search"
}, async (Void,citel,text) => {
    text = text || citel.reply_message.text;
    if(!text) return await citel.send(lang.BASE.TEXT);
    const res = await fetchJson(config.BASE_URL+'api/lyrics?text='+text);
    if(!res.status) return citel.send(lang.BASE.ERROR.format("Not Found"));
    if(!res.result) return citel.send(lang.BASE.ERROR.format(",try again"));
    const { thumb,lyrics,title,artist } = res.result, tbl= "```", tcl ="*_", tdl = "_*";
        const msg = lang.LYRICS.RESPONCE.format(tcl+artist+tdl,tcl+title+tdl)+`\n\n${tbl}${lyrics}${tbl}`;
        return await citel.client.sendMessage(citel.from, {
            image: {url : thumb},
            caption :msg
        }, {
            quoted: m
        })
});
