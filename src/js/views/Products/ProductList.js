import React, { useState } from "react";
import { Product } from "./Product";
import { Title } from "../../component/Title";
import { storeProducts } from "../../store/data";
import { ProductConsumer } from "../../store/context";

export const ProductList = () => {
	const [products, setProducts] = useState();
	//setProducts({ contacts: storeProducts });
	//setProducts(storeProducts);
	console.log("products-->", storeProducts);
	return (
		<React.Fragment>
			<div className="py-5">
				<div className="container">
					{/*<Title name="our" title="products" />*/}
					<h1>Our Products</h1>
					<div className="row">
						<ProductConsumer>
							{value => {
								return <h1>{value}</h1>;
							}}
						</ProductConsumer>
					</div>
				</div>
			</div>
		</React.Fragment>
		//<Product />
	);
};
