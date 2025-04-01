//router gestioanr ligas e
//put actualizar

import express from 'express';
import TweetHttpHandler from '../handlers/tweets-http-handler';

const router= express.Router();
const tweetHttpHandler= new TweetHttpHandler();

router.get('/', tweetHttpHandler.getAllTweets);
router.get('/:id', tweetHttpHandler.getTweetById);
router.put('/:id', tweetHttpHandler.updateTweet);
router.delete('/:id', tweetHttpHandler.deleteTweet);

export default router;