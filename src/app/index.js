import React from "react";
import { render } from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory } from "react-router";

import App from "./containers/App";
import {Resources} from "./components/Resources";
import store from "./store";
import routes from "./routes";

const app = document.getElementById("app");
render(
        <Provider store={store}>
            <Router history={browserHistory} routes={routes}/>
        </Provider>
        , app);
