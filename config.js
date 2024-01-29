const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '255 694 242 611'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'tanzania'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/ac25ffb9e3932c720ede3.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0RleEtvQ2RjcUQzVERKR1ZGT3lRditPTzFTdFNhMHdTa2txVThqbWFuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGwxV2ZnOWtZdnA4Y0NGNkVWWmx6bmJjdE92c2lZVDBGdlVUdjNwY2R6MD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRWllc3I1RzVMc05MUVRmYzRWZzZiSUxWV1V0N1l0RUpCL2prTERmL1VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXem5GbEhnM3BLQjFLcUhmOUtyQnU4SUt0dmZ4TDlGUmxtSkdHTDlncDFNPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNPNXNOUGtQc293cTkvTUtTV3BhK1ZCYkZvMC9xWUJNL1ZYZkpld1JJM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhKVHZDOFAvdUl4TlNxMzlob0FmQm5kKytuUkd2OGM5ejF4ZWtSSkowaWM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiSWVnQ0FHczBjVUVPVXkyMndPWHFzQkYydmpIVTY0c0Z0S1U2czg4NXRlMEQxaVFQTi9PNWR2SkJ6YVRjZmdiNU5mblRFbkpxZVRCbTVpQzNJdnhDZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEwNywiYWR2U2VjcmV0S2V5IjoiSXE5Q2NTWEI0aG0wWjJuZUhXcnVxcy9SRDRQWW1DZzJiT2lYLzlURDlqMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUTFreHdjd2hUSDJjaGY1SUExOENzZyIsInBob25lSWQiOiJkNzQ2Zjk0Yi0zZTJhLTRhNDYtYTE3YS0yMzhiMTAyMGJjYjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSC9CVHhielNFVDlOTmMvUnNwZThGZ2tjZ1AwPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNNlNpME9oTTJrQ3dzNXhpd25JRHdtZ2hIVmc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLakFpc29DRUtyVzJLMEdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2WE9GUy9obERpVlpucTkxZFQrOG8yVU05M1MyTGdJNGtHcVdHWE5WVlQ4PSIsImFjY291bnRTaWduYXR1cmUiOiJ1TDZpWVorY2lOa2tmTWFTVXB0U1k2aE55S0FXcmN4QWxXNmZJY0NsaVNqZjJEVHQ1NDJTdWNhb3IzWnNENkJmU2hLOFJjMHpJVmJWaDdlVUtTZTdDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOEFpQU9MUURQOFhpOHhVWFJJU0RKUXpoRVMxTjNCM01wM21VQk5hbFp5YnJpeDBzWk1BN3BYNnFqU0dONEROSEl2bmlHbzVZV3Nzd0JYcXh2clNERHc9PSJ9LCJtZSI6eyJpZCI6IjI1NTY5NDI0MjYxMTozNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQYWxjY29kIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY5NDI0MjYxMTozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlbHpoVXY0WlE0bFdaNnZkWFUvdktObERQZDB0aTRDT0pCcWxobHpWVlUvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA2NDM3NDIzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUMyWCJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "PALCOOD-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'palcood' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'delete' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'palccod' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
