//archivo para definir funciones get post
//

import {Request, Response, NextFunction} from 'express';
import TweetController from '../controllers/tweet';
const tweetController = new TweetController();

class TweetHttpHandler{

    async getAllTweets(request: Request, response: Response, next: NextFunction){
        try{
            const tweets = await tweetController.getAllTweets();
            request.json(tweets)
        } catch(error){
            next(error)
        }
    }

    async getTweetById(request: Request, response: Response, next: NextFunction){

    }

    async updateTweet(request: Request, response: Response, next: NextFunction){

    }

    async deleteTweet(request: Request, response: Response, next: NextFunction){

    }
}

export default TweetHttpHandler;