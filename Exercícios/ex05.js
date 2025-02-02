const { gets, print } = require('../funções-auxiliares')

let valorBruto = gets()
let beneficios = gets()

function calcularPorcentagem(salario, porcentagem){
    return salario * (porcentagem / 100)
}

function percentualImposto(valor){
    if(valor >= 0 && valor <= 1100){
        return 0.05 
    }else if(valor >= 1100.01 && valor <= 2500){
        return 0.1
    }else{
        return 0.15
    }
}

/*let aliquotaImposto = calcularPorcentagem(valorBruto)

let valorImposto = percentualImposto(valorBruto, aliquotaImposto)

let valorTransferir = valorBruto - valorImposto + beneficios*/

let valorTransferir = valorBruto - (calcularPorcentagem(valorBruto, percentualImposto(valorBruto))) + beneficios

print(valorTransferir)