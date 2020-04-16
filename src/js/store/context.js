import React, { useState } from "react";
import { storeProducts, detailProduct } from "../store/data";
import PropTypes from "prop-types";
const ProductContext = React.createContext();

export const ProductProvider = props => {
	const [products, setProducts] = useState(storeProducts);
	const [detailsProduct, setDetailsProduct] = useState(detailProduct);
	/*
	const handleDetails=()=>{
		console.log("Hello from details");
	}
	const addToCart=()=> {
		console.log("hello from add to cart");
	}
*/
	return (
		<ProductContext.Provider
			value={{
				products,
				detailsProduct
				//handleDetails,//: this.handleDetails,
				//addToCart//: this.addToCart
			}}>
			{props.children}
		</ProductContext.Provider>
	);
};
export const ProductConsumer = ProductContext.Consumer;
//export {ProductProvider,ProductConsumer};

ProductProvider.propTypes = {
	children: PropTypes.node
};
