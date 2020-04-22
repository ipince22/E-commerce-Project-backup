import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "../store/data";
import PropTypes from "prop-types";
const ProductContext = React.createContext();

export const ProductProvider = props => {
	const [products, setProducts] = useState([]); //storeProducts
	const [detailProduct, setDetailProduct] = useState(detailProduct); //
	const [cart, setCart] = useState([]);
	const [modalOpen, setmodalOpen] = useState(false);
	const [Modal, setModal] = useState(detailProduct);
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
		//console.log("getItem()", product);
		return product;
	};

	const handleDetails = id => {
		const product = getItem(id);
		setDetailProduct(product);
		//console.log("handleDetails()", detailProduct);
		return detailProduct;
	};
	const addToCart = id => {
		let tempProducts = [...products];
		const index = tempProducts.indexOf(getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;

		setProducts(tempProducts);
		setCart(curr => [...curr, product]);
		//console.log("tempProducts", tempProducts);
		//console.log("cart", cart);
		return { products, cart };
	};

	const openModal = id => {
		setmodalOpen(true);

		const product = getItem(id);

		setModal(product);

		return { Modal, modalOpen };
	};
	const closeModal = () => {
		setmodalOpen(false);
		return modalOpen;
	};

	return (
		<ProductContext.Provider
			value={{
				products,
				detailProduct,
				handleDetails,
				addToCart,
				openModal,
				closeModal
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
