import { PodcastTransferModel } from "../models/filter-podcast-model"
import { repositoryPodcast } from "../repositories/podcast-repository"
import { StatusCode } from "../utils/http-code"

export const serviceListEpisodes = async (p0: string): Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const data = await repositoryPodcast()

    responseFormat.statusCode = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    }

    return responseFormat
}