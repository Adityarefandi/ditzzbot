/** 

Yg Mau Sv Nomerku?

wa.me/6285875158363

Minimal Kasih Cr kalo mau reuploadπ‘
Create By Dika Ardnt.
Recode By Naze & ( Nama Lu )

Kalau Sampai Ketemu Lagi Creator Bot
Yg Reupload Tanpa Kasih Cr 
Sc Akan Saya Encode

Base : Hisoka
Recode : Naze & ( Nama Lu )

**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6282244877433']
global.ownernomer = "6282244877433"
global.premium = ['6282244877433']
global.packname = 'πππππππ ππ’'
global.author = 'α΄Ιͺα΄βα΄’_Κα΄α΄'
global.sessionName = 'session'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'π¨πͺπ π¨ππ¨ π πππ¨',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'π΅ππππ ππππππ ππ πππ',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/Adityarefandi'
global.myyt = 'https://chat.whatsapp.com/KosmbTPMlB2DvXh1R93ns0
global.myytv = 'https://chat.whatsapp.com/KosmbTPMlB2DvXh1R93ns0
global.mygc = "https://chat.whatsapp.com/KosmbTPMlB2DvXh1R93ns0"
global.botname = 'π³ππβπ£_π±ππ'
global.akulaku = 'πππ ππ’ ππ­π²π½ππͺ π‘π?π―πͺπ·π­π²'
global.ytname = 'ππ­π²π½ππͺ π‘π?π―πͺπ·π­π²'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
