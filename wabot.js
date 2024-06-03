const wppconnect = require('@wppconnect-team/wppconnect')
const { GoogleGenerativeAI } = require('@google/generative-ai')
const genAI = new GoogleGenerativeAI(process.env.API_KEY)

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"})
    
    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "Oi. Eu tenho dois cães na minha casa."}],
            },
            {
                role: "model",
                parts: [{ text: "Que bom te conhecer. O que você gostaria de saber?"}],
            },
        ],
        generationConfig: {
            maxOutputTokens: 50,
        },
    })

    const msg = "Quantas patas tenho na minha casa?"
    const result = await chat.sendMessage(msg)
    const response = await result.response
    const text = response.text()
    console.log(text)
}

wppconnect.create({
    session: 'wabot', 
    autoClose: false,
    puppeteerOptions: {args: ['--no-sandbox']}
})
.then(client => client
    .onMessage( message =>{
        console.log(new Date(Date.now()) + 'Usuário digitou:\n\t' + message.body)
        client
        .sendText( message.from, 'Olá. Robô em treinamento. Ignore a mensagem. \n\t')
        .then( result => console.log('Mensagem retornada:\n\t' + result.body))
        .catch( erro => console.error(erro))
    }))
    .catch( erro => console.error(erro))
    
run()
