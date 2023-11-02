let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = '.VoiceClip/Adarei.mp3'
conn.sendFile(m.chat, vn, 'Adarei.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /VoiceReply|VoiceReply/ 
handler.command = new RegExp
module.exports = handler
