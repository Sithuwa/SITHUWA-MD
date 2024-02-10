const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94741337646'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'thasinduniduwara2005@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // MR THASINDU NIDUWARA
global.sudo = process.env.SUDO || "94741337646"
global.devs = '94766004745';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94741337646
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "",      //eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0pDaFVTM1dhUWpzT24yQUZVVVEydUFlelVBbFV3ajBSRnN6b2NRTXRrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEZuaklHU3o1QzNTR3NJM3ZnYmtIZzAwNEd4empNTWJiZHRXaE4xamZnRT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRnN3STZKWTYzeDJTRmZRNnZFenk2Q0dGZVliL2tVUWxDN2Q4WDRFdDFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGZjhEa1gzYTREdFFYR3JvdHcxbzdUZHlMdExpOFF0WjVQNTR3WnA0dmc4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1CZUE1QTcyNVgzM2l0TGo0VmFqVmFxMXIxOGNxcS9RQ3o0MExRcG4vbjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcxeEhISnRSb0cydDk5OWp6aUpUbHFWQ3V6aTdUa1hjYXUrUCtsNS9KbVk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUEVFcUhOSWdaTkFBZjFZN2RlY2ptaFBEalVXdVp5dndZcHIyM085RkJFenQrWjArUDY0R1B2K0M2VnMrMERkS1JFaFBmOUNWdlkyb3BPclcwNCtCdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE3OSwiYWR2U2VjcmV0S2V5IjoiSGc0VVFJSVBUbGR6OENRUzJORElqNTZnUmRTOGQ2Q1pMM1JCUGdBUGo0OD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiU0ZKdjNPM1BURm1mWV9YQ1pQSmdrUSIsInBob25lSWQiOiI5NzMyMDZjMi05ZWJjLTQ5MjgtOWZjNC1hMDlmMzNjZjgyNGMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXBmbGVidmc5dEFXZFJSOU5MZUxEcmpzRnpZPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6QzFQc25tWVIwL3VZT053OWRkWFM5YTJGRXM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPYWNnc2NDRUlLQ25hNEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGTDJ3UWxFb3JWc3JPYUlmcnR1NHRweDRDM3JHa3RhblVCVTY2WCs1SVFVPSIsImFjY291bnRTaWduYXR1cmUiOiI0NTkwcjAvKzhXUW1rUDJHOE1CRG5LOHJ3UU1USzNNd1FUZjBCZ251N29Jc2lUNzZxSXFFTG9UL3dzT25pYkpCU3pjT2tDZ0NobVJSRjNKRjBGNGJCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN2lLNHducFJScjIwQjRwaTVRS3ZSVExBak9IY05WbmpqY0x2QndERUZXMWs2U1RnSEdENVBDdHZUa2RoY2lnZ2E1Tk5HOHRWejgrR01SMlhqejQ5RGc9PSJ9LCJtZSI6eyJpZCI6Ijk0NzQxMzM3NjQ2OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGhhc2luZHUgTmlkdXdhcmEifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDEzMzc2NDY6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSUzlzRUpSS0sxYkt6bWlINjdidUxhY2VBdDZ4cExXcDFBVk91bC91U0VGIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA3NTU3MTI2fQ==
  author:  process.env.PACK_AUTHER ||  'THASINDU BOT',
  packname:  process.env.PACK_NAME || 'MADE BY mr thasindu niduwara',
  
  botname:   process.env.BOT_NAME === undefined ? "AISA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'THASINDUNIDUWARA' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ thasindu-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? true : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'aisa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
