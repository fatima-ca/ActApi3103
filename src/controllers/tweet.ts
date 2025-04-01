import { tweetService } from "../db/tweet";

class TweetController{
   

    async getAllTweets(){
        const allTweets = await tweetService.getAll();
       
      return ;
    }


}

export default TweetController;