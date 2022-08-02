import React, { useEffect, useState } from "react";
import styled from "styled-components";
const YumItemContainer = styled.div`
	display: flex;
	align-items: center;
	width: 312px;
	height: 80px;
	background-color: white;
	opacity: 0.8;
	margin: 12px 0px 12px 8px;
	border: none;
	border-radius: 10px;
	:hover {
		opacity: 0.99;
	}
`;

const YumImg = styled.img`
	width: 68px;
	height: 68px;
	opacity: 0.9;
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
	font-size: 12px;
`;
const ShopTime = styled.div`
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
	background: grey;
	border-radius: 4px;
`;
const ShopCategory = styled.div`
	font-size: 10px;
	padding: 1px 2px 1px 2px;
	border-radius: 4px;
	background: grey;
`;

const YumItemWrapper = ({ shopData, category, categories, handleMarker }) => {
	const [filterCategory, setFilterCategory] = useState(true);
	useEffect(() => {
		setFilterCategory(() => {
			if (category === 0) return true;
			else if ("S00" + category === shopData.category) return true;
			else return false;
		});
	}, [category]);

	const getMainImage = () => {
		if (shopData.image_urls) {
			return shopData.image_urls[0];
		} else {
			return "/";
		}
	};

	return (
		<>
			{shopData && filterCategory && (
				<YumItemContainer
					onMouseOver={() => handleMarker(shopData.address)}
					onMouseOut={() => handleMarker(null)}
				>
					<YumImg src={getMainImage()}></YumImg>
					<YumDescription>
						<ShopName>{shopData.name}</ShopName>
						<ShopPhone>{shopData.phone}</ShopPhone>
						<ShopTime>
							{shopData.open_time} ~ {shopData.close_time}
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
