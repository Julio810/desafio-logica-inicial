function rankeadas(){
    partidas()
    condicionais()
}

let total = partidas(21, 0)

function partidas(vitorias, derrotas){
    elo = vitorias - derrotas
    return elo
}

function condicionais(){
    if(total <= 10){
        console.log("O Herói tem de saldo " + total + " e está no nível FERRO")
    }else if(total >= 11 && total <= 20){
        console.log("O Herói tem de saldo " + total + " e está no nível BRONZE")
    }else if(total >= 21 && total <= 50){
        console.log("O Herói tem de saldo " + total + " e está no nível PRATA")
    }else if(total >= 51 && total <= 80){
        console.log("O Herói tem de saldo " + total + " e está no nível OURO")
    }else if(total >= 81 && total <= 90){
        console.log("O Herói tem de saldo " + total + " e está no nível DIAMANTE")
    }else if(total >= 91 && total <= 100){
        console.log("O Herói tem de saldo " + total + " e está no nível LENDÁRIO")
    }else{
        console.log("O Herói tem de saldo " + total + " e está no nível IMORTAL")
    }
}
rankeadas()