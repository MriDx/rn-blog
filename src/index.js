import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Posts from "./screens/Posts";
import * as serviceWorker from "./serviceWorker";
import BrowerApp from "./App";
require("react-web-vector-icons/fonts");

ReactDOM.render(<BrowerApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
