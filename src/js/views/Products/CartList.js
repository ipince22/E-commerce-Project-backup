import React from "react";
import { CartItem } from "./CartItem";

export const CartList = () => {
	const { cart } = value;
	console.log("cart:", cart);

	return (
		<div>
			hello from cart list
			<CartItem />
		</div>
	);
};
