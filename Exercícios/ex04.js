const { gets, print } = require('../funções-auxiliares')

const quantidadeDeNumeros = gets()
let maiorValor = 0
let menorValor = 0

for (let i = 0; i < quantidadeDeNumeros; i++) {
    let numeroEscolhidoPar = gets()
    let numeroEscolhidoImpar = 1
    
    if (numeroEscolhidoPar > maiorValor) {
        maiorValor = numeroEscolhidoPar
    } else if(numeroEscolhidoImpar > menorValor){
        menorValor = numeroEscolhidoImpar
    }
}

print(maiorValor + ' É o maior valor PAR')
print(menorValor + ' É o menor valor IMPAR')