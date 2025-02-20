import { IncomingMessage, request, ServerResponse } from 'http'

import { serviceListEpisodes } from '../services/list-episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes';
import { StatusCode } from '../utils/http-code';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/filter-podcast-model';

export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
    ) => {

    const content = await serviceListEpisodes('flow')
        
    res.writeHead(StatusCode.OK, {'Content-type': ContentType.JSON})
    res.end(JSON.stringify(content)
    )
};

export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) => {

    
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url)

    

    res.writeHead(content.statusCode, { 'Content-type': ContentType.JSON})
    res.end(JSON.stringify(content.body))
}