import styled from "styled-components";

export const NavButton = styled.button`
	font-family: "Pretendard100";
	color: black;
	border: none;
	background: none;
	font-size: 16px;
	width: 100%;
	height: 100%;
	:nth-child(2n-1) {
		border-bottom: 2px solid #cfd2cf;
		:hover {
			border-bottom: 2px solid #f2f2f2;
		}
	}
	:hover {
		background: #f2f2f2;
		transition: all 0.15s linear;
	}
`;