import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillPhone, AiFillClockCircle } from "react-icons/ai";
const YumItemContainer = styled.div`
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

const YumTitleImg = styled.img`
	width: 68px;
	height: 68px;
	opacity: 1;
	background-color: gray;
	border-radius: 12px;
	margin-left: 6px;
`;

const YumDescription = styled.div`
	display: flex;
	flex-direction: column;
	margin: 6px 0px 6px 6px;
`;

const ShopName = styled.div`
	font-size: 16px;
	font-weight: bold;
`;
const ShopPhone = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 12px;
`;
const ShopTime = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 12px;
`;
const ShopDetail = styled.div`
	display: flex;
	flex-direction: row;
	margin: 2px 0px 2px 0px;
`;
const ShopDelivery = styled.div`
	font-size: 10px;
	padding: 1px 2px 1px 2px;
	margin-right: 4px;
	background: #cfd2cf;
	border-radius: 4px;
`;
const ShopCategory = styled.div`
	font-size: 10px;
	padding: 1px 2px 1px 2px;
	background: #cfd2cf;
	border-radius: 4px;
`;

const YumItemWrapper = ({
	shopData,
	category,
	categories,
	handleMarker,
	getImage,
	showShopDetailHandler,
	index,
}) => {
	const [filterCategory, setFilterCategory] = useState(true);
	useEffect(() => {
		setFilterCategory(() => {
			if (category === 0) return true;
			else if ("S00" + category === shopData.category) return true;
			else return false;
		});
	}, [category]);

	return (
		<>
			{shopData && filterCategory && (
				<YumItemContainer
					onMouseOver={() => handleMarker(shopData.address)}
					onMouseOut={() => handleMarker(null)}
					onClick={() => showShopDetailHandler(index)}
				>
					<YumTitleImg src={getImage(shopData.image_urls, 0)}></YumTitleImg>
					<YumDescription>
						<ShopName>{shopData.name}</ShopName>
						<ShopPhone>
							<AiFillPhone />
							<div>&nbsp;&nbsp;{shopData.phone}</div>
						</ShopPhone>
						<ShopTime>
							<AiFillClockCircle />
							<div>
								&nbsp;&nbsp;{shopData.open_time} ~ {shopData.close_time}
							</div>
						</ShopTime>
						<ShopDetail>
							{shopData.delivery ? (
								<ShopDelivery>배달가능</ShopDelivery>
							) : (
								<ShopDelivery>배달불가</ShopDelivery>
							)}
							<ShopCategory>
								{categories[shopData.category.substr(3, 3)]}
							</ShopCategory>
						</ShopDetail>
					</YumDescription>
				</YumItemContainer>
			)}
		</>
	);
};

export default YumItemWrapper;
