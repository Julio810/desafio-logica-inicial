const { gets, print } = require('../funções-auxiliares')

const media = gets()

if (media < 5) {
        print('REPROVADO')
    } else if (media >= 5 && media <= 7) {
        print('RECUPERAÇÃO')
    } else {
        print('APROVADO')
    }

print(media)