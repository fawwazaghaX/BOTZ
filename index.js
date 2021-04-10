/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const request = require('request')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const crypto = require('crypto')
const util = require('util')
const { exec, spawn, execSync } = require("child_process")
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
prefix = setting.prefix
blocked = []

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
}

async function starts() {
	const nayla = new WAConnection()
	nayla.logger.level = 'warn'
	console.log(banner.string)
	nayla.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./bot.json') && nayla.loadAuthInfo('./bot.json')
	nayla.on('connecting', () => {
		start('2', 'Connecting...')
	})
	nayla.on('open', () => {
		success('2', 'Connected')
	})
	await nayla.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./bot.json', JSON.stringify(nayla.base64EncodedAuthInfo(), null, '\t'))

	nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	nayla.on('chat-update', async (nay) => {
		try {
            if (!nay.hasNewMessage) return
            nay = nay.messages.all()[0]
			if (!nay.message) return
			if (nay.key && nay.key.remoteJid == 'status@broadcast') return
			if (nay.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(nay.message)
			const from = nay.key.remoteJid
			const type = Object.keys(nay.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && nay.message.conversation.startsWith(prefix)) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption.startsWith(prefix) ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption.startsWith(prefix) ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text.startsWith(prefix) ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)             
            const tescuk = ["0@s.whatsapp.net"]
			const botNumber = nayla.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const totalchat = await nayla.chats.all()
			const sender = isGroup ? nay.participant : nay.key.remoteJid
			const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			  const costum = (pesan, tipe, target, target2) => {
			nayla.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}				
			const reply = (teks) => {
				nayla.sendMessage(from, teks, text, {quoted:nay})
			}
			const apikey = setting.apiKey
			const sendMess = (hehe, teks) => {
				nayla.sendMessage(hehe, teks, text)
			}			
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nayla.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nayla.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "MY SELF WHATSAPP", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = nayla.contacts[from] != undefined ? nayla.contacts[from].vname || nayla.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
 	        cr = `BOT WHATSAPP NEW`             
			switch(command) {
				case 'help':
				case 'menu':
const menu1 = fs.readFileSync('image/menu.jpg')
runtime = process.uptime()
	menuF = `╔════════════════════
║╭───────────────────
║│➻ *BOT WHATSAPP NEW* 
║│➻ *OWNER* : YOUR_NAME
║│➻ *AUTHOR* : NAYLA CHAN
║│➻ *NAMEBOT* : BOTWA
║╰───────────────────
╠════[ *MENU•MEDIA* ]══════
║╭───────────────────
║│➻ *${prefix}fb*
║│➻ *${prefix}steam*
║│➻ *${prefix}igfoto*
║│➻ *${prefix}igvideo*
║│➻ *${prefix}ytsearch*
║│➻ *${prefix}ytmp3*
║│➻ *${prefix}ytmp4*
║│➻ *${prefix}playmp3*
║│➻ *${prefix}playmp32*
║│➻ *${prefix}playmp4*
║│➻ *${prefix}playmp42*
║│➻ *${prefix}stalktwit*
║│➻ *${prefix}stalkgithub*
║╰──────────────────
╠════[ *FUN•MENU* ]══════
║╭──────────────────
║│➻ *${prefix}simi*
║│➻ *${prefix}hilih*
║│➻ *${prefix}jumlah*
║│➻ *${prefix}hurufkebalik*
║╰──────────────────
╠════[ *SPAM•MENU* ]══════
║╭──────────────────
║│➻ *${prefix}spamcall*
║│➻ *${prefix}spamemail*
║╰───────────────────
╠════[ *FUN•MENU* ]══════
║╭───────────────────
║│➻ *${prefix}fakta*
║│➻ *${prefix}gcard*
║│➻ *${prefix}quotes*
║│➻ *${prefix}tebakgambar*
║╰───────────────────
╠════[ *ANIME•MENU* ]═════
║╭───────────────────
║│➻ *${prefix}neko*
║│➻ *${prefix}quotesnime*
║╰───────────────────
╠════[ *INFO•MENU* ]══════
║╭───────────────────
║│➻ *${prefix}kbbilazimedia*
║│➻ *${prefix}covid*
║│➻ *${prefix}wikiid*
║│➻ *${prefix}wikien*
║│➻ *${prefix}covidid*
║│➻ *${prefix}kbbi*
║│➻ *${prefix}infogempa*
║│➻ *${prefix}randomquran*
║│➻ *${prefix}kisanabi*
║╰───────────────────
╠════[ *MAKER•MENU* ]═════
║╭───────────────────
║│➻ *${prefix}8bit*
║│➻ *${prefix}burn*
║│➻ *${prefix}fire*
║│➻ *${prefix}google*
║│➻ *${prefix}battle*
║│➻ *${prefix}block*
║│➻ *${prefix}candy*
║│➻ *${prefix}potter*
║│➻ *${prefix}silk*
║│➻ *${prefix}water*
║│➻ *${prefix}pubg*
║│➻ *${prefix}neon*
║│➻ *${prefix}coffe1*
║│➻ *${prefix}coffe*
║│➻ *${prefix}tiktok*
║│➻ *${prefix}shadow*
║│➻ *${prefix}romance*
║│➻ *${prefix}glass*
║│➻ *${prefix}naruto*
║│➻ *${prefix}mug1*
║│➻ *${prefix}love*
║│➻ *${prefix}mug*
║│➻ *${prefix}neon1*
║╰───────────────────
╠═══[ *SIMPLE•MENU* ]═════
║╭───────────────────
║│➻ *${prefix}artinama*
║│➻ *${prefix}artimimpi*
║│➻ *${prefix}artijadian*
║│➻ *${prefix}chord*
║│➻ *${prefix}lirik*
║╰───────────────────
╠══[ *SERTIFIKAT•MENU* ]═══
║╭───────────────────
║│➻ *${prefix}ff1*
║│➻ *${prefix}ff2*
║│➻ *${prefix}ff3*
║│➻ *${prefix}ff4*
║│➻ *${prefix}ff5*
║│➻ *${prefix}ff6*
║│➻ *${prefix}ml1*
║│➻ *${prefix}ml2*
║│➻ *${prefix}ml3*
║│➻ *${prefix}ml4*
║│➻ *${prefix}ml5*
║│➻ *${prefix}hacker*
║│➻ *${prefix}yutub*
║│➻ *${prefix}jamet*
║│➻ *${prefix}fuckboy*
║│➻ *${prefix}goodlooking*
║│➻ *${prefix}editor*
║╰───────────────────
╠══[ *SERTIFIKAT2•MENU* ]══
║╭───────────────────
║│➻ *${prefix}goodboy*
║│➻ *${prefix}goodgirl*
║│➻ *${prefix}badgirl*
║│➻ *${prefix}badboy*
║│➻ *${prefix}pintar*
║│➻ *${prefix}surga*
║│➻ *${prefix}sadboy*
║│➻ *${prefix}pacar*
║│➻ *${prefix}gay*
║│➻ *${prefix}bucin*
║│➻ *${prefix}bocil*
║│➻ *${prefix}babu*
║│➻ *${prefix}haram*
║│➻ *${prefix}tweet*
║│➻ *${prefix}pubg1*
║│➻ *${prefix}pubg2*
║│➻ *${prefix}pubg3*
║│➻ *${prefix}pubg4*
║╰───────────────────
╠═══[ *TAMBAHAN•MENU* ]═══
║╭───────────────────
║│➻ *${prefix}sticker*
║│➻ *${prefix}stickergif*
║│➻ *${prefix}bc*
║│➻ *${prefix}clearall*
║│➻ *${prefix}linkgc*
║│➻ *${prefix}tagall*
║│➻ *${prefix}delete*
║╰───────────────────
╠═══[ *RANDOM1•MENU* ]═══
║╭───────────────────
║│➻ *${prefix}twich*
║│➻ *${prefix}loli*
║│➻ *${prefix}randomhusbu*
║│➻ *${prefix}fake*
║│➻ *${prefix}pinterest*
║│➻ *${prefix}qrcode*
║│➻ *${prefix}resepmasakan*
║│➻ *${prefix}barcode*
║│➻ *${prefix}cersex*
║│➻ *${prefix}cerpen*
║│➻ *${prefix}anime*
║│➻ *${prefix}anime1*
║│➻ *${prefix}yuri*
║│➻ *${prefix}tongue*
║│➻ *${prefix}jadwalsholat*
║│➻ *${prefix}pantun*
║│➻ *${prefix}cuaca*
║│➻ *${prefix}namaninja*
║╰───────────────────
╠═══[ *RANDOM2•MENU* ]═══
║╭───────────────────
║│➻ *${prefix}randomwaifu*
║│➻ *${prefix}randomwaifu1*
║│➻ *${prefix}neko1*
║│➻ *${prefix}kusonime*
║│➻ *${prefix}renungan*
║│➻ *${prefix}samehadaku*
║│➻ *${prefix}neon1*
║│➻ *${prefix}text3d*
║│➻ *${prefix}galaxy*
║│➻ *${prefix}gaming*
║│➻ *${prefix}colors*
║│➻ *${prefix}kling*
║│➻ *${prefix}infonomer*
║│➻ *${prefix}jadwaltv*
║│➻ *${prefix}tvjadwal*
║│➻ *${prefix}fml*
║│➻ *${prefix}cinta*
║╰──────────────────
╠═════[ *INFO•BOT* ]═══════
║╭──────────────────
║│➻ *saya tidak menjamin 100%* 
║│➻ *fitur bot ini work/sukses*
║│➻ *(gunakan dengan bijak oky)*
║│➻ *sc full api FREEEEE*
║╰──────────────────
╠══════[ *THX TO* ]═══════
║╭──────────────────
║│➻ *NAYLA CHAN*
║│➻ *RYNZ*
║│➻ *ALL CREATOR BOTZ* 
║╰──────────────────
╚════════════════════`
nayla.sendMessage(from, menu1, image, {caption: menuF, quoted: nay})
break
// JGN HARUS TQTO
// JGN DI PERJUAL BELIKAN
// JGN AMPAS TAMPILAN GW
// BY NAYLA CHAN		             		             

// JELEK? IYA EMG JELEK :V                                   
/* ======================================================[ MEDIA-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 



		            /*=========================================*/
                    /* YT DOWNLOAD INI "ERROR" GW GK TAU KNP :) */
                    /* JADI SILAHKAN GUNAKAN CASE LAIN YA */
                    /*=========================================*/       
		            case 'ytmp3':
					if (args.length < 1) return reply('MASUKKAN URL/LINK YT') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
					anu = await fetchJson(`https://videfikri.com/api/ytmp3/?url=${args[0]}`, {method: 'get'})
					anu1 = await getBuffer(anu.result.thumbnail)
					anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
					anu2 += `➻ *SIZE* : ${anu.result.size}\n`
					anu2 += `➻ *ID* : ${anu.result.id}\n`
					anu2 += `➻ *URL* : ${anu.result.url}\n`
					anu2 += `➻ *TYPE* : ${anu.result.extension}\n`
					anu2 += `➻ *LINK* : ${anu.result.source}\n`
					anu2 += `➻ *SOUND SEDANG DIKIRIM*\n`
					nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay})					
					anu3 = await getBuffer(anu.result.url)
					nayla.sendMessage(from, anu3, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: nay})
					break 
                    case 'ytmp4':
                    if (args.length < 1) return reply('MASUKKAN URL/LINK YT')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
					anu = await fetchJson(`https://videfikri.com/api/ytmp4/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.imgUrl)
                    anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu2 += `➻ *ID* : ${anu.result.id}\n`
                    anu2 += `➻ *LINK* : ${anu.result.source}\n`
                    anu2 += `➻ *URL* : ${anu.result.urlVideo}\n`
                    anu2 += `➻ *[❗] VIDEO SEDANG DIKIRIM*\n`
                    nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay})
                    anu3 = await getBuffer(anu.result.urlVideo)
                    nayla.sendMessage(from, anu3, video, {mimetype: 'video/mp4', quoted: nay})
                    break 
                    case 'playmp3':
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/ytplay/?query=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumbnail)
                    anu2 = `➻ *JUDUL* : ${anu.result.title}\n`
                    anu2 += `➻ *ID* : ${anu.result.id}\n`
                    anu2 += `➻ *CHANNEL* : ${anu.result.channel}\n`
                    anu2 += `➻ *AKTIF* : ${anu.result.published_on}\n`
                    anu2 += `➻ *VIEWS* : ${anu.result.views}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *UKURAN* : ${anu.result.size}\n`
                    anu2 += `➻ *URL* : ${anu.result.url}\n`
                    anu2 += `➻ *DESK* : ${anu.result.description}\n`
                    anu2 += `➻ [❗] SOUND SEDANG DIKIRIM\n`
                    nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay})
                    anu3 = await getBuffer(anu.result.url)
                    nayla.sendMessage(from, anu3, audio, {mimetype: 'audio/mp4', quoted: nay})
                    break
                    case 'playmp32':
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/ytplayv2/?query=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumbnail)
                    anu2 = `➻ *JUDUL* : ${anu.result.title}\n`
                    anu2 += `➻ *ID* : ${anu.result.id}\n`
                    anu2 += `➻ *TYPE* : ${anu.result.extension}\n`                   
                    anu2 += `➻ *NAMA* : ${anu.result.channel}\n`
                    anu2 += `➻ *AKTIF* : ${anu.result.published_on}\n`
                    anu2 += `➻ *VIEWS* : ${anu.result.views}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *UKURAN* : ${anu.result.size}\n`
                    anu2 += `➻ *DESKRIPSI* : ${anu.result.description}\n`
                    nayla.sendMessage(from, anu1, image,{caption: anu2, quoted:nay})
                    anu3 = await getBuffer(anu.result.url)
                    nayla.sendMessage(from, anu3, audio, {mimetype: 'audio/mp4', quoted: nay})
                    break                                                                                                                    
                    case 'playmp4':
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/playmp4/?query=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.imgUrl)
                    anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu2 += `➻ *ID* : ${anu.result.id}\n`
                    anu2 += `➻ *LINK* : ${anu.result.source}\n`
                    anu2 += `➻ *URL* : ${anu.result.urlVideo}\n`
                    nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay})
                    anu3 = await getBuffer(anu.result.urlVideo)
                    nayla.sendMessage(from, anu3, video, {mimetype: 'video/mp4', quoted: nay})
                    break 
                    case 'playmp42':
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/playmp4v2/?query=${args[0]}`, {method: 'get'})
                    anu1 = getBuffer(anu.result.imgUrl)
                    anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu2 += `➻ *ID* : ${anu.result.id}\n`
                    anu2 += `➻ *LINK* : ${anu.result.source}\n`
                    anu2 += `➻ *URL* : ${anu.result.urlVideo}\n`
                    anu2 += `➻ *PUBLIC* : ${anu.result.published_on}\n`
                    anu2 += `➻ *VIEWS* : ${anu.result.views}\n`
                    anu2 += `➻ *UKURAN* : ${anu.result.size}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *DESKRIPSI* : ${anu.result.description}\n`
                    nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay})
                    anu3 = await getBuffer(anu.result.urlVideo)
                    nayla.sendMessage(from, anu3, video, {mimetype: 'video/mp4', quoted: nay})               
                    break  
                    case 'stalktwit':
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					costum('[❗] PROSES LOADING', text, tescuk, cr) 
                    anu = await fetchJson(`https://videfikri.com/api/stalktwit/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile)
                    anu2 = `➻ *NAMA* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➻ *TWEETS* : ${anu.result.tweets}\n`
                    anu2 += `➻ *PUBLIC* : ${anu.result.verified}\n`
                    anu2 += `➻ *LIST* : ${anu.result.listed_count}\n`
                    anu2 += `➻ *FAVOURIT* : ${anu.result.favourites}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    nayla.sendMessage(from, anu1, image,{caption: anu2, quoted: nay})
                    break
                    case 'stalkgithub':
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/github/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile_pic)                           
                    anu2 = `➻ *NAMA* : ${anu.result.username}\n`
                    anu2 += `➻ *ID* : ${anu.result.id}\n`
                    anu2 += `➻ *USER* : ${anu.result.fullname}\n`
                    anu2 += `➻ *COMPANY* : ${anu.result.company}\n`
                    anu2 += `➻ *BLOG* : ${anu.result.blog}\n`
                    anu2 += `➻ *LOCATION* : ${anu.result.location}\n`
                    anu2 += `➻ *EMAIL* : ${anu.result.email}\n`
                    anu2 += `➻ *HIRABLE* : ${anu.result.hireable}\n`
                    anu2 += `➻ *BIOGRAFI* : ${anu.result.biografi}\n`
                    anu2 += `➻ *PUBLIC1* : ${anu.result.public_repository}\n`
                    anu2 += `➻ *PUBLIC2* : ${anu.result.public_gists}\n`
                    anu2 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    anu2 += `➻ *UPDATE* : ${anu.result.last_updated}\n`
                    anu2 += `➻ *URL* : ${anu.result.profile_url}\n`
                    nayla.sendMessage(from, anu1, image,{caption: anu2, quoted: nay})
                    break
                    case 'steam':
                    if (args.length < 1) return reply('MASUKKAN JUDUL') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/steam/?username=${args[0]}`, {method: 'get'})
                    anu1 = `➻ *NAMA* : ${anu.result.name}\n`
                    anu1 += `➻ *USER* : ${anu.result.username}\n`
                    anu1 += `➻ *COUNTRY* : ${anu.result.country}\n`
                    anu1 += `➻ *IMG* : ${anu.result.image}\n`
                    anu1 += `➻ *LEVEL* : ${anu.result.level}\n`
                    anu1 += `➻ *FACEIT* : ${anu.result.faceit}\n`
                    anu1 += `➻ *BADGES* : ${anu.result.badges}\n`
                    anu1 += `➻ *MENTS* : ${anu.result.achievements}\n`
                    anu1 += `➻ *ON* : ${anu.result.onkah}\n`
                    nayla.sendMessage(from, anu1, text,{quoted: nay})
                    break 
                    case 'fb':
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.url)
                    anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    nayla.sendMessage(from, anu1, video, {caption: anu2, mimetype: 'video/mp4', quoted: nay})
                    break 
                    case 'igfoto':
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] FOTO SEDANG DIKIRIM*\n`
                    nayla.sendMessage(from, anu2, text, {quoted: nay})
                    anu3 = await getBuffer(anu.result.image_text)
                    nayla.sendMessage(from, anu3, image, {quoted: nay})
                    break
                    case 'igvideo':
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] VIDEO SEDANG DIKIRIM*\n`
                    nayla.sendMessage(from, anu2, text, {quoted: nay})
                    anu3 = await getBuffer(anu.result.video)
                    nayla.sendMessage(from, anu3, video, {mimetype: 'video/mp4', quoted: nay})
                    break                          
                    case 'ytsearch':
                    if (args.length < 1) return reply('MASUKKAN LINK/URL FB') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/ytsearch/?query=${args[0]}`, {method: 'get'})
                    anu1 = getBuffer(anu.result.data.thumbnail)
                    anu2 = `➻ *NAME* : ${anu.result.data.judul}\n`
                    anu2 += `➻ *ID* : ${anu.result.data.id}\n`                    
                    anu2 += `➻ *DURASI* : ${anu.result.data.duration}\n`
                    anu2 += `➻ *CHANEL* : ${anu.result.data.id}\n`
                    anu2 += `➻ *PUBLIC.AT* : ${anu.result.data.published_at}\n`
                    anu2 += `➻ *VIEWS* : ${anu.result.data.views}\n`
                    anu2 += `➻ *DESK* : ${anu.result.data.description}\n`  
                    nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay})
                    break    
                         
/* =======================================================[ FUN-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                        
                    case 'hurufkebalik':
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${body.slice(14)}`)
                    anu1 = `${anu.result.kata}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay})
                    break    
                    case 'jumlah':
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/jumlahhuruf/?query=${body.slice(8)}`)
                    anu1 = `${anu.result.jumlah}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay})
                    break       
                    case 'hilih':
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/hilih/?query=${body.slice(7)}`)
                    anu1 = `${anu.result.kata}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay})
                    break       
                    case 'simsimi':
                    case 'simi':
                    if (args.length < 1) return reply('MASUKKAN TEXT')
                    anu = await fetchJson(`https://videfikri.com/api/simsimi?teks=${body.slice(9)}`)
                    anu1 = `${anu.result.pesan}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay})
                    break         
 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                                             
                    case 'spamemail':
                    if (args.length < 1) return reply('MASUKKAN EMAIL&NOMER&PESAN') 
					costum('SUKSES', text, tescuk, cr)
                    subjek = args[0]
                    pesan = args[1]
                    email = args[2] 
                    anu = await fetchJson(`https://videfikri.com/api/spamemail?email=${email}&subjek${subjek}=&pesan=${pesan}`)          
                    break            
                    case 'spamcall':
                    if (args.length < 1) return reply('MASUKKAN NOMER') 
					costum('SUKSES', text, tescuk, cr)
                    nomer = args[0]                    
                    anu = await fetchJson(`https://videfikri.com/api/call?nohp=${nomer}`)          
                    break        

/* ======================================================[ RANDOM-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                   
                    case 'quotes':
                    anu = await fetchJson(`https://videfikri.com/api/randomquotes/`)
                    anu1 = `➻ *AUTHOR* : ${anu.result.author}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay})
                    break
                    case 'fakta':
                    anu = await fetchJson(`https://videfikri.com/api/fakta/`)
                    anu1 = `➻ *FAKTA* : ${anu.result.fakta}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay})
                    break                                                  
                    case 'gcard':
                    anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
                    anu1 = `➻ *NEGARA* : ${anu.result.card.network}\n`
                    anu1 += `➻ *NOMER* : ${anu.result.card.number}\n`   
                    anu1 += `➻ *CVV* : ${anu.result.card.cvv}\n`    
                    anu1 += `➻ *PIN* : ${anu.result.card.pin}\n`     
                    anu1 += `➻ *BALANCE* : ${anu.result.card.balance}\n`      
                    anu1 += `➻ *PERMINGGU* : ${anu.result.card.expiration_month}\n`
                    anu1 += `➻ *PERHARI* : ${anu.result.card.expiration_year}\n` 
                    anu1 += `➻ *NAMA* : ${anu.result.customer.name}\n`       
                    anu1 += `➻ *RESS* : ${anu.result.customer.address}\n`           
                    anu1 += `➻ *COUNTRY* : ${anu.result.customer.country}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay})
                    break                                                                                                                                                                                                                                                                                        
                    case 'tebakgambar':
                    anu = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    anu1 = await getBuffer(anu.result.soal_gbr)
                    anu2 = `➻ *JAWABAN* : ${anu.result.jawaban}`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, image,{caption: 'JAWAB BRO... WAKTU 60 DETIK', quoted: nay})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay})                   
                    }, 60000)                                                                          
                    break                                                                                                                                           

/* ======================================================[ ANIME-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
                    case 'neko':
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/anime/neko`)
                    anu1 = await getBuffer(anu.result.url_gbr)
                    nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay})
                    break
                    case 'quotesnime':
                    anu = await fetchJson(`https://videfikri.com/api/anime/randomquoteanime`)
                    anu1 = `➻ *ANIME* : ${anu.result.anime}\n`
                    anu1 += `➻ *KARAKTER* : ${anu.result.character}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay})
                    break
                    
/* ======================================================[ ANJAY-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
                   case 'lazimedia':
                   if (args.length < 1) return reply('MASUKKAN NAMA PRODUK')
                   anu = await fetchJson(`https://videfikri.com/api/lazymed/?query=${body.slice(11)}`)   
                   anu1 = `${anu.result.data}`
                   reply(anu1)
                   break
                   case 'covid':
                   anu = await fetchJson(`https://videfikri.com/api/rsrujukan/`)
                   anu1 = 'COVID INDONESIA :\n'
                   for (var x of anu.result.data) {
                   anu1 = `➻ *RUMAH SAKIT* : ${x.rumah_sakit}\n`
                   anu1 += `➻ *KOTA* : ${x.region}\n`
                   anu1 += `➻ *PROVINSI* : ${x.provinsi}\n`
                   anu1 += `➻ *ALAMAT* : ${x.address}\n`
                   anu1 += `➻ *PHONE* : ${x.phone}\n`
                   }
                   reply(anu1)
                   break
                   case 'wikiid':
                   if (args.length < 1) return reply('MASUKKAN QUERY') 
                   anu = await fetchJson(`https://videfikri.com/api/wiki/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL ID :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.judul}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.isi_konten}\n`
                   }
                   nayla.sendMessage(from, anu1, text,{quoted: nay})
                   break  
                   case 'wikien':
                   if (args.length < 1) return reply('MASUKKAN QUERY') 
                   anu = await fetchJson(`https://videfikri.com/api/wikieng/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL EN :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.title}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.desc}\n`
                   }
                   nayla.sendMessage(from, anu1, text,{quoted: nay})
                   break   
                   case 'covidid':
                   anu = await fetchJson(`https://videfikri.com/api/covidindo/`)
                   anu1 = `➻ *NEGARA* : ${anu.result.country}\n`
                   anu1 += `➻ *POSITIF* : ${anu.result.positif}\n`
                   anu1 += `➻ *SEMBUH* : ${anu.result.sembuh}\n`
                   anu1 += `➻ *MENINGGAL* : ${anu.result.meninggal}\n`
                   anu1 += `➻ *RAWAT* : ${anu.result.dalam_perawatan}\n`
                   reply(anu1)
                   break
                   case 'kbbi':
                   if (args.length < 1) return reply('MASUKKAN QUERY')
                   anu2 = await fetchJson(`https://videfikri.com/api/kbbi/?query=${body.slice(6)}`)                      
                   anu1 = `➻ *HASIL* : ${anu2.result.hasil}\n`                   
                   reply(anu1)
                   break
                   case 'infogempa':                    
                   anu = await fetchJson(`https://videfikri.com/api/infogempa/`)
                   anu1 = `➻ *WILAYAH* : ${anu.result.wilayah}\n`
                   anu1 += `➻ *BUJUR* : ${anu.result.bujur}\n`
                   anu1 += `➻ *LINTANG* : ${anu.result.lintang}\n`
                   anu1 += `➻ *WAKTU* : ${anu.result.waktu}\n` 
                   anu1 += `➻ *MAGNITUDO* : ${anu.result.magnitudo}\n` 
                   anu1 += `➻ *KEDALAMAN* : ${anu.result.kedalaman}\n` 
                   anu1 += `➻ *MAP* : ${anu.result.map}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay})
                   break
                   case 'randomquran':
                   anu = await fetchJson(`https://videfikri.com/api/randquran/`)
                   anu1 = `➻ *NOMER* : ${anu.result.nomor}\n`
                   anu1 += `➻ *NAMA* : ${anu.result.nama}\n`
                   anu1 += `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NAME* : ${anu.result.name}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.tipe}\n`
                   anu1 += `➻ *NO URUT* : ${anu.result.no_urut}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay})
                   break
                   case 'kisanabi':
                   if (args.length < 1) return reply('MASUKKAN NAMA NABI')
                   anu = await fetchJson(`https://videfikri.com/api/religi/kisahnabi/?nabi=${body.slice(10)}`)   
                   anu2 = await getBuffer(anu.result.image)
                   anu1 = `➻ *NAMA* : ${anu.result.nama}\n`
                   anu1 += `➻ *TAHUN LAHIR* : ${anu.result.tahun_kelahiran}\n`
                   anu1 += `➻ *USIA* : ${anu.result.usia}\n`
                   anu1 += `➻ *TEMPAT LAHIR* : ${anu.result.tempat_lahir}\n`
                   anu1 += `➻ *ULASAN* : ${anu.result.description}\n`                    
                   nayla.sendMessage(from, anu2, image,{caption: anu1, quoted: nay})
                   break
/* ====================================================[ MAKER-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                   case '8bit':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} kamu&aku*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break
                   case 'google':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} kamu & aku & dia*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   var F3 = F.split("&")[2] 
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${F1}&text2=${F2}&text3=${F3}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'fire':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/crossfirelogo/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'burn':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'battle':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'mug':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(5)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                    case 'love':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'mug1':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/mugflower?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'naruto':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'glass':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'romance':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(9)				    
                   anu = await getBuffer(`hthttps://videfikri.com/api/textmaker/romancetext?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'shadow':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'tiktok':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break
                   case 'coffe':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break  
                   case 'coffe1':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break
                   case 'neon':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break  
                   case 'pubg':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/pubgmlogo?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break
                   case 'water':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/underwater?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'silk':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/silk?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break
                   case 'potter':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/hpotter?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break
                   case 'candy':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break                     
                   case 'block':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/woodblock?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break
                    
                   
  
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    case 'artinama':
                    if (args.length < 1) return reply('MASUKKAN NAMA')
                    F = body.slice(10)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artinama/?nama=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.arti}\n`
                    anu1 += `➻ *ULASAN* : ${anu.result.desk}\n`
                    reply(anu1)
                    break
                    case 'artimimpi':
                    if (args.length < 1) return reply('MASUKKAN MIMPI MU')
                    F = body.slice(11)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.artimimpi}\n`
                    reply(anu1)
                    break
                    case 'artijadian':
                    if (args.length < 1) return reply('MASUKKAN tanggal&bulan&tahun')
                    var F = body.slice(12)
				    var F1 = F.split("&")[0];
				    var F2 = F.split("&")[1];
				    var F3 = F.split("&")[2]	
                    anu = await fetchJson(`https://videfikri.com/api/primbon/tgljadian/?tgl=${F1}&bln=${F2}&thn=${F3}`)
                    anu1 = `➻ *ARTI* : ${anu.result.hasil}\n`
                    reply(anu1)
                    break
                    case 'chord':
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/chord/?query=${F}`)
                    anu1 = `➻ *CHORD* : ${anu.result.chord}\n`
                    reply(anu1)
                    break
                    case 'lirik':
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${F}`)
                    anu1 = `➻ *ARTIS* : ${anu.result.artist}\n`
                    anu1 += `➻ *LIRIK* : ${anu.result.lirik}\n` 
                    reply(anu1)
                    break
   
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API ONLYDEV ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                   case 'ml':
                   costum(`*PILIH ML BERAPA*\n*PILIHAN 1-5*\n*CONTOH ${prefix}ml3*`, text, tescuk, cr)                   
                   break
                   case 'ff':
                   costum(`*PILIH FF BERAPA*\n*PILIHAN 1-6*\n*CONTOH ${prefix}ff3*`, text, tescuk, cr)                   
                   break
                   case 'pubg':
                   costum(`*PILIH PUBG BERAPA*\n*PILIHAN 1-4*\n*CONTOH ${prefix}pubg3*`, text, tescuk, cr)                   
                   break
                   case 'haram':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'babu':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/BabuSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'bucin':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/BucinSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'bocil':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/CilEpepSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'gay':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/GaySerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'pacar':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/PacarSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'sadboy':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/SadBoySerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'surga':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/SurgaSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'pintar':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/PintarSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'badboy':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/BadBoySerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'badgirl':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/BadGirlSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'goodgirl':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'goodboy':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/GoodBoySerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'editor':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'goodlooking':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'fuckboy':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/FucekBoySerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'jamet':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/JametSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'yutub':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/YoutuberSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'hacker':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/HekerSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break                     
                   case 'ff6':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/FFSerti6/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'pubg4':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'pubg3':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'pubg2':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'ml5':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/MLTourSerti5/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'ml4':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/MLTourSerti4/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'ml3':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/MLTourSerti3/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'ml2':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/MLTourSerti2/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'tweet':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/Tweet/?text=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'ml1':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/MLTourSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'pubg2':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'pubg1':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/PubgTourSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'ff5':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/FFSerti5/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'ff4':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/FFSerti4/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break                     
                   case 'ff3':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/FFSerti3/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'ff2':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/FFSerti2/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 
                   case 'ff1':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)               			    
                   anu = await getBuffer(`http://onlydevcity.xyz/FFSerti/img.php?nama=${args[0]}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break 

/* ==================================================[ GK TAU v: -MENU ]==============================================================*/    
/*====================================================[ API?? JOJO API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                   case 'randomwaifu':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu`)
                   anu1 = await getBuffer(anu.image)
                   anu2 = `➻ *NAMA* : ${anu.name}\n`
                   anu2 += `➻ *DESC* : ${anu.desc}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay})
                   break
                   case 'randomwaifu1':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)  
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu2`)
                   anu1 = await getBuffer(anu.img)                    
                   nayla.sendMessage(from, anu1, image, {quoted: nay})
                   break
                   case 'neko1':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/nekonime`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kack`, quoted: nay})
                   break
                   case 'kusonime':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                   F = body.slice(10)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${F}`)
                   anu1 = `➻ *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   break
                   case 'renungan': 
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/renungan`)
                   anu1 = `➻ *JUDUL* : ${anu.judul}\n`
                   anu1 += `➻ *PESAN* : ${anu.pesan}\n`
                   anu1 += `➻ *DESC* : ${anu.Isi}\n`
                   reply(anu1)
                   break
                   case 'samehadaku':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(12)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${F}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = `➻ *JUDUL* : ${anu.title}\n`
                   anu1 += `➻ *LINK* : ${anu.link}\n`
                   anu1 += `➻ *DESK* : ${anu.desc}\n`
                   nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay })
                   break
                   case 'neon1':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break  
                   case 'text3d':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break                   
                   case 'galaxy':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break
                   case 'gaming':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break
                   case 'colors':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break
                   case 'kling':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay}) 
                   break
                   case 'infonomer':
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${F}`)
                   anu1 = `➻ *NOMER* : ${anu.nomor}\n`
                   anu1 += `➻ *JUDUL* : ${anu.op}\n`
                   anu1 += `➻ *JUDUL* : ${anu.international}\n`
                   reply(anu1)
                   break
                   case 'jadwaltv':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`)
                   anu1 = `➻ *JAM* : ${anu.result.jam}\n`
                   anu1 += `➻ *JADWAL* : ${anu.result.jadwalTV}\n`
                   reply(anu1)
                   break
                   case 'tvjadwal':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} gtv*`)
                   F = body.slice(10)
                   anu1 = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${F}`)
                   anu1 = `➻ *JAM* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'fml': 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                   anu1 = `➻ *FML* : ${anu.result.fml}`
                   reply(anu1)
                   break
                   case 'cinta': 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`)
                   anu1 = `➻ *KATA CINTA* : ${anu.result}`
                   reply(anu1)
                   break                                                                            
                   case 'twich': 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = `➻ *THWICH* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'loli':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'randomhusbu':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/husbuando`)
                   anu1 = `➻ *NAMA* : ${anu.waifu}`
                   anu2 = await getBuffer(anu.image)
                   nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})                   
                   break
                   case 'fake':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = `➻ *NAMA* : ${anu.name}\n`
                   anu1 += `➻ *GENDER* : ${anu.gender}\n` 
                   anu1 += `➻ *AGE* : ${anu.age}\n`
                   anu1 += `➻ *BIRTDAY* : ${anu.birtday}\n`
                   anu1 += `➻ *BACHELOR* : ${anu.Bachelor}\n`
                   anu1 += `➻ *ADDRESA* : ${anu.address}\n`
                   anu1 += `➻ *CODE* : ${anu.zip_code}\n`
                   anu1 += `➻ *STATE* : ${anu.state}\n`
                   anu1 += `➻ *COUNTRY* : ${anu.country}\n`
                   anu1 += `➻ *EMAIL* : ${anu.email}\n`
                   anu1 += `➻ *PASS* : ${anu.password}\n` 
                   anu1 += `➻ *PHONE* : ${anu.phone}\n` 
                   anu1 += `➻ *CARD* : ${anu.card}\n`
                   anu1 += `➻ *CODE* : ${anu.code}\n`
                   anu1 += `➻ *DATE* : ${anu.date}\n`
                   anu1 += `➻ *PIN* : ${anu.pin_code}\n`
                   anu1 += `➻ *WEIGHT* : ${anu.weight}\n` 
                   anu1 += `➻ *HEIGHT* : ${anu.height}\n` 
                   anu1 += `➻ *TYPE* : ${anu.blood_type}\n`
                   anu1 += `➻ *STATUS* : ${anu.status}\n`
                   reply(anu1)
                   break
                   case 'pinterest':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} https://link*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/pinterest?url=${F}`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'qrcode':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} halo sayang*`)  
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'resepmasakan':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bakso*`)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/resep?q=${F}`)
                   anu1 = await getBuffer(anu.img)
                   anu2 = `➻ *NAMA* : ${anu.title}\n`
                   anu2 += `➻ *STATUS* : ${anu.langkah}\n`
                   anu2 += `➻ *BAHAN* : ${anu.bahan}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay})
                   break
                   case 'barcode':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} halo sayang*`)  
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(9)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'cersex':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)                   
                   anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                   anu2 += `➻ *NAMA* : ${anu.result.cersex}\n`
                   reply(anu2)
                   break
                   case 'cerpen':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break
                   case 'anime':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_baguette`)
                   nayla.sendMessage(from, anu, image, {quoted: nay})
                   break
                   case 'anime1':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_dva`)
                   nayla.sendMessage(from, anu, image, {quoted: nay})
                   break
                   case 'yuri':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_yuri`)
                   nayla.sendMessage(from, anu, image, {quoted: nay})
                   break
                   case 'tongue':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = `➻ *NIHH* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'jadwalsholat':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} makassar*`)  
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `➻ *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `➻ *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `➻ *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `➻ *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `➻ *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `➻ *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `➻ *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break
                   case 'pantun':
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
                   anu1 = `➻ *PANTUN* : ${anu.result}\n` 
                   reply(anu1)
                   break 
                   case 'cuaca': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} makassar*`)  
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${F}`)
                   anu1 = `➻ *TEMPAT* : ${anu.result.tempat}\n`
                   anu1 += `➻ *CUAXA* : ${anu.result.cuaca}\n`
                   anu1 += `➻ *DESK* : ${anu.result.desk}\n` 
                   anu1 += `➻ *SUHU* : ${anu.result.suhu}\n`
                   anu1 += `➻ *KELEBAPAN* : ${anu.result.kelembapan}\n` 
                   anu1 += `➻ *UDARA* : ${anu.result.udara}\n`
                   anu1 += `➻ *ANGIN* : ${anu.result.angin}\n` 
                   reply(anu1)
                   break 
                   case 'namaninja':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla*`)  
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
                   anu1 = `➻ *NAMA* : ${anu.your_name}\n`
                   anu1 += `➻ *NINJA* : ${anu.result}\n`
                   reply(anu1)
                   break                 
                                                                                                                                                                           
              
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    case 'sticker':
				    case 'stiker':
				    case 'stickergif':
				    case 'stikergif':
				    case 'sgif':
				    case 's':					 
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
					})
					.on('end', function () {
					console.log('Finish')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay})
				    fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				    .toFormat('webp')
					.save(ran)
					} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
					await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
					})
					.on('end', function () {
					console.log('Finish')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else {
					reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
					}
					break
                    case 'bc': 
					if (!isOwner) return
					if (args.length < 1) return reply('.......')
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
					buff = await nayla.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					nayla.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
					}
					reply('*SUCCESS BROADCAST* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
					}
					reply('*SUCCESS BROADCAST* ')
					}
					break
					case 'clearall':
					if (!isOwner) return
					anu = await nayla.chats.all()
					nayla.setMaxListeners(25)
					for (let _ of anu) {
				    nayla.deleteChat(_.jid)
					}
				    reply(`SUKSES`)
				    break
                    case 'linkgc':
				    if (!isGroup) return reply(ind.groupo()) 
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await nayla.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    nayla.sendMessage(from, yeh, text, {quoted: nay})			       
					break
				    case 'tagall': 
					if (!isGroupAdmins) return
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `➪ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				    case 'delete':
				    case 'del':
				    case 'd':
				    nayla.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break 
                    
                    default:
                    if (body.startsWith(`${prefix}${command}`)) {
                    costum('MENGHADEHHHHHHHHHH', text, tescuk, `MAAF COMMAND *${prefix}${command}* TIDAK TERDAFTAR DI DALAM *${prefix}menu*`)             
                     }
              }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts() 