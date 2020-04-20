import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../store/context";
import { ButtonContainer } from "../component/Button";
import { Link } from "react-router-dom";

export const Modal = () => {
	return <div>modal</div>;
};

const ModalContainer = styled.div`
position :fixed;
top:0;
left:0;
right:0;
bottom;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;

`;
