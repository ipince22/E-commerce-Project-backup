import styled from "styled-components";

export const ButtonContainer = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;

	border: 0.05rem solid #009ffd;
	color: #009ffd;
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.5s ease-in-out;
	s &:hover {
		background: #009ffd;
		color: #2a2a72;
	}
	&:focus {
		outline: none;
	}
`;
