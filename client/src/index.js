import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <App />, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.