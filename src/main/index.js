import React from "react";
import { Container } from "@material-ui/core";
import AccountEther from "./components/accountEther";
import AccountEtherToken from "./components/accountEtherToken";
import "./style.css";
require("dotenv").config();
export default () => {
    return (
        <Container maxWidth="lg">
            <AccountEther />
            <AccountEtherToken />
        </Container>
    );
};
