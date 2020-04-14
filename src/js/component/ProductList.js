import React, { useState } from "react";
import { Product } from "./Product";
import { Title } from "./Title";
import { storeProducts } from "../../data/data";

export const ProductList = () => {
	const [products, setProducts] = useState();
	//setProducts({ contacts: storeProducts });
	//setProducts(storeProducts);
	console.log("products-->", storeProducts);
	return (
		<React.Fragment>
			<div className="py-5">
				<div className="container">
					<Title name="our" title="products" />
					<div className="row" />
				</div>
			</div>
		</React.Fragment>
		//<Product />
	);
};
