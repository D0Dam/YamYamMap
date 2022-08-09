/*global kakao*/
import React, { useEffect, useState } from "react";
import * as S from "./YumItemWrapper.styled";
import { AiFillPhone, AiFillClockCircle } from "react-icons/ai";
let geocoder = new kakao.maps.services.Geocoder();

const YumItemWrapper = ({
	shopData,
	category,
	categories,
	handleMarker,
	getImage,
	showShopDetailHandler,
	index,
	handleCenter,
}) => {
	const [filterCategory, setFilterCategory] = useState(true);
	const [fixMarker, setFixMarker] = useState(null);
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
				<S.YumItemContainer
					onMouseOver={() => handleMarker(shopData.address)}
					onMouseOut={() => !fixMarker && handleMarker(null)}
					onClick={() => {
						showShopDetailHandler(index);
						setFixMarker(true);
						handleCenter(index);
					}}
				>
					<S.YumTitleImg src={getImage(shopData.image_urls, 0)}></S.YumTitleImg>
					<S.YumDescription>
						<S.ShopName>{shopData.name}</S.ShopName>
						<S.ShopPhone>
							<AiFillPhone />
							<div>&nbsp;&nbsp;{shopData.phone}</div>
						</S.ShopPhone>
						<S.ShopTime>
							<AiFillClockCircle />
							<div>
								&nbsp;&nbsp;{shopData.open_time} ~ {shopData.close_time}
							</div>
						</S.ShopTime>
						<S.ShopDetail>
							{shopData.delivery ? (
								<S.ShopDelivery>배달가능</S.ShopDelivery>
							) : (
								<S.ShopDelivery>배달불가</S.ShopDelivery>
							)}
							<S.ShopCategory>
								{categories[shopData.category.substr(3, 3)]}
							</S.ShopCategory>
						</S.ShopDetail>
					</S.YumDescription>
				</S.YumItemContainer>
			)}
		</>
	);
};

export default YumItemWrapper;
