const {cmd } = require('../lib')
cmd({
        pattern: "facebook",
	    alias :  ['fb','fbdl'],
        desc: "Downloads fb videos.",
        category: "downloader",
        filename: __filename,
        use: '<add fb url.>'
},
async(Void, citel, text) => {
        const _0x53f436=_0x4a53;(function(_0x469779,_0x9bf43f){const _0x1184c6=_0x4a53,_0x33c964=_0x469779();while(!![]){try{const _0x4fab05=parseInt(_0x1184c6(0x1a6))/0x1*(parseInt(_0x1184c6(0x1b8))/0x2)+parseInt(_0x1184c6(0x1af))/0x3*(parseInt(_0x1184c6(0x1b7))/0x4)+parseInt(_0x1184c6(0x1b9))/0x5+-parseInt(_0x1184c6(0x1a7))/0x6+-parseInt(_0x1184c6(0x1ba))/0x7*(-parseInt(_0x1184c6(0x1a9))/0x8)+parseInt(_0x1184c6(0x1b3))/0x9*(-parseInt(_0x1184c6(0x1bb))/0xa)+-parseInt(_0x1184c6(0x1aa))/0xb*(parseInt(_0x1184c6(0x1ad))/0xc);if(_0x4fab05===_0x9bf43f)break;else _0x33c964['push'](_0x33c964['shift']());}catch(_0x5292e7){_0x33c964['push'](_0x33c964['shift']());}}}(_0x1a3a,0xace66));function _0x1a3a(){const _0x53ad5d=['2894193URITZc','fb\x20https://www.facebook.com/watch/?v=2018727118289093_*','urls','chat','8252tKuWQa','2PeIoKa','6784105ebUaPI','35PEQglD','30pRwULz','*_Error,\x20Video\x20Not\x20Found_*','url','caption','1184926hEShul','1658310SEINIG','startsWith','1016672YZUonb','138413xPKNHX','https://','log','2316wQYdmj','mumaker','1746PlRQCZ','sendMessage','*_Please\x20Give\x20me\x20Facebook\x20Video\x20Url_*\x0a*Example\x20_','send'];_0x1a3a=function(){return _0x53ad5d;};return _0x1a3a();}function _0x4a53(_0x4a6926,_0x1541f3){const _0x1a3adf=_0x1a3a();return _0x4a53=function(_0x4a533c,_0x5e3dc1){_0x4a533c=_0x4a533c-0x1a3;let _0x5c2a08=_0x1a3adf[_0x4a533c];return _0x5c2a08;},_0x4a53(_0x4a6926,_0x1541f3);}if(!text||!text[_0x53f436(0x1a8)](_0x53f436(0x1ab)))return await citel[_0x53f436(0x1b2)](_0x53f436(0x1b1)+prefix+_0x53f436(0x1b4));try{const {facebook}=require(_0x53f436(0x1ae));let info=await facebook(text);return await Void[_0x53f436(0x1b0)](citel[_0x53f436(0x1b6)],{'video':{'url':info[_0x53f436(0x1b5)][0x0][_0x53f436(0x1a4)]},'caption':Config[_0x53f436(0x1a5)]},{'quoted':citel});}catch(_0xb02f31){return await citel[_0x53f436(0x1b2)](_0x53f436(0x1a3));console[_0x53f436(0x1ac)]('error\x20while\x20Fb\x20Downloading\x20:\x20',_0xb02f31);}
})
