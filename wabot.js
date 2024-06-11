const wppconnect = require('@wppconnect-team/wppconnect')

wppconnect.create({
    session: 'wabot', 
    autoClose: false,
    puppeteerOptions: {args: ['--no-sandbox']}
})
.then(client => client
    .onMessage( message =>{
        console.log(new Date(Date.now()) + 'Usuário digitou:\n\t' + message.body)
        client
            .sendText( message.from, "🤖Robô em treinamento. Ignore a mensagem.")
            .then( result => console.log('Mensagem retornada:\n\t' + result.body))
            .catch( erro => console.error(erro))
    }))
    .catch( erro => console.error(erro))

