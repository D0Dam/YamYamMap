import styled from "styled-components";

export const YumItemContainer = styled.div`
	display: flex;
	align-items: center;
	width: 304px;
	height: 80px;
	background-color: white;
	opacity: 0.8;
	margin: 12px 0px 12px 8px;
	border: none;
	border-radius: 10px;
	box-shadow: 0px 0px 3px #cfd2cf;
	transition: all 0.1s linear;
	:hover {
		transform: scale(1.02);
		opacity: 0.99;
		box-shadow: 0px 0px 6px #cfd2cf;
	}
`;

export const YumTitleImg = styled.img`
	width: 68px;
	height: 68px;
	opacity: 1;
	background-color: gray;
	border-radius: 12px;
	margin-left: 6px;
`;

export const YumDescription = styled.div`
	display: flex;
	flex-direction: column;
	margin: 6px 0px 6px 6px;
`;

export const ShopName = styled.div`
	font-size: 16px;
	font-family: "Pretendard700";
`;
export const ShopPhone = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 12px;
`;
export const ShopTime = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 12px;
`;
export const ShopDetail = styled.div`
	display: flex;
	flex-direction: row;
	margin: 2px 0px 2px 0px;
`;
export const ShopDelivery = styled.div`
	font-size: 10px;
	padding: 1px 2px 1px 2px;
	margin-right: 4px;
	background: #cfd2cf;
	border-radius: 4px;
`;
export const ShopCategory = styled.div`
	font-size: 10px;
	padding: 1px 2px 1px 2px;
	background: #cfd2cf;
	border-radius: 4px;
`;
