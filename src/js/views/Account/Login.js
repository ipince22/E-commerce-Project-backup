import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import { ButtonContainer } from "../../component/Button";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
	return (
		<Form className="login-form">
			<h2 className="text-center">Welcome</h2>
			<FormGroup>
				<Label>Email</Label>
				<Input type="email" placeholder="email" />
			</FormGroup>

			<FormGroup>
				<Label>Password</Label>
				<Input type="password" placeholder="password" />
			</FormGroup>

			<ButtonContainer className="btn-lg btn-block">
				Log in
			</ButtonContainer>

			<div className="text-center pt-3">Or continue with Facebook</div>

			<FacebookLoginButton className="mt-3 mb-3" />

			<div className="text-center">
				<a href="/sign_up">Sign up</a>
				<span className="p-2">|</span>
				<a href="password">Forgot Password</a>
			</div>
		</Form>
	);
};
