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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_57_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUwLFxuICAgICAgICA4NyxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNixcbiAgICAgICAgMTE0LFxuICAgICAgICA1NixcbiAgICAgICAgODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MSxcbiAgICAgICAgOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NixcbiAgICAgICAgMjEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU2LFxuICAgICAgICA2MSxcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDk3LFxuICAgICAgICA1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg5LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIxLFxuICAgICAgICA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2LFxuICAgICAgICA1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9EajJDdWw3cGVoR3hQZThxaHFlK2lXQlpkR2FKWkM2OWxYTXBnNzFrSUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMTI5MDE4NjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NUU0NEVFNDU0NkE2MEQ4MEYyMTJFQzZGQ0EwODRFNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE0MzQyNThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDExMjkwMTg2MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE3NTBEMzJCNEU5RjY1NEVCRjBFNkQ1MTU2MjM2MUVCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTQzNDI1OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDUDFmYWhBMVJpLTRwX3lSSl9CX1ZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc5NmI3YTFkLTRmMDAtNDQyYi04NGU2LWM4MTQ3NDhlNzY1YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDMsXG4gICAgICA0MSxcbiAgICAgIDE1OSxcbiAgICAgIDMwLFxuICAgICAgMjM1LFxuICAgICAgMjMxLFxuICAgICAgMTM2LFxuICAgICAgMTQ3LFxuICAgICAgMjcsXG4gICAgICAxMjgsXG4gICAgICA2NixcbiAgICAgIDI1MSxcbiAgICAgIDIyNCxcbiAgICAgIDgxLFxuICAgICAgMjAzLFxuICAgICAgMTUwLFxuICAgICAgMTI3LFxuICAgICAgMjM3LFxuICAgICAgMTEsXG4gICAgICA5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgMjgsXG4gICAgICA1MSxcbiAgICAgIDEwMSxcbiAgICAgIDQzLFxuICAgICAgMTIyLFxuICAgICAgMzAsXG4gICAgICAyMTQsXG4gICAgICAxMixcbiAgICAgIDIyOSxcbiAgICAgIDI4LFxuICAgICAgMjM4LFxuICAgICAgMTk1LFxuICAgICAgMTk5LFxuICAgICAgMTU1LFxuICAgICAgMTI4LFxuICAgICAgMTAsXG4gICAgICA1NCxcbiAgICAgIDMzLFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTC8zc0xJREVJdXV6cmtHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiMkJXa3FhR0RnSG8rSVNaQ01mOWN6NUI3YWlobVkvT1BnWnZEZUk0MGk0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5Mdit2ZEh1Q1hCeHVUd3laUmRSeDNwR3JtMjcwMXB6L21LMms5cXF2TDhuQUxFUGgzMXdCQm5oT3VqTXZHQ3Vhb0o1WlhhR3lJQUt2aFlWK2xpOEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkIwUU4yQlVvdGxEWXYxcUFiaURHd2NqREl3U081alUxdlBmT2k4OHE5ZTRGcUZRY2NjNG12ek1IVktFLzdZc3JycDAwQXlVME1qbmRmQXg1RE1odUFnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjAxMTI5MDE4NjI5OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLZhdi02YrZgNixINin2YTZhdis2KfZhFwiLFxuICAgIFwibGlkXCI6IFwiMTQ5MjUwNjgzOTY5NTYzOjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMDExMjkwMTg2Mjk6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTQzNDI1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtEdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0RtLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOHJVUHFMYzNVR3dxTWc2KzREZnp3aHhmODlWaVlscTliR2NJVGcxR2ZyND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTA5NjU2OTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTQyOTY3OTA4MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtEbi5qc29uIjogIntcImtleURhdGFcIjpcImVYRXVDWEQxeERkYzNYaHR5K3pOUXRyeFo0QXFFdWRic2NsczQyR2FucUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTEwOTY1NjkxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE0MzA4Mjc2NTBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLRG8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtWHdpWXJtYk81U1MzWXBuYWlIT2N6QnNvMnQyaDIxYzQ1V2lucGxBVm40PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxMDk2NTY5MSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxNDMxMDIzMTAwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0RwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWnc3OGUwMHpjQlFiaU8xcnlya1dOYXJsYVZSSGFFSlVic2Mva2d6YzNRaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTA5NjU2OTEsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTQzMTE1MDc3NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtEcS5qc29uIjogIntcImtleURhdGFcIjpcIkdXMVk5TThvVjROZ2VZMEF6NHVkQXVEZlBaaG9JdGlMWnFHc3UrZmhhajQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTEwOTY1NjkxLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMxNDMxMTUzNTI2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0RyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZjJVREozUlg3cVpoWXRqc3VvUUR3UlZSelVmR1Q5Z25rcElpeTl2djdEcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTA5NjU2OTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE0MzEyNjE3MjRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLRHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmRWZteFk0ZlNoNXNIQ2FHQmhualFLbHplMXI5UFRYYklEWXN6aVNyMzBzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxMDk2NTY5NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMTQzMTQxODQzNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtEdC5qc29uIjogIntcImtleURhdGFcIjpcIlo5OEhueGlENlJkMGdKYnhVRGtJN1ZMWUUrWllTQmxlazFNdjRpR1JWak09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTEwOTY1Njk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE0MzIxMzAyNjhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLRHUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEWlRlMnhObXp2UnFCbXFRZmFEN3A5UGRXL3NVM3lOUC9UM1hhSEhkZm1FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxMDk2NTY5NSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE0MzQyNTg4MTJcIn0iCn0="  // PUT your SESSION_ID 


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
