const wppconnect = require('@wppconnect-team/wppconnect')

wppconnect.create({
            session: 'wabot', 
            autoClose: false,
            puppeteerOptions: {args: ['--no-sandbox']}
            })
    .then(client => client
                    .onMessage( message =>{
                        console.log('\n Mensagem digitada pelo usuário:\n\t' + message.body)
                        client
                            .sendText(message.from, 'Ignore esta mensagem mais uma vez. \n\t')
                            .then( result => console.log('Mensagem retornado: \n\t' + result.body))
                            .catch( erro => console.error(erro))
                    }))
    .catch( erro => console.error(erro))
