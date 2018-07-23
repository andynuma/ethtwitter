const TweetStorage = artifacts.require("TweetStorage")

contract("tweets", () =>{

    before(async () => {
        const tweetStorage = await TweetStorage.deployed()
        await tweetStorage.createTweet(1,"Hello world!")
    })
    
    it("can get tweet",async() => {
        const storage = await TweetStorage.deployed()

        const tweet = await storage.tweets.call(1) // Get the data
        const [tweetId,text,userId] = tweet //Destructure the data

        //check if the differnent parts contain the epected values
        assert.equal(parseInt(tweetId),1)
        assert.equal(text,"Hello world!")
        assert.equal(parseInt(userId),1)
    })
})