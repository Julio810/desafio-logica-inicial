/*class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    } else{
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade`)
    }
}

const vitor = new Pessoa('Vitor', 25)
const renan = new Pessoa('Renan', 30)

compararPessoas(vitor, renan)*/

/*class carros{
    constructor(marca, cor, gastoCombustivel){
        this.marca = marca
        this.cor = cor
        this.gastoCombustivel = gastoCombustivel
    }
    gasto(distancia, precoCombustivel){
        console.log(distancia * this.gastoCombustivel * precoCombustivel)
    }
}

const dados = new carros('Chevrollet', 'Azul Marinho', 1 / 12)
dados.gasto(70, 6.35)*/

class pessoas{
    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }
    imc(){
        console.log(`${this.nome} possui um peso de ${this.peso}KG e a sua altura corresponde à ${this.altura}M e o seu IMC é ${this.peso / (this.altura ** 2)}`)
    }
}

const massaCorporal = new pessoas('Taciano', 78.5, 1.73)
massaCorporal.imc()