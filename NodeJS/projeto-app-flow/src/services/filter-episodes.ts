import { IncomingHttpHeaders, IncomingMessage } from "http"
import { repositoryPodcast } from "../repositories/podcast-repository"
import { PodcastTransferModel } from "../models/filter-podcast-model"
import { StatusCode } from "../utils/http-code"

export const serviceFilterEpisodes = async (podcastName: string | undefined):Promise <PodcastTransferModel> => {

        //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    }

    //buscando os dados
    const queryString = podcastName && podcastName.includes("?p=") ? podcastName.split("?p=")[1] : ""
    const data = (await repositoryPodcast(queryString)) || [];

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent

    responseFormat.body = data

    return responseFormat
}