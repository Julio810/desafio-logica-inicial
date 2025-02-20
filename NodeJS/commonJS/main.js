const { getFullName, producType } = require('./services/products')
const config = require('./services/config')
const dataBase = require('./services/database')

async function main(){
    console.log('carrinho compras: ')

    getFullName('1', 'teclado')
    // product.getFullName('408', 'mousepad')
    // product.getFullName('508', 'mouse')
    // product.getProductLabel('mousepad')

    dataBase.connectToDataBase('my-data')
    
}
main()