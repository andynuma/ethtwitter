import { eth, getInstance } from "../web3/provider"
import UserStorage from "../web3/artifacts/UserStorage.json"
import { getUserInfo , createUser } from "../web3/users";
import { getTweetInfo , createTweet } from "../web3/tweet";


export default class IndexPage extends React.Component {

    // async componentDidMount(){
    //     const addresses = await eth.getAccounts()
    //     console.log(addresses)

    //     const balance = await eth.getBalance(addresses[0])
    //     console.log(balance)

    //     console.log(UserStorage)

    //     const storage = await getInstance(UserStorage)
    //     const [_id,username] = await storage.profiles.call(1)
    //     console.log("Got username:",username)

    // }

    createUser = async () => {
        const tx = await createUser("tristan")
        console.log(tx)
    }

    logTweet = async() => {
        const tweetInfo = await getTweetInfo(1)
        console.log(tweetInfo)
    }

    createTweet = async () => {
        const tx = await createTweet("Hello world")
        console.log(tx)
    }

    logUser = async () => {
        const userInfo = await getUserInfo(1)
        console.log(userInfo)
    }
    render(){
        return(
           <div>
               <button onClick={this.logUser}>
               Get user with ID 1
               </button>

               <button onClick={this.createUser}>
               Create user
               </button>

               <button onClick={this.logTweet}>
               Get tweet with ID 1
               </button>


               <button onClick={this.createTweet}>
               Create Tweet
               </button>

            </div>
        )
    }
}