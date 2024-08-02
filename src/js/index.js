//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let counter = 0;
let containerApp = ReactDOM.createRoot(document.getElementById('app'))
setInterval (() => {
    counter++,
    containerApp.render(<Home/>);
}, 1000);