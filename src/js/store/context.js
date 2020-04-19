import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "../store/data";
import PropTypes from "prop-types";
const ProductContext = React.createContext();

export const ProductProvider = props => {
	const [products, setProducts] = useState([]); //storeProducts
	const [detailsProduct, setDetailsProduct] = useState(detailProduct);

	useEffect(() => {
		getProducts();
	}, []);

	function getProducts() {
		let tempProducts = [];
		storeProducts.forEach(item => {
			const singleItem = { ...item };
			tempProducts = [...tempProducts, singleItem];
		});
		setProducts(tempProducts);
		return products;
	}

	const handleDetails = () => {
		console.log("Hello from details");
	};
	const addToCart = id => {
		console.log("hello from add to cart", id);
	};

	return (
		<ProductContext.Provider
			value={{
				products,
				detailsProduct,
				handleDetails,
				addToCart
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
