// test/integration/users.js

const UserStorage = artifacts.require('UserStorage')

contract('users', () => {
  
  it("can create user", async () => {
    const storage = await UserStorage.deployed()

    const tx = await storage.createUser("tristan")

    console.log(tx)
  })

  it("can create user", async () => {
    const storage = await UserStorage.deployed()

    const tx = await storage.createUser("tristan")

    assert.isOk(tx) // Add this line!
  });

})