const wppconnect = require('@wppconnect-team/wppconnect')
let cache = ''
wppconnect.create({
            session: 'wabot', 
            autoClose: false,
            puppeteerOptions: {args: ['--no-sandbox']}
            })
    .then(client => client
                    .onMessage( message =>{
                        console.log(new Date(Date.now()) + 'Usuário digitou:\t' + message.body)
                        client
                            .sendText(message.from, 'Olá. Robô em treinamento. Ignore a mensagem. \n\t')
                            .then( result => console.log('Mensagem retornado: \n\t' + result.body))
                            .catch( erro => console.error(erro))
                    }))
    .catch( erro => console.error(erro))
