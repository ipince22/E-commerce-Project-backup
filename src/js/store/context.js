import React, { useState } from "react";

import { storeProducts, detailProduct } from "../store/data";

const ProductContext = React.createContext();
//Provider
//Consumer

export const ProductProvider = props => {
	const [products, setProducts] = useState(storeProducts);
	const [detailsProduct, setDetailsProduct] = useState(detailProduct);
	/*
	function handleDetails(){
		console.log("Hello from details");
	}
	function addToCart() {
		console.log("hello from add to cart");
	}
*/
	return (
		<ProductContext.Provider
			value={{
				products,
				detailsProduct
				//handleDetails(),//: this.handleDetails,
				//addToCart()//: this.addToCart
			}}>
			{props.children}
		</ProductContext.Provider>
	);
};
export const ProductConsumer = ProductContext.Consumer;
//export {ProductProvider,ProductConsumer};
