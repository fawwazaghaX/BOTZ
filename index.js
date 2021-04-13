/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FRREEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

// MAU AMBIL CASE CARI SINI YA???
// SILAHKAN BRO:)
// TAPI SETIDAK NYA ADD NAMA GW DI THX TO BOT KLEAN
// NAYLA CHAN
// SEKIAN

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
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
apiKey = setting.apiKey
cr = setting.cr
ownername = setting.ownername
// NOTE MAU UBAH??? SILAHKAN UBAH DI SRC + SETTINGS.JSON
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ROOM TO FILE ]==============================================================*/                  	                         	 

const antilink = JSON.parse(fs.readFileSync('./nayla/antilink.json'))
const event = JSON.parse(fs.readFileSync('./nayla/event.json'))
const antiwibu = JSON.parse(fs.readFileSync('./nayla/antiwibu.json'))
const antijawa = JSON.parse(fs.readFileSync('./nayla/antijawa.json'))
const welkom = JSON.parse(fs.readFileSync('./nayla/welkom.json'))
const antigay = JSON.parse(fs.readFileSync('./nayla/antigay.json'))
const antibocil = JSON.parse(fs.readFileSync('./nayla/antibocil.json'))

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*======================================================[ TIME BOTZ ]==============================================================*/                  	                    	 

            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CONNECTING  ]==============================================================*/                  	    
                    	 
            async function starts() {
        	const nayla = new WAConnection()
	        nayla.logger.level = 'warn'
	        console.log(banner.string)
        	nayla.on('qr', () => {
     		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	        })
	        fs.existsSync('./self-bot.json') && nayla.loadAuthInfo('./self-bot.json')
	        nayla.on('connecting', () => {
		    start('2', 'Connecting...')
        	})
	        nayla.on('open', () => {
	    	success('2', 'Connected')
         	})
        	await nayla.connect({timeoutMs: 30*1000})
            fs.writeFileSync('./self-bot.json', JSON.stringify(nayla.base64EncodedAuthInfo(), null, '\t'))
	        nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	        }
        	})
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=======================================================[ WELCOME ]==============================================================*/                  	    
            nayla.on('group-participants-update', async (anu) => {
	    	if (!welkom.includes(anu.jid)) return
		    try {
			const mdata = await nayla.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
		    num = anu.participants[0]
		    try {
			ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
		    } catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		    }
			teks = `╔════════════════════\n`
			teks += `║╭───────────────────\n`
			teks += `║│➻ *HALO @${num.split('@')[0]}*\n`
			teks += `║│➻ *SELAMAT DATANG DIGRUB*\n`
			teks += `║│➻ *${mdata.subject}*\n`			
			teks += `║╰───────────────────\n`
			teks += `╠══[ *WELCOME [•] NEW* ]════\n`
			teks += `║╭───────[ *INTRO* ]──────\n`
			teks += `║│➻ *NAMA* :\n`
			teks += `║│➻ *UMUR* :\n`
			teks += `║│➻ *GENDER* :\n`
			teks += `║│➻ *ASKOT* :\n`
			teks += `║│➻ *AGAMA* :\n`
			teks += `║│➻ *ALASAN BERGABUNG* :\n`
			teks += `║╰───────────────────\n`
			teks += `╚════════════════════\n`
			let buff = await getBuffer(ppimg)
		    nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
			num = anu.participants[0]
			try {
			ppimg = await nayla.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			teks = `akhirnya beban group berkurang 𝟭,bye bye🥳 @${num.split('@')[0]} jasamu akan di kubur dalam²`
			let buff = await getBuffer(ppimg)
			nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })
	 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
                	 	         
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
			var pes = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
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
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAntigay = isGroup ? antigay.includes(from) : false
			const isAntibocil = isGroup ? antibocil.includes(from) : false
			const isAntiwibu = isGroup ? antiwibu.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntijawa = isGroup ? antijawa.includes(from) : false 
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
				(id == null || id == undefined || id == false) ? nayla.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nayla.sendMessage(from, teks.trim(), extendedText, {quoted: nay, contextInfo: {"mentionedJid": memberr}})
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
           
           // YG VCARD INI GANTI SESUKA KALIAN DI SETTING                    
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:OWNER\n' 
            + 'ORG: OWNER REALL;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=${ownerNumber}:${ownerNumber}\n' 
            + 'END:VCARD' 
            
            // YG VCARD1 INI JGN DI UBAH YAAA
            const vcard1 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:OTHER\n'
            + 'ORG:OWNER;\n'
            + 'TEL;type=CELL;type=VOICE;waid=62812874133914:+62 812-8741-33914\n'
            + 'END:VCARD'	            
			switch(command) {
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

				case 'help':
				case 'menu':
runtime = process.uptime()
	menuF = `╔════════════════════
║╭───────────────────
║│➻ *BOT WHATSAPP NEW* 
║│➻ *OWNER* : ${ownername}
║│➻ *AUTHOR* : NAYLA CHAN
║│➻ *NAMEBOT* : BOTWA
║│https://github.com/naylachan
║╰───────────────────
╠════[ *ANTI•MENU* ]══════
║╭───────────────────
║│➻ *${prefix}antilink*
║│➻ *${prefix}antigay*
║│➻ *${prefix}antibocil*
║│➻ *${prefix}antiwibu*
║│➻ *${prefix}antijawa*
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
║│➻ *${prefix}play*
║│➻ *${prefix}stalktwit*
║│➻ *${prefix}stalkgithub*
║╰──────────────────
╠════[ *FUN•MENU* ]══════
║╭──────────────────
║│➻ *${prefix}simi*
║│➻ *${prefix}hilih*
║│➻ *${prefix}jumlah*
║│➻ *${prefix}hurufkebalik*
║│➻ *${prefix}spamcall*
║│➻ *${prefix}spamemail*
║│➻ *${prefix}fakta*
║│➻ *${prefix}gcard*
║│➻ *${prefix}quotes*
║│➻ *${prefix}tebakgambar*
║╰───────────────────
╠════[ *INFO•MENU* ]═════
║╭───────────────────
║│➻ *${prefix}neko*
║│➻ *${prefix}quotesnime*
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
║│➻ *${prefix}ssweb*
║│➻ *${prefix}smoke*
║│➻ *${prefix}rainbow*
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
║╰───────────────────
╠═══[ *RANDOM3•MENU* ]═══
║╭───────────────────
║│➻ *${prefix}stalkig*
║│➻ *${prefix}estetikpic*
║│➻ *${prefix}memeindo*
║│➻ *${prefix}darkjokes*
║│➻ *${prefix}nickff*
║│➻ *${prefix}tahta*
║│➻ *${prefix}neon2*
║│➻ *${prefix}wall*
║│➻ *${prefix}wolf*
║│➻ *${prefix}tfire*
║│➻ *${prefix}ytgold*
║│➻ *${prefix}ytsilver*
║│➻ *${prefix}t3d*
║│➻ *${prefix}logoa*
║│➻ *${prefix}pornhub*
║│➻ *${prefix}marvel*
║│➻ *${prefix}leavest*
║│➻ *${prefix}phcoment*
║│➻ *${prefix}nulis*
║│➻ *${prefix}urlshort*
║│➻ *${prefix}shortener*
║╰───────────────────
╠═══[ *RANDOM3•MENU* ]═══
║╭───────────────────
║│➻ *${prefix}fox*
║│➻ *${prefix}dog*
║│➻ *${prefix}cat*
║│➻ *${prefix}panda*
║│➻ *${prefix}panda1*
║│➻ *${prefix}bird*
║│➻ *${prefix}koala*
║│➻ *${prefix}meme* 
║╰───────────────────
╠═══[ *INDOHOT•MENU* ]═══
║╭───────────────────
║│➻ *${prefix}indo1* 
║│➻ *${prefix}indo2* 
║│➻ *${prefix}indo3* 
║│➻ *${prefix}indo4* 
║│➻ *${prefix}indo5* 
║│➻ *${prefix}indo6* 
║│➻ *${prefix}indo7* 
║│➻ *${prefix}indo8* 
║│➻ *${prefix}indo9* 
║│➻ *${prefix}indo10* 
║│➻ *${prefix}indo11* 
║│➻ *${prefix}indo12* 
║│➻ *${prefix}indo13* 
║│➻ *${prefix}indo14* 
║│➻ *${prefix}indo15* 
║│➻ *${prefix}indo16* 
║│➻ *${prefix}indo17* 
║│➻ *${prefix}indo18* 
║│➻ *${prefix}indo19* 
║│➻ *${prefix}indo20* 
║│➻ *${prefix}indo21* 
║│➻ *${prefix}indo22* 
║│➻ *${prefix}indo23* 
║│➻ *${prefix}indo24* 
║│➻ *${prefix}indo25* 
║╰──────────────────
╠═════[ *INFO•BOT* ]═══════
║╭──────────────────
║│➻ *${prefix}ganteng*
║│➻ *${prefix}cantik*
║│➻ *${prefix}jelek*
║│➻ *${prefix}goblok*
║│➻ *${prefix}bego*
║│➻ *${prefix}pinter*
║│➻ *${prefix}jago*
║│➻ *${prefix}babi*
║│➻ *${prefix}beban*
║│➻ *${prefix}baik*
║│➻ *${prefix}jahat*
║│➻ *${prefix}anjing*
║│➻ *${prefix}monyet*
║│➻ *${prefix}haram*
║│➻ *${prefix}kontol*
║│➻ *${prefix}pakboy*
║│➻ *${prefix}pakgirl*
║│➻ *${prefix}sadboy*
║│➻ *${prefix}sadgirl*
║│➻ *${prefix}wibu*
║│➻ *${prefix}nolep*
║│➻ *${prefix}hebat*
║╰──────────────────
╠═════[ *WALL•MENU* ]═══
║╭──────────────────
║│➻ *${prefix}wallteknologi*
║│➻ *${prefix}wallhacker*
║│➻ *${prefix}wallcyber*
║│➻ *${prefix}wallmuslim*
║│➻ *${prefix}wallpegunungan*
║│➻ *${prefix}caklontong*
║│➻ *${prefix}robot*
║│➻ *${prefix}3dwhite*
║│➻ *${prefix}daun*
║│➻ *${prefix}metal1*
║│➻ *${prefix}metal*
║│➻ *${prefix}scary*
║│➻ *${prefix}imo*
║│➻ *${prefix}wallpaper*
║│➻ *${prefix}quotes2*
║│➻ *${prefix}quotes1*
║╰──────────────────
╠════[ *STORAGE•MENU* ]═══
║╭──────────────────
║│➻ *${prefix}toimg*
║│➻ *${prefix}readmore*
║│➻ *${prefix}chatlist*
║│➻ *${prefix}addsticker*
║│➻ *${prefix}addvn*
║│➻ *${prefix}getvn*
║│➻ *${prefix}getsticker*
║│➻ *${prefix}liststicker*
║│➻ *${prefix}listvn*
║│➻ *${prefix}addimage*
║│➻ *${prefix}getimage*
║│➻ *${prefix}imagelist*
║│➻ *${prefix}addvideo*
║│➻ *${prefix}getvideo*
║│➻ *${prefix}listvideo*
║╰───────────────────
╠═══[ *SOUND•MENU* ]═══
║╭───────────────────
║│➻ *${prefix}sound1*
║│➻ *${prefix}sound2*
║│➻ *${prefix}sound3*
║│➻ *${prefix}sound4*
║│➻ *${prefix}sound5*
║│➻ *${prefix}sound6*
║│➻ *${prefix}sound7*
║│➻ *${prefix}sound8*
║│➻ *${prefix}sound9*
║│➻ *${prefix}sound10*
║│➻ *${prefix}sound11*
║│➻ *${prefix}sound12*
║│➻ *${prefix}sound13*
║│➻ *${prefix}sound14*
║│➻ *${prefix}sound15*
║│➻ *${prefix}sound16*
║│➻ *${prefix}sound17*
║│➻ *${prefix}sound18*
║│➻ *${prefix}sound19*
║│➻ *${prefix}sound20*
║│➻ *${prefix}sound21*
║│➻ *${prefix}sound22*
║│➻ *${prefix}sound23*
║│➻ *${prefix}sound24*
║╰──────────────────
╠═════[ *INFO•BOT* ]══════
║╭──────────────────
║│➻ *saya tidak menjamin 100%* 
║│➻ *fitur bot ini work/sukses*
║│➻ *(gunakan dengan bijak oky)*
║│➻ *sc full api FREEEEE*
║│➻ *by ${ownername}*
║╰──────────────────
╠══════[ *THX TO* ]═══════
║╭──────────────────
║│➻ *NAYLA CHAN*
║│➻ *RYNZ*
║│➻ *ARA•ARA TEAM* 
║╰──────────────────
╚════════════════════`
costum(menuF, text, tescuk, cr)
break
// JGN HARUS TQTO
// JGN DI PERJUAL BELIKAN
// JGN AMPAS TAMPILAN GW
// BY NAYLA CHAN		             		             

// JELEK? IYA EMG JELEK :V  
// MAU REQUEST FITUR??? 
// CHAT GW wa.me/+62812874133914                              
/* ======================================================[ MEDIA-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 



		            case 'play':
		            if (args.length < 1) return reply('MASUKKAN JUDUL LAGU') 
					costum('[❗] PROSES LOADING', text, tescuk, cr) 
		            anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/yt-play?q=${body.slice(6)}`, {method: 'get'})
		            anu1 = await getBuffer(anu.thumb)
		            anu2 = `➻ *JUDUL* : ${anu.title}\n`
		            anu2 += `➻ *UPLOAD* : ${anu.uploaded}\n`
		            anu2 += `➻ *DURASI* : ${anu.duration}\n`
		            anu2 += `➻ *VIEW* : ${anu.total_view}\n`
		            anu2 += `➻ *CHANNEL* : ${anu.channel}\n`
		            anu2 += `➻ *SIZE* : ${anu.filesize}\n`
		            anu3 = await getBuffer(anu.link)
		            nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay})
		            nayla.sendMessage(from, anu3, audio, {mimetype: 'audio/mp4', filename: `${anu.title}`, quoted: nay})
		            break
		            case 'ytmp3':
		            if (args.length < 1) return reply('MASUKKAN LINK YT') 
					costum('[❗] PROSES LOADING', text, tescuk, cr) 
		            anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${body.slice(7)}`, {method: 'get'})
		            anu1 = await getBuffer(anu.thumb)
		            anu2 = `➻ *JUDUL* : ${anu.title}\n`
		            anu2 += `➻ *SIZE* : ${anu.filesize}\n`		           		 
		            anu3 = await getBuffer(anu.result)
		            nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay})
		            nayla.sendMessage(from, anu3, audio, {mimetype: 'audio/mp4', filename: `${anu.title}`, quoted: nay})
		            break
		            case 'ytmp4':
		            if (args.length < 1) return reply('MASUKKAN LINK YT') 
					costum('[❗] PROSES LOADING', text, tescuk, cr) 
		            anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${body.slice(7)}`, {method: 'get'})
		            anu1 = await getBuffer(anu.thumb)
		            anu2 = `➻ *JUDUL* : ${anu.title}\n`
		            anu2 += `➻ *SIZE* : ${anu.filesize}\n`		           		 
		            anu3 = await getBuffer(anu.result)
		            nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay})
		            nayla.sendMessage(from, anu3, video, {mimetype: 'video/mp4', filename: `${anu.title}`, quoted: nay})
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
/*======================================================[ API?? ZEKS ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          

                                                                                                                                                                                                                 
                   case 'stalkig':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} jokowi*`)
                   F = body.slice(9)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${F}&apikey=apivinz`)
                   anu1 = await getBuffer(anu.profile_pic)
                   anu2 = `➻ *NAMA* : ${anu.username}\n`
                   anu2 += `➻ *FULLNAME* : ${anu.fullname}\n`
                   anu2 += `➻ *FOLLOWERS* : ${anu.follower}\n`
                   anu2 += `➻ *FOLLOWING* : ${anu.following}\n`
                   anu2 += `➻ *VERIFY* : ${anu.is_verified}\n`
                   anu2 += `➻ *BISNIS* : ${anu.is_bussiness}\n`
                   anu2 += `➻ *PRIVATE* : ${anu.is_private}\n`
                   anu2 += `➻ *BIO* : ${anu.bio}\n`
                   anu2 += `➻ *SOURCE* : ${anu.source}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay})
                   break
                   case 'quran':
                   anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
                   anu1 = `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NOMOR* : ${anu.result.nomor}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                   anu1 += `➻ *URUT* : ${anu.result.urut}\n`                                                                            
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   reply(anu1)
                   break
                   case 'estetikpic':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result.result)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'memeindo':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'darkjokes':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'nickff':
                   anu = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`)
                   anu1 = `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   reply(anu1)
                   break
                   case 'tahta':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'neon2':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break                    
                   case 'wall':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break   
                   case 'wolf':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=rimurubotz&text2=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break 
                   case 'tfire':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=apivinz`)                   
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break                
                   case 'ytgold':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(8)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'ytsilver':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(10)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 't3d':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(5)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'logoa':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'pornhub':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'marvel':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'leavest':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break                    
                   case 'phcoment':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'nulis':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'shortener':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command}https://link*`)
                   F = body.slice(11)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)                   
                   anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SHORT* : ${anu.short}\n`
                   anu1 += `➻ *LONG* : ${anu.long}\n`
                   anu1 += `➻ *DATE* : ${anu.created_at.date}\n`
                   anu1 += `➻ *TYPE* : ${anu.created_at.timezone_type}\n`
                   anu1 += `➻ *ZONA* : ${anu.created_at.timezone}\n`
                   reply(anu1)
                   break 
                   case 'urlshort':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command}https://link*`)
                   F = body.slice(10)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)                                      
                   anu = await fetchJson(`https://api.zeks.xyz/api/urlshort-all?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SATU* : ${anu.result_1}\n`
                   anu1 += `➻ *DUA* : ${anu.result_2}\n`
                   anu1 += `➻ *TIGA* : ${anu.result_3}\n`
                   reply(anu1)
                   break
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*===================================================[ API?? RANDOM API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                   case 'fox':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay})
                   break
                   case 'dog':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay})
                   break
                   case 'cat':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay})
                   break
                   case 'panda':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay})
                   break
                   case 'panda1':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay})
                   break
                   case 'bird':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay})
                   break
                   case 'koala':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay})
                   break
                   case 'meme':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak`, quoted: nay})
                   break
                   
              
/* =====================================================[ INDO-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                              
                   case 'indo1':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
				   case 'indo2':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
				   case 'indo3':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
				   case 'indo4':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
				   case 'indo5':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
				   case 'indo6':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
                   case 'indo7':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
		           case 'indo8':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
				   case 'indo9':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })				   
				   break
				   case 'indo10':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
				   case 'indo11':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
				   case 'indo12':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
				   case 'indo13':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
				   case 'indo14':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
	               case 'indo15':				    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
    	           case 'indo16':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
				   case 'indo17':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
				   case 'indo18':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
				   case 'indo19':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'indo20':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
				   case 'indo21':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
				   case 'indo22':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
				   case 'indo23':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
				   case 'indo24':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
				   case 'indo25':				 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })				   
				   break 
/* ==================================================[ TERRRRRR-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                  
                   case 'ganteng': case 'cantik': case 'jelek': case 'goblok': case 'bego': case 'pinter': case 'jago': case 'nolep': 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': case 'monyet': case 'haram': 
                   case 'kontol': case 'pakboy': case 'pakgirl':	case 'sadboy': case 'sadgirl': case 'wibu': case 'hebat':
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
                                                                                               
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                                                                                                                                                                                                                                                                                                                                                          
                   case 'wallteknologi': case 'walteknologi':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/teknologi?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'wallpegunungan': case 'walpegunungan':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/pegunungan?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'wallmuslim': case 'walmuslim':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/muslim?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'wallcyber': case 'walcyber':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/cyberspace?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'wallhacker': case 'walhacker':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/programming?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nayla.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'quotes1':
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/randomquote/muslim?apikey=alpin1`)
                   anu1 = `➻ *QUOTES* : ${anu.result.text_id}`
                   reply(anu1)
                   break
                   case 'quotes2':
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/quotes/kanye?apikey=alpin1`)
                   anu1 = `➻ *QUOTES* : ${anu.result.text_id}`
                   reply(anu1)
                   break
                   case 'wallpaper': case 'walpaper':
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/random/wallpaper?apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'imo': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(5)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/lmo?text=${F}&theme=bintang&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'scary': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/yamaker?text=${F}&theme=scary-njir&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'metal': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/yamaker?text=${F}&theme=metal-epek&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'metal1': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/noti?text=${F}&theme=metal-wolf&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'daun': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(6)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/noti?text=${F}&theme=daun-kaki&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case '3dwhite': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(9)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/neon9?text=${F}&theme=3dwhite&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'robot': 
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/maker/special/transformer?text=${F}&apikey=alpin11`)
                   anu1 = await getBuffer(anu.result.results)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay})
                   break
                   case 'caklontong':
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/kuis/caklontong?apikey=alpin1`)                 
                   anu1 = `➻ *SOAL* : ${anu.result.soal}\nJAWAB CUYY WAKTU 60 DETIK`
                   anu2 = `➻ *JAWABAN* : ${anu.result.jawaban}\n`
                   anu2 += `➻ *DESK* : ${anu.result.deskripsi}`
                   setTimeout( () => {
                   nayla.sendMessage(from, anu1, text,{quoted: nay})
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
                                                                                                                                                        
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                   
                   case 'ssweb':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} https://google.com*`)                  
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${body.slice(7)}`)
                   nayla.sendMessage(from, anu, image, {caption: `nih kack`, quoted: nay})
                   break
                   case 'smoke':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/smoke?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break 
                   case 'rainbow':
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/rainbowshine?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: nay})
                   break                                      
                                        				                                                                                                                                                                              
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    
                    
                    case 'toimg': 
					costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
					encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'nihh kack'})
				    fs.unlinkSync(ran)
					})					
			    	break 
                    case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(ind.wrongf())
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'chatlist':
		         	case 'cekchat':
		  	    	nayla.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `ALL CHAT BOTZ`
		     		var selepbot =         {
					contextInfo:   {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
	     			}
     				}
	    			}
			      	}
			     	teks = `Total : ${totalchat.length}`
			    	nayla.sendMessage(from, teks, MessageType.text, selepbot)
		    		break
	                case 'addsticker':          
			    	if (!isQuotedSticker) return reply('Reply stiker nya')
			     	svst = body.slice(12)
			    	if (!svst) return reply('Nama sticker nya apa?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await nayla.downloadMediaMessage(boij)
			       	setiker.push(`${svst}`)
			    	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
			     	fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
			    	nayla.sendMessage(from, `Sukses Menambahkan Sticker kedalam database\nSilahkan Cek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: nay})
      				break
		        	case 'addvn':
			    	if (!isQuotedAudio) return reply('Reply vnnya blokk!')
			    	svst = body.slice(7)
		    		if (!svst) return reply('Nama audionya apa su?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	audionye.push(`${svst}`)
			     	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
			     	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
			     	nayla.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: nay}) 
			      	break
		         	case 'getvn':
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
			     	namastc = body.slice(7)
				    buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
			    	nayla.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: nay})
			     	break
			        case 'getsticker':
		        	case 'gets':
		        	if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
		      		namastc = body.slice(12)
			     	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
			    	nayla.sendMessage(from, result, sticker)
			     	break
                    case 'liststicker':
		     		teks = '*Sticker List :*\n\n'
	    			for (let awokwkwk of setiker) {
			 		teks += `- ${awokwkwk}\n`
    				}
		      		teks += `\n*Total : ${setiker.length}*`
		      		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay})
		      		break
		        	case 'listvn':
	         		case 'vnlist':
		     		teks = '*List Vn:*\n\n'
		     		for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${audionye.length}*`
		    		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay})
		    		break
		        	case 'addimage':
		     		if (!isQuotedImage) return reply('Reply imagenya blokk!')
			    	svst = body.slice(10)
			    	if (!svst) return reply('Nama imagenya apa su?')
		     		boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	     		delb = await nayla.downloadMediaMessage(boij)
		     		imagenye.push(`${svst}`)
			    	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
			    	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
		      		nayla.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: nay})		     	 
		     		break
		        	case 'getimage':
                    case 'getimg':
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
	      			namastc = body.slice(10)
	      			buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
    				nayla.sendMessage(from, buffer, image, {  quoted: nay})
	      			break
		        	case 'imagelist':
		        	case 'listimage':
		    		teks = '*List Image :*\n\n'
		    		for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${imagenye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay})
			    	break
		        	case 'addvideo':
			    	if (!isQuotedVideo) return reply('Reply videonya blokk!')
			    	svst = body.slice(10)
			     	if (!svst) return reply('Nama videonya apa su?')
			     	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	videonye.push(`${svst}`)
			    	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
			     	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
			      	nayla.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: nay}) 
	     			break
			        case 'getvideo':
		    	    if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
			    	namastc = body.slice(10)
			    	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
			    	nayla.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: nay})
			       	break
		           	case 'listvideo':
	           		case 'videolist':
	    			teks = '*List Video :*\n\n'
	    			for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
		    		}
			    	teks += `\n*Total : ${videonye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay})
			      	break				                         
                    case 'setprefix':
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)					 
					break 
                    case 'admin':
         	        case 'owner':
         	        case 'creator':
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard1}, MessageType.contact, { quoted: nay})
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay})
                    nayla.sendMessage(from, 'TUHH NOMER OWNER KU [(>_<)] JANGAN KASARIN YAA',MessageType.text, { quoted: nay} )				
					break    
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
				    if (!isGroup) return reply(`GRUB ONLY`) 
				    if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
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
				     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                    case 'sound1':
                    const sound2 = fs.readFileSync('sound/sound2.mp3')
                    nayla.sendMessage(from, sound2, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break 
                    case 'sound3':
                    const sound3 = fs.readFileSync('sound/sound3.mp3')
                    nayla.sendMessage(from, sound3, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break 
                    case 'sound4':
                    const sound4 = fs.readFileSync('sound/sound4.mp3')
                    nayla.sendMessage(from, sound4, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break      
                    case 'sound5':
                    const sound5 = fs.readFileSync('sound/sound5.mp3')
                    nayla.sendMessage(from, sound5, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break           
                    case 'sound6':
                    const sound6 = fs.readFileSync('sound/sound6.mp3')
                    nayla.sendMessage(from, sound6, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound7':
                    const sound7 = fs.readFileSync('sound/sound7.mp3')
                    nayla.sendMessage(from, sound7, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound8':
                    const sound8 = fs.readFileSync('sound/sound8.mp3')
                    nayla.sendMessage(from, sound8, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound9':
                    const sound9 = fs.readFileSync('sound/sound9.mp3')
                    nayla.sendMessage(from, sound9, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound10':
                    const sound10 = fs.readFileSync('sound/sound10.mp3')
                    nayla.sendMessage(from, sound10, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound11':
                    const sound11 = fs.readFileSync('sound/sound11.mp3')
                    nayla.sendMessage(from, sound11, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound12':
                    const sound12 = fs.readFileSync('sound/sound12.mp3')
                    nayla.sendMessage(from, sound12, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound13':
                    const sound13 = fs.readFileSync('sound/sound13.mp3')
                    nayla.sendMessage(from, sound13, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound14':
                    const sound14 = fs.readFileSync('sound/sound14.mp3')
                    nayla.sendMessage(from, sound14, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound15':
                    const sound15 = fs.readFileSync('sound/sound15.mp3')
                    nayla.sendMessage(from, sound15, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound16':
                    const sound16 = fs.readFileSync('sound/sound16.mp3')
                    nayla.sendMessage(from, sound16, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound17':
                    const sound17 = fs.readFileSync('sound/sound17.mp3')
                    nayla.sendMessage(from, sound17, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound18':
                    const sound18 = fs.readFileSync('sound/sound18.mp3')
                    nayla.sendMessage(from, sound18, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound19':
                    const sound19 = fs.readFileSync('sound/sound19.mp3')
                    nayla.sendMessage(from, sound19, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound20':
                    const sound20 = fs.readFileSync('sound/sound20.mp3')
                    nayla.sendMessage(from, sound20, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound21':
                    const sound21 = fs.readFileSync('sound/sound21.mp3')
                    nayla.sendMessage(from, sound21, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound22':
                    const sound22 = fs.readFileSync('assets/sound22.mp3')
                    nayla.sendMessage(from, sound22, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
                    case 'sound23':
                    const sound23 = fs.readFileSync('sound/sound23.mp3')
                    nayla.sendMessage(from, sound23, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break              
                    case 'sound24':
                    const sound24 = fs.readFileSync('sound/sound24.mp3')
                    nayla.sendMessage(from, sound24, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                                                        
                     
                     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

                   	case 'welcome':
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('*SUDAH AKTIF* !!!')
					welkom.push(from)
					fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
					reply('[❗] SUKSES AKTIF WELCOME')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
				    fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
				    reply('[❗] SUKSES NONAKTIF WELCOME')
					} else {
					reply(`......`)
					}
					break  
                    case 'antilink': 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antilink.push(from)
					fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
					reply('*[❗] ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
					reply('*[❗] DEACTIVATED ANTILINK*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antigay': 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antigay.push(from)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[❗] ACTIVATED ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[❗] DEACTIVATED ANTIGAY*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antibocil': 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antibocil.push(from)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] ACTIVATED ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antibocil.splice(from, 1)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] DEACTIVATED ANTIGAY*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antiwibu': 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antiwibu.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] ACTIVATED ANTIWIBU*')
					} else if (Number(args[0]) === 0) {
					antiwibu.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] DEACTIVATED ANTIWIBU*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antijawa': 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antijawa.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] ACTIVATED ANTIJAWA*')
					} else if (Number(args[0]) === 0) {
					antijawa.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] DEACTIVATED ANTIJAWA*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					
 			 										                    
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ANTI RANDOM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                    default:
                    if (budy.includes("https://")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				   
                    if (budy.includes("syg")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				     
				    if (budy.includes("ayan")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("love ")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("ayuk")){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bocilz yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bocil Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("chan(")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => { 
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("yamete")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("ambe")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("tempek")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("matamu")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("jancok")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("aing")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }				    
				   
				     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 				    
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