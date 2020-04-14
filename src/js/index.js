//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { App } from "./views/App/App";

//render your react application
ReactDOM.render(
	<Router>
		<App />
	</Router>,

	document.querySelector("#app")
);
