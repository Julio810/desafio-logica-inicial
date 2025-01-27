let nome = 'Juggran'
let XP = 6500

if(XP <= 1000){
    console.log("O Herói " + nome + " está no nível FERRO com " + XP + "XP")
}else if(XP >= 1001 && XP <= 2000){
    console.log("O Herói " + nome + " está no nível BRONZE com " + XP + "XP")
}else if(XP >= 2001 && XP <= 5000){
    console.log("O Herói " + nome + " está no nível Prata com " + XP + "XP")
}else if(XP >= 6001 && XP <= 7000){
    console.log("O Herói " + nome + " está no nível OURO com " + XP + "XP")
}else if(XP >= 7001 && XP <= 8000){
    console.log("O Herói " + nome + " está no nível Platina com " + XP + "XP")
}else if(XP >= 8001 && XP <= 9000){
    console.log("O Herói " + nome + " está no nível Ascendente com " + XP + "XP")
}else if(XP >= 9001 && XP < 10000){
    console.log("O Herói " + nome + " está no nível IMORTAL com " + XP + "XP")
}else{
    console.log("O Herói " + nome + " está no nível Radiante com " + XP + "XP")
}