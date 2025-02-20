import * as http from "http"

import { getFilterEpisodes, getListEpisodes } from '../projeto-app-flow/src/controllers/podcasts-controller'

import { Routes } from "../projeto-app-flow/src/routes/routes"

import { HttpMethod } from "../projeto-app-flow/src/utils/http-methods"

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //queryString
    //http://localhost:3333/api/episode?p=flow
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""]

    

    //listar podcasts
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
       await getListEpisodes(request, response)
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(request, response)
    }
}