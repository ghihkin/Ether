import React from "react";
import { Link } from "react-router-dom";
class Main extends React.Component {
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return (
            <div>
                <h2>Etherscan</h2>
                <ul>
                    <li>
                        <Link to="/">all Info</Link>
                    </li>
                    <li>
                        <Link to="/balance">balance</Link>
                    </li>
                    <li>
                        <Link to="/transactions">transactions</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default Main;
