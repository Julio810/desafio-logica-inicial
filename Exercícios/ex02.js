class registro{
    constructor(nome, rg, cpf, nascimento){
        this.nome = nome
        this.rg = rg
        this.cpf = cpf
        this.nascimento = nascimento
    }
    documento(){
        console.log("O seu nome completo é " + this.nome + " o número do seu RG " + this.rg + " o CPF " + this.cpf + " e a data de nascimento " + this.nascimento)
    }
}

let registroNascimento = new registro("Cassia dos Santos Cruz", "8.354.654", "129-645-223-41", "31-12-1990")
registroNascimento.documento()