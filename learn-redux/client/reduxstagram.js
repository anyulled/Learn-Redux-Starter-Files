// let's go!
import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import {render} from "react-dom";
import {Provider} from "react-redux";
import store, {history} from "./store";
import App from "./components/App";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}/>
                <Route path="/view/:postid" component={Single}/>
            </Route>
        </Router>
    </Provider>, document.getElementById("root"));