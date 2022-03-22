import { createWrapper } from "next-redux-wrapper";

// const { createStore, applyMiddleware } = require("redux");
// const { composeWithDevTools } = require("redux-devtools-extension");
// const {  thunk } = require("redux-thunk");
// const { default: reducer } = require("./reducers");
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers";

const makeStore = () =>
 createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore);
