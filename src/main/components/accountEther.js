import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Web3 from "web3";

export default class EtherWeb3 extends React.Component {
    constructor() {
        super();
        this.state = {
            etherBalance: "00.00",
        };
    }
    componentDidMount() {
        const url = process.env.REACT_APP_API_URL;
        const address = process.env.REACT_APP_ADDRESS;
        const web3 = new Web3(Web3.givenProvider || url);
        web3.eth.getBalance(address, (err, resonse) => {
            if (!err) {
                this.setState({ etherBalance: web3.utils.fromWei(resonse) });
            }
        });
    }
    render() {
        return (
            <List>
                <ListItem>
                    <ListItemText
                        primary="Ether"
                        secondary={this.state.etherBalance}
                    />
                </ListItem>
                <Divider component="li" />
            </List>
        );
    }
}
