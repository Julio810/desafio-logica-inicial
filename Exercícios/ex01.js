function dados(){
    dadosBancarios()
    login()
    senha()
}

let dadosSigilo = dadosBancarios["Martha Cunha da Silva", "Itaú Unibank", 456782-0, 3579-2]

let usuario = "mcunha25"
let password = "%mcs1430"

function dadosBancarios(nome, banco, conta, agencia){
    dadosBanco = nome, banco, conta, agencia
    return dadosBanco
}

console.log("Seja Bem Vindo ao seu Internet Banking")

function login(){
    if(usuario === "mcunha25"){
        console.log("USUÁRIO correto, agora digite a sua senha")
    }else{
        console.log("USUÁRIO inválido")
    }
}

function senha(){
    if(password === "%mcs1430"){
        console.log("SENHA correta, bem vinda ao seu Internet Banking ")
    }else{
        console.log("SENHA inválida, digite novamente o TOKEN")
    }
}

dados()