/*class hero{
    constructor(name, age, type){
        this.name = name
        this.age = Number(age)
        this.type = type
    }
    attack(){
        console.log("O " + this.name + " de idade " + this.age + " atacou usando " + this.type)
    }
}

let champion = new hero("Wanderich", 28, "Magia")
champion.attack()*/

let hero = {
    name: "Pernidas",
    age: 34,
    type: "Mago",

}

function generate(hero){
    console.log(`O nome do Herói é ${hero.name}, e seu tipo escolhido foi: ${hero.type}`)

    if(hero.type === "Mago"){
        console.log(`O ${hero.type} atacou usando Magia`)
    }else if(hero.type === "Guerreiro"){
        console.log(`O ${hero.type} atacou usando Espada`)
    }else if(hero.type === "Monge"){
        console.log(`O ${hero.type} atacou usando Artes Marciais`)
    }else if(hero.type === "Ninja"){
        console.log(`O ${hero.type} atacou usando Artes Shuriken`)
    }else{
        console.log("Tipo de Heroi inválido")
    }
}

generate(hero)