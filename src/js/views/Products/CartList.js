import React from "react";
import { CartItem } from "./CartItem";
import PropTypes from "prop-types";

export const CartList = props => {
	const { cart } = props.cartObject;
	//console.log("props.cartObject:", props.cartObject);

	return (
		<div className="container-fluid">
			{cart.map(item => {
				return (
					<CartItem
						key={item.id}
						cartItem={item}
						cartValue={props.cartObject}
					/>
				);
			})}
		</div>
	);
};

CartList.propTypes = {
	cartObject: PropTypes.array
};
