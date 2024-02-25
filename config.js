const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94775341543'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'ayeshmax032@gmail.com'
global.github = 'https://github.com/cyber/CYBER-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94775341543"
global.devs = '94775341543';
global.website = 'https://github.com/cyber/CYBER-MD' //wa.me/+94775341543
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/eacd748126e630ea95629.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU1PNDBSemwwcXNUWUgvcC92NEZSNFdvYnA3WG93MHhFLzNnNnpjazJuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2RzaWF3TmdyWmQ4eU8rYWpOcERPNDNvN0pkYTBOdnlHQlVEcUdYSVgyWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQVQzOW5wY2hkRDRKbWdMcm1NaFF1bFNRRmNibytNZU1GbVUxTThYUkVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKS1BCMDdmSUhiRWhsSFgxTXMzQkNhRkV1S1VqVmFmcksyd2FyYkhRdENNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitNWUZsUnBLZWVNZDRSWVRaWWpZQlNjbXNCM1hHNXpDcW5LT3g4d1pSM0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx5U2xOSzZPZWpUcHRnRVJ2cHp2K3ZJTUtvMTV6ZEtTVTZKT1RZSndubk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0J5bVduSlR3V2FnaXNWczlSckRJN3V5UHY4U1AwWnR2SkZJZnNNUytXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidy9pSzd2c2NoN3NEdk5Tcm1zUTJQMkJtbUtTUnozR2l5WFBWc28rS3BTOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRISDYvTks1cDRvRkRubUlIejJ4RHNaSmdVU05rUUx2SHgwVnRMTEM3bFlaaTFTek42V3NQcWU4UjRNdWNraGoyQ3VTNnhwalNjYkZMVmZmcm81aEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJlVUs3a0RsdkFMQ1BNMnI2TE9HUUlxZkphWnBZYWJNMWlqOU1nNkRYTjIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzQmFURENON1MydUk5NWhPcW1MekJ3IiwicGhvbmVJZCI6IjQzMTI5YjY4LTYzZTMtNGNiMC1hNTUyLTdlZGY5NzYwMjA0MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxR2UxWHBra2pBZytPeGZ2S0VCOUFaRDBMMWc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBNTDNuTXhvR1FXZUxuVUFwVjRMbDNnWkRvaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05lZ2xvUUNFS3pPNnE0R0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkwxbW1IUUZYbFJTbHZNMWxXOFpmMWZpWEdSbzNqdFB6UmNOYm0ydUhnaXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpubTROd3NrdHVsMXZMTEJVeXNKMVJLQXZ2K2NzK0psR3ZBMlo1cVJBUjJDUENaWHM0dDVUaGZFSFpEbXdGdTB2WGpHenluRm5ENlFiL0JYTHhkS0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDVHJYM2dteDhadjBXckhEbnl6NjM4S0JsWEI3cnRwZmloYUJVVnhFWjFwcHJSVXVMaGtLQS9DQ3JGNUJHc2FEL0psRlRrUjF2a0x0bDBSVndEWmNDUT09In0sIm1lIjp7ImlkIjoiOTQ3NzUzNDE1NDM6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2ZsvCdmojwnZmx8J2ZtPCdmoFf8J2ZsPCdmojwnZm08J2agvCdmbcifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzUzNDE1NDM6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzlacGgwQlY1VVVwYnpOWlZ2R1g5WDRseGthTjQ3VDgwWERXNXRyaDRJcyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwODgyODQ2Mn0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'CYBER AYESH BOT',
  packname:  process.env.PACK_NAME || 'MADE BY CYBER AYESH',
  
  botname:   process.env.BOT_NAME === undefined ? "CYBER-AYESH" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'cyber-ayesh' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'මැරිලා නැ පකෝ🥱 ඉන්නවා තව 😂' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙲𝚈𝙱𝙴𝚁-𝙰𝚈𝙴𝚂𝙷•* ",   //*『sᴜʙsᴄʀɪʙᴇ • 𝙲𝚈𝙱𝙴𝚁-𝙰𝚈𝙴𝚂𝙷』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? true: process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| '𝙲𝚈𝙱𝙴𝚁-𝙰𝚈𝙴𝚂𝙷',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
