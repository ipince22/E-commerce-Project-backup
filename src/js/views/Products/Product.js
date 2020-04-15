import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../store/context";
import PropTypes from "prop-types";

export const Product = product => {
	//const { id, title, img, price, inCart } = this.props.product;
	console.log(product.img);
	return (
		<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
			<div className="card">
				<div
					className="img-container p-5"
					onClick={() =>
						console.log("you clicked me on the imaee container")
					}>
					<Link to="/details">
						<img
							src={product.img}
							alt="Product"
							className="card-img-top"
						/>
					</Link>
					<button
						className="cart-btn"
						disabled={product.inCart ? true : false}
						onClick={() => {
							console.log("add the cart");
						}}>
						{product.inCart ? (
							<p className="text-capitalize mb-0" disabled>
								in inCart
							</p>
						) : (
							<i className="fas fa-cart-plus" />
						)}
					</button>
				</div>
			</div>
		</ProductWrapper>
	);
};

Product.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	img: PropTypes.string,
	price: PropTypes.number,
	company: PropTypes.string,
	info: PropTypes.string,
	inCart: PropTypes.bool,
	count: PropTypes.number,
	total: PropTypes.number
};

const ProductWrapper = styled.div``;
