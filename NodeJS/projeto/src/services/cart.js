// -> acrescenta um item no carrinho
async function addItem(userCart, item){
    userCart.push(item)
}

// -> deletar item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item)=> item.name === name)

    if(index !== -1){
        userCart.splice(index, 1)
    }
}
// -> remover um item -diminui um item
async function removeItem(userCart, index){
    const deleteIndex = index - 1

    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1)
    }
}

async function displayCart(userCart){
    console.log('Shopee cart list: ')
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}X | Subtotal ${item.subtotal()}`)
    })
}

async function calculateTotal(userCart){
    console.log('Shopee Cart TOTAL IS: ')

    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0)
    console.log(`\nTotal: ${result}`)
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}