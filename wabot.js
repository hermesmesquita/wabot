const wppconnect = require('@wppconnect-team/wppconnect')
let cache = ''
wppconnect.create({
            session: 'wabot', 
            autoClose: false,
            puppeteerOptions: {args: ['--no-sandbox']}
            })
    .then(client => client
                    .onMessage( message =>{
                        console.log(new Date(Date.now()) + 'Mensagem asdf digitada pelo usuário:\t' + message.body)
                        client
                            .sendText(message.from, 'Ignore esta mensagem mais uma vez. \n\t')
                            .then( result => console.log('Mensagem retornado: \n\t' + result.body))
                            .catch( erro => console.error(erro))
                    }))
    .catch( erro => console.error(erro))
