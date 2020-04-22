import React from "react";
import { Form, Button, Label, Input, FormGroup } from "reactstrap";
import "./password.css";
import { ButtonContainer } from "../../../component/Button";

export const Password = () => {
	return (
		<FormGroup className="passwordform">
			<div className="form-group">
				<h3 className="text-center">Forgot your password?</h3>
			</div>

			<div className="form-group">
				<p>
					Enter the email address for your account & we will email you
					a link to reset your password.
				</p>
			</div>

			<div className="form-group">
				<Label>Email</Label>
				<Input type="email" placeholder="Email" />
			</div>

			<div className="form-group">
				<ButtonContainer className="btn-dark btn-block">
					Continue
				</ButtonContainer>
			</div>
		</FormGroup>
	);
};
