import React from "react";
import { Button, Label, Input, FormGroup } from "reactstrap";
import { ButtonContainer } from "../../../component/Button";
import "./sign_up.css";

export const Sign_up = () => {
	return (
		<FormGroup className="sign_up_form">
			<div className="form-group">
				<h1 className="text-center">Create Account</h1>
			</div>

			<div className="form-group">
				{/* <Label>Email</Label> */}
				<Input type="text" placeholder="First Name" />
			</div>

			<div className="form-group">
				{/* <Label>Password</Label> */}
				<Input type="text" placeholder="Last Name" />
			</div>

			<div className="form-group">
				{/* <Label>Email</Label> */}
				<Input type="email" placeholder="Email" />
			</div>

			<div className="form-group">
				{/* <Label>Password</Label> */}
				<Input type="password" placeholder="Password" />
			</div>

			<div className="form-group">
				<ButtonContainer className="btn-lg btn-block">
					Create Account
				</ButtonContainer>
			</div>

			<div className="text-center">
				<a href="/login">Already a member</a>
			</div>
		</FormGroup>
	);
};
