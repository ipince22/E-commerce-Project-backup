import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "../store/data";
import PropTypes from "prop-types";
const ProductContext = React.createContext();

export const ProductProvider = props => {
	const [products, setProducts] = useState([]); //storeProducts
	const [detailProduct, setDetailProduct] = useState(detailProduct); //

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

	const getItem = id => {
		const product = products.find(item => item.id === id);
		console.log("getItem()", product);
		return product;
	};

	const handleDetails = id => {
		const product = getItem(id);
		setDetailProduct(product);
		console.log("handleDetails()", detailProduct);
		return detailProduct;
	};
	const addToCart = id => {
		console.log("hello from add to cart", id);
	};

	return (
		<ProductContext.Provider
			value={{
				products,
				detailProduct,
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
