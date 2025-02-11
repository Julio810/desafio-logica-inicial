import prompt from 'prompt'

import mainPrompt from '../src1/prompts/prompt-main.js'

import creteQRCode from './services/qr-code/create.js'

import createPassword from './services/password/create.js'

async function main(){
    prompt.get(mainPrompt, async (err, choose) => {
        if (choose.select == 1) await creteQRCode()
        if (choose.select == 2) await createPassword()
    })

    prompt.start()
}

main()