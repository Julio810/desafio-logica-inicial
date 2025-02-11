import prompt from 'prompt'
import promptQRCode from '../../prompts/prompt-qrcode.js'
import chalk from 'chalk'
import qr from 'qrcode-terminal'

async function creteQRCode(){
    prompt.get(promptQRCode, async (err, result) => {
        if(err){
            console.log('error on aplication')
            return
        }

        const isSmall = result.type == 2
        qr.generate(result.link, {small: isSmall}, (qrcode)=> {
            console.log(chalk.green('QRCODE gerado com sucesso: \n'))
            console.log(qrcode)
        })
    })

    prompt.start()
}

export default creteQRCode