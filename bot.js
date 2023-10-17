const discord = require("discord.js")
const cliente = new discord.Client()

cliente.on('ready', ()=> {
    console.log("logado")
})

cliente.on('message', (message) =>{
    if (message.content === "oi"){
        message.reply("oi gigi maravilhosa")
    }
})

cliente.login('MTE2MzgzMTcxOTU2OTM5MTYyOA.GBDOY_.4k0dU75xdjYi3YhPtc9hpctYQiXcFq1oGg5Hok')