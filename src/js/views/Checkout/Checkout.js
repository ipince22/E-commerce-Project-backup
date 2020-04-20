import React from "react";
import "./Checkout.css";

const Checkout = () => {
	return (
		<div className="row">
			<div className="col">
				<form className="checkout-form">
					<h3>Shipping Address</h3>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							placeholder="Name"
							name="name"
							id="name"
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="name">Last Name</label>
						<input
							type="text"
							placeholder="Last name"
							name="last"
							id="last"
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="name">Address Line 1</label>
						<input
							type="text"
							placeholder="Address"
							name="address"
							id="address"
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="name">Address Line 2</label>
						<input
							type="text"
							placeholder="Apt, Suit, Bldg, Floor, etc"
							name="address2"
							id="address2"
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="name">City</label>
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
							<div className="form-group">
								<label htmlFor="name">State</label>
								<select className="form-control" id="state">
									<option value="AL">Alabama</option>
									<option value="AK">Alaska</option>
									<option value="AZ">Arizona</option>
									<option value="AR">Arkansas</option>
									<option value="CA">California</option>
									<option value="CO">Colorado</option>
									<option value="CT">Connecticut</option>
									<option value="DE">Delaware</option>
									<option value="DC">
										District Of Columbia
									</option>
									<option value="FL">Florida</option>
									<option value="GA">Georgia</option>
									<option value="HI">Hawaii</option>
									<option value="ID">Idaho</option>
									<option value="IL">Illinois</option>
									<option value="IN">Indiana</option>
									<option value="IA">Iowa</option>
									<option value="KS">Kansas</option>
									<option value="KY">Kentucky</option>
									<option value="LA">Louisiana</option>
									<option value="ME">Maine</option>
									<option value="MD">Maryland</option>
									<option value="MA">Massachusetts</option>
									<option value="MI">Michigan</option>
									<option value="MN">Minnesota</option>
									<option value="MS">Mississippi</option>
									<option value="MO">Missouri</option>
									<option value="MT">Montana</option>
									<option value="NE">Nebraska</option>
									<option value="NV">Nevada</option>
									<option value="NH">New Hampshire</option>
									<option value="NJ">New Jersey</option>
									<option value="NM">New Mexico</option>
									<option value="NY">New York</option>
									<option value="NC">North Carolina</option>
									<option value="ND">North Dakota</option>
									<option value="OH">Ohio</option>
									<option value="OK">Oklahoma</option>
									<option value="OR">Oregon</option>
									<option value="PA">Pennsylvania</option>
									<option value="RI">Rhode Island</option>
									<option value="SC">South Carolina</option>
									<option value="SD">South Dakota</option>
									<option value="TN">Tennessee</option>
									<option value="TX">Texas</option>
									<option value="UT">Utah</option>
									<option value="VT">Vermont</option>
									<option value="VA">Virginia</option>
									<option value="WA">Washington</option>
									<option value="WV">West Virginia</option>
									<option value="WI">Wisconsin</option>
									<option value="WY">Wyoming</option>
								</select>
							</div>
						</div>

						<div className="col">
							<div className="form-group">
								<label htmlFor="name">Zip code</label>
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

					<div className="form-group">
						<label htmlFor="name">Phone Number</label>
						<input
							type="text"
							placeholder="Phone Number"
							name="phone"
							id="phone"
							className="form-control"
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>

			<div className="col">
				<form className="form_2">
					<div type="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							placeholder="Name"
							name="name"
							id="name"
							className="form-control"
						/>
					</div>

					<div type="form-group">
						<label htmlFor="name">Last Name</label>
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
