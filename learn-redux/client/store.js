/**
 * Created by anyulled on 7/11/16.
 */
import React from "react";
import {createStore, compose} from "redux";
import {syncHistoryWithStore} from "react-router-redux";
import {browserHistory} from "react-router";
import rootReducer from "./reducers/index";
import comments from "./data/comments";
import posts from "./data/posts";

const defaultState = {
    posts, comments
};

/** @namespace window.devToolsExtension */
/**
 * Check if the devtools extension exists or return the store itself.
 * @type {Function}
 */
const enhancer = compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f
);

const store = createStore(rootReducer, defaultState, enhancer);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
    module.hot.accept("./reducers/", ()=> {
        const nextRootReducer = require("./reducers/index").default;
        store.replaceReducer(nextRootReducer);

    })
}

export default store;