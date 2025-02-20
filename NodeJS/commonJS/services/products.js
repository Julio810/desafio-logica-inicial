// todas as funções que lida com produto

const producType = {
    version: 'digital',
    tax: 'X1'
}

//hidden const
const apiURL = {
    url: 'www.google.com/api'
}

async function getFullName(codeId, productName){
    console.log('productX: ' + codeId + '---' + productName)
    await doBrakLine()
}

async function getProductLabel(productName){
    console.log('Product ' + productName)
}

//hidden function
async function doBrakLine(){
    console.log('\n')
}

module.exports = {
    getFullName,
    getProductLabel,
    producType
}