//archivo para definir funciones get post
//

const TweetController = require('../controllers/tweet');
const tweetController = new TweetController();

class TweetHttpHandler {
  async getAllTweets(request, response, next) {
    try {
      const tweets = await tweetController.getAllTweets();
      response.json(tweets); // Use response.json instead of request.json
    } catch (error) {
      next(error);
    }
  }

  async getTweetById(request, response, next) {
    // Implement getTweetById logic here
  }

  async updateTweet(request, response, next) {
    // Implement updateTweet logic here
  }

  async deleteTweet(request, response, next) {
    // Implement deleteTweet logic here
  }
}

module.exports = TweetHttpHandler;