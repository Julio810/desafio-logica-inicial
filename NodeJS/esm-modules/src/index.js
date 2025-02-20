// import * as database from './utils/database.mjs'

// database.connectDataBase('my-dataBase')
// database.disconnectDataBase('')

import { connectDataBase, disconnectDataBase, dataBaseType } from "./utils/database.mjs";

import { getDataFromApi } from './utils/api.js'

getDataFromApi()

connectDataBase('my-dataBase')
disconnectDataBase()
console.log(dataBaseType)

