import React from "react";
import { Switch, Route } from "react-router-dom";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Cart } from "./Cart";
import { Default } from "./Default";
import { Details } from "./Details";
import { Navbar } from "./Navbar";
import { ProductList } from "./ProductList";

//create your first component
export function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" component={ProductList} />
				<Route path="/details" component={Details} />
				<Route path="/cart" component={Cart} />
				<Route component={Default} />
			</Switch>
		</React.Fragment>
	);
}
