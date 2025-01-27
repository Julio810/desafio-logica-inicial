/*function expressoesNumericas(){
    somar()
    subtrair()
    multiplicar()
    dividir()
}

function somar(){
    let soma1 = 10
    let soma2 = 35
    let resultado = soma1 + soma2 
    console.log(resultado)
}

function subtrair(){
    let subt1 = 250
    let subt2 = 100
    let final = subt1 - subt2
    console.log(final)
}

function multiplicar(){
    let mult1 = 9
    let mult2 = 4
    let produto = mult1 * mult2
    console.log(produto)
}

function dividir(){
    let div1 = 25
    let div2 = 5
    let dividendo = div1 / div2
    console.log(dividendo)
}

expressoesNumericas()*/

/*let resultado = soma(5, 10)

function soma(numA, numB){
    somatorio = numA + numB
    return somatorio
}
console.log(resultado)*/

let userName = getFirstName("Thiago Barros dos Santos", " ")
function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}
console.log("Seja bem-vindo " + userName)