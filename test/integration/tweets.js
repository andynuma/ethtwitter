const TweetStorage = artifacts.require("TweetStorage")

const utils = require("../utils")
const {assertVMException} = utils

const TweetController = artifacts.require("TweetController")

contract("tweets", () =>{

    // before(async () => {
    //     const tweetStorage = await TweetStorage.deployed()
    //     await tweetStorage.createTweet(1,"Hello world!")
    // })
    
    it("can't create tweet without controller" ,async()=>{
        const storage = await TweetStorage.deployed()

        try {
          const tx = await storage.createTweet(1,"tristan")
          assert.fail()
        } catch (err){
          assertVMException(err);
        }
    })

    it("can create tweet with controller" ,async () =>{
        const controller = await TweetController.deployed()
        const tx = await controller.createTweet(1,"Hello world!")

        assert.isOk(tx)
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