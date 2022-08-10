import styled, { css } from "styled-components";

export const YumItemDetail = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	z-index: 3;
	margin: 0px;
	left: 324px;
	bottom: 12px;
	right: 0px;
	height: 43.8vh;
	min-width: 750px;
	min-height: 360px;
	opacity: 0.9;
	margin: 0px 10px 0px 0px;
	border-radius: 12px;
	background: white;
	box-shadow: 0px 0px 3px #cfd2cf;
	:hover {
		opacity: 0.99;
		box-shadow: 0px 0px 6px #cfd2cf;
	}
	${(props) =>
		props.shopData &&
		css`
			transition: all 0.1s ease;
		`}
`;

export const MainImg = styled.img`
	width: 40%;
	height: 90%;
	margin-left: 12px;
`;
export const Top = styled.div``;
export const Bottom = styled.div``;
export const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 90%;
	width: 100%;
	margin: 0px 12px 0px 12px;
`;
export const Name = styled.div`
	font-family: "Pretendard700";
	font-size: 32px;
	margin-bottom: 8px;
`;
export const Phone = styled.div``;
export const OperatingTime = styled.div``;
export const Address = styled.div``;
export const Delivery = styled.div``;
export const Description = styled.div``;
export const SubImg = styled.img`
	height: 32px;
	width: 32px;
	margin: 6px 6px 6px 0px;
	box-shadow: 0px 0px 3px #cfd2cf;
	transition: all 0.1s linear;
	:hover {
		transform: scale(1.1);
		box-shadow: 0px 0px 6px #cfd2cf;
	}
`;
