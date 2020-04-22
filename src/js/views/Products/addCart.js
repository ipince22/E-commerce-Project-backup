import React from "react";
import { CartColumns } from "../../component/CartColumns";
import { CartEmpty } from "../../component/CartEmpty";
import { ProductConsumer } from "../../store/context";
import { CartList } from "./CartList";
export const addCart = () => {
	return (
		<section>
			<ProductConsumer>
				{value => {
					const { cart } = value;

					if (cart.length > 0) {
						return (
							<React.Fragment>
								<h1 className="text-title text-uppercase text-muted mt-3 mb-2">
									your cart
								</h1>
								<CartColumns />
								<CartList value={value} />
							</React.Fragment>
						);
					} else {
						return <CartEmpty />;
					}
				}}
			</ProductConsumer>
		</section>
	);
};
