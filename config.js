const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "African/Cairo";
global.github=process.env.GITHUB|| "https://t.me/R_I_I_F";
global.gurl  =process.env.GURL  || "https://t.me/R_I_I_F";
global.website=process.env.GURL || "https://t.me/R_I_I_F" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/VCFfJ1s/Picsart-24-11-03-19-39-45-823.png" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© المطور أواب تيتو" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "201153429564";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "201153429564";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/yYftqsC/appicon.png" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_38_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDgwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDU3LFxuICAgICAgICA1LFxuICAgICAgICA4NCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwLFxuICAgICAgICA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODYsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODMsXG4gICAgICAgIDY0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDc3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR1draU4yVzhpSDJKOE41aW9UTGhkS3RIZGV2Mnh3RjZmdVdnQ2RqOU5rND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDExNTM0Mjk1NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAyOEVGOEFDRTZGOEM2ODkxNkE5OTVEQjNFNjlGQzZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTY5MTkwMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIwMTE1MzQyOTU2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUExQkQ1MjYxODQ5RkE5NzkxOTkzM0YzNDREQUQzNzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1NjkxOTAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMTUzNDI5NTY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5RDM1OUQ3QTYxMEY1QTZFQkM0MkQ2RTVFQ0VFMzU1OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU2OTE5MDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDExNTM0Mjk1NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE4NDYzQkZGMERGNjU3QjIzRTIxMkUxMDlDODlDNzNFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTY5MTkwNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUOHpfR0pGSFJsdWhVeWI1U01fSnl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjkxMzlmNTUwLWUyY2ItNDM0YS04ZmMwLTUyMTZiYzFlODQxNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICAxNDksXG4gICAgICA5NSxcbiAgICAgIDExMyxcbiAgICAgIDI1NSxcbiAgICAgIDIyMSxcbiAgICAgIDE0MCxcbiAgICAgIDE5NSxcbiAgICAgIDE2MCxcbiAgICAgIDE4NCxcbiAgICAgIDIyNyxcbiAgICAgIDE1LFxuICAgICAgOTYsXG4gICAgICA4NyxcbiAgICAgIDE5NCxcbiAgICAgIDIzOCxcbiAgICAgIDIzNSxcbiAgICAgIDExNyxcbiAgICAgIDE4LFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMjE4LFxuICAgICAgMjksXG4gICAgICAxOTAsXG4gICAgICAyMzAsXG4gICAgICAyMDksXG4gICAgICAzNyxcbiAgICAgIDMsXG4gICAgICAxNTgsXG4gICAgICAzOSxcbiAgICAgIDMyLFxuICAgICAgMjcsXG4gICAgICA1NixcbiAgICAgIDk1LFxuICAgICAgMTQzLFxuICAgICAgMTk5LFxuICAgICAgMjQsXG4gICAgICAxMzQsXG4gICAgICA2NCxcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1URDdBTUNXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMDExNTM0Mjk1NjQ6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcItin2YTYqNix2KzZiNin2LLZilwiLFxuICAgIFwibGlkXCI6IFwiMTI1ODMwMjYwODcxMzAxOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUt1Z0k4R0VQaWMwcnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3VFJmNFZzcDFpV25hNXl0alRSdXltbkZVMTZPU1BJMnU4OFBhdWZsTHlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNYMTd0NHpzQlhZWUlHODZPaXo2K2ZFekVBZXFSN1pBaFhpemhmcTNZSkxDZzBUK1c3clhWZUJQNndxNGtaNzdnTEcxWjRLZkEyS282b2RxSnVLREJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImp1M0tmL3c0bFRCdnZiOFVFZzVlMVFKSzRoRDJTanA5TG1yNXhCV3pKdXdIa2dQMDJDTG1NNCtGTTlrV0dRSElPYmNDSktZdCtZYWFhQThnYUhra0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIwMTE1MzQyOTU2NDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU2OTE5MDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKS3dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpLdy5qc29uIjogIntcImtleURhdGFcIjpcIjA3eTdYOGFsK1NCVTdGK253cCszU0F2dERLViswcmVmQ3BkOENPQUFIRTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY0MjA3NTk3MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1NjkxOTAyMzU4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "تم بواسطة بوت المطور أواب تيتو" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "تيتو بحبك",
  packname: process.env.PACK_NAME || "انستا تبعي awabofficial يوزر أسطورة 😭☝️🔥",
  botname : process.env.BOT_NAME  || "بوت تيتو لديكم",
  ownername:process.env.OWNER_NAME|| "تيتو شخصيا",


  errorChat : process.env.ERROR_CHAT || "احا 😂",
  KOYEB_API : process.env.KOYEB_API  || "frjcpvfggmmxl7jd905e3jik2fw1uck0ntwwsv3emywnf3w38k2mc9cd2bonlpj5",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "TETO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "70aeaa9e46a2187d0f0dd32c3b4d45ad";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
