import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/icons8-iphone-24.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
			<Link to="/">
				<img src={logo} alt="store" className="navbar-brand" />
			</Link>
			<ul className="navbar-nav align-items-center">
				<li className="nav-item ml-5">
					<Link to="/" className="nav-link">
						Products
					</Link>
				</li>
			</ul>
			<Link to="/cart" className="ml-auto">
				<ButtonContainer>
					<span>
						<i className="fas fa-cart-plus" />
						My Cart
					</span>
				</ButtonContainer>
			</Link>
		</nav>
	);
};
