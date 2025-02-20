const dataBaseType = {
    userType: 'admin',
    typeData: 'datalocal'
}

async function connectDataBase(dataName){
    console.log('conectado ao banco ' + dataName)
}

async function disconnectDataBase(){
    console.log('disconectando do banco de dados')
}

export {
    connectDataBase,
    disconnectDataBase,
    dataBaseType
} 