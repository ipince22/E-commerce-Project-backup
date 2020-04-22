import React from "react";

export const CartColumns = () => {
	return (
		<div className="container-fluid text-center d-none d-lg-block">
			<div className="row">
				<div className="col-10 mx-auto col-lg-2">
					<div className="text-uppercase">Product</div>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<div className="text-uppercase">name of Product</div>
				</div>

				<div className="col-10 mx-auto col-lg-2">
					<div className="text-uppercase">Price</div>
				</div>

				<div className="col-10 mx-auto col-lg-2">
					<div className="text-uppercase">Qty</div>
				</div>

				<div className="col-10 mx-auto col-lg-2">
					<div className="text-uppercase">Remove</div>
				</div>

				<div className="col-10 mx-auto col-lg-2">
					<div className="text-uppercase">Total</div>
				</div>
			</div>
		</div>
	);
};
