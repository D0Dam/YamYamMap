import styled, { css } from "styled-components";

export const InfoWindow = styled.span`
	background-color: none;
	border: none;
	border-radius: 6px;
	width: 100%;
	padding: 0;
	margin: 0;
	${(props) =>
		props.isVisible &&
		css`
			transition: all 0.1s ease;
			padding: 2px 6px 2px 6px;
			background-color: white;
			border-radius: 10px;
			box-shadow: 0px 0px 3px #ec994b;
		`}
	:active {
		padding: 2px 6px 2px 6px;
		background-color: white;
		border-radius: 10px;
		box-shadow: 0px 0px 6px #ffa500;
	}
`;
export const MarkerCover = styled.div``;
export const Blank = styled.span`
	width: 24px;
`;

export const InfoWindowName = styled.span``;
