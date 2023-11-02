let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = 'SITHUWA-MD/VoiceClip/Adarei.mp3'
conn.sendFile(m.chat, vn, 'Adarei.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Adarei|adarei|ADAREI/ 
handler.command = new RegExp
module.exports = handler
