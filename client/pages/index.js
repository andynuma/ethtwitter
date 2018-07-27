import { eth } from "../web3/provider"

export default class IndexPage extends React.Component {

    async componentDidMount(){
        const addresses = await eth.getAccounts()
        console.log(addresses)
    }
    render(){
        return(
            <h1>hello world!</h1>
        )
    }
}
