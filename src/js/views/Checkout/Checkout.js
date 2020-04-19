import React from "react";
import "./Checkout.css";

const Checkout = () => {
	return (
		<div className="row">
			<div className="col">
				<form className="checkout-form">
					<div type="form-group">
						<label for="name">Name</label>
						<input
							type="text"
							placeholder="Name"
							name="name"
							id="name"
							className="form-control"
						/>
					</div>

					<div type="form-group">
						<label for="name">Last Name</label>
						<input
							type="text"
							placeholder="Last name"
							name="last"
							id="last"
							className="form-control"
						/>
					</div>

					<div type="form-group">
						<label for="name">Address Line 1</label>
						<input
							type="text"
							placeholder="Address"
							name="address"
							id="address"
							className="form-control"
						/>
					</div>

					<div type="form-group">
						<label for="name">Address Line 2</label>
						<input
							type="text"
							placeholder="Apt, Suit, Bldg, Floor, etc"
							name="address2"
							id="address2"
							className="form-control"
						/>
					</div>

					<div type="form-group">
						<label for="name">City</label>
						<input
							type="text"
							placeholder="City"
							name="city"
							id="city"
							className="form-control"
						/>
					</div>

					<div className="row">
						<div className="col">
							<div type="form-group">
								<label for="name">State</label>
								<input
									type="text"
									placeholder="State"
									name="state"
									id="state"
									className="form-control"
								/>
							</div>
						</div>

						<div className="col">
							<div type="form-group">
								<label for="name">Zip code</label>
								<input
									type="text"
									placeholder="Zip code"
									name="zipcode"
									id="zipcode"
									className="form-control"
								/>
							</div>
						</div>
					</div>

					<div type="form-group">
						<label for="name">Phone Number</label>
						<input
							type="text"
							placeholder="Phone Number"
							name="phone"
							id="phone"
							className="form-control"
						/>
					</div>

					<button type="submit" class="btn btn-primary">
						Submit
					</button>
				</form>
			</div>

			<div className="col">
				<form className="form_2">
					<div type="form-group">
						<label for="name">Name</label>
						<input
							type="text"
							placeholder="Name"
							name="name"
							id="name"
							className="form-control"
						/>
					</div>

					<div type="form-group">
						<label for="name">Last Name</label>
						<input
							type="text"
							placeholder="Last name"
							name="last"
							id="last"
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<button className="btn btn-primary" type="submit">
							Submit form
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Checkout;
