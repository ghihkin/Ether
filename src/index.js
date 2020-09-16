import React from "react";
import ReactDOM from "react-dom";

import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";

import Main from "./main";
import info from "./pages/allInfo";
import balance from "./pages/balance";
import transactions from "./pages/transactions";
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Main>
                <Switch>
                    <Route exact path="/" component={info} />
                    <Route exact path="/balance" component={balance} />
                    <Route
                        exact
                        path="/transactions"
                        component={transactions}
                    />
                    {/* <Route path="*" exact={true} component={page404} /> */}
                </Switch>
            </Main>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
