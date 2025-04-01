
class DBTweets{

  private tweets: number[] = [1,2,3,4,5];
  
  async getAll():Promise<number[]>{
    return [...this.tweets];
  }
 
}

export const tweetService = new DBTweets;