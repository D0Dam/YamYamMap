import styled from "styled-components";

export const NavButton = styled.button`
	font-family: "Pretendard100";
	color: black;
	border: none;
	background: white;
	font-size: 16px;
	width: 100%;
	height: 100%;
	transition: all 0.5s ease;
	border-bottom: 0px solid #feb139;
	:nth-child(2n-1) {
		border-bottom: 3px solid #feb139;
	}
	:hover {
		border-bottom: 6px solid #feb139;
	}
`;
