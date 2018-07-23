// test/integration/users.js

const web3 = require("web3")

//Get the hexTostring function from web3:
const {
  utils:{ hexToString},
} = web3

const UserStorage = artifacts.require('UserStorage')

contract('users', () => {

  it("can create user", async () => {
    const storage = await UserStorage.deployed()

    const tx = await storage.createUser("tristan")

    assert.isOk(tx) // Add this line!
  });

  
  it("can get user" , async () => {
    const storage = await UserStorage.deployed()
    const userId = 1

    //Get the userInfo array
    const userInfo = await storage.profiles.call(userId)

    //Get the second element (the username)
    const username = userInfo[1]

    assert.equal(hexToString(username),"tristan")
  })

})