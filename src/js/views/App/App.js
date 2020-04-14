import React from "react";
import { Switch, Route } from "react-router-dom";
//include images into your bundle

import { Cart } from "../Products/Cart";
import { Default } from "../Others/Default";
import { Login } from "../Account/Login";
import { Details } from "../Products/Details";
import { Navbar } from "../../component/Navbar";
import { ProductList } from "../Products/ProductList";

//create your first component
export function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" component={ProductList} />
				<Route path="/details" component={Details} />
				<Route path="/cart" component={Cart} />
				<Route path="/login" component={Login} />
				<Route component={Default} />
			</Switch>
		</React.Fragment>
	);
}
