/*global kakao*/
import React, { useEffect, useState } from "react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { GiPositionMarker } from "react-icons/gi";
import * as S from "./MapMarkerWrapper.styled";
let geocoder = new kakao.maps.services.Geocoder();

const MapMarkerWrapper = ({
	shopData,
	category,
	checkMarker,
	showShopDetailHandler,
	index,
	setPositionCenter,
	fixCenter,
	setAnimationYumBox,
}) => {
	const [coord, setCoord] = useState(null);
	const [isVisible, setIsVisible] = useState(false);
	const [showMarker, setShowMarker] = useState(true);
	const [overlayZIndex, setOverlayZIndex] = useState(0);
	useEffect(() => {
		geocoder.addressSearch(shopData.address, function (result, status) {
			if (status === kakao.maps.services.Status.OK) {
				let coord = new kakao.maps.LatLng(result[0].y, result[0].x);
				setCoord(coord);
			}
		});
	}, []);
	useEffect(() => {
		setShowMarker(() => {
			if (category === 0) return true;
			else if ("S00" + category === shopData.category) return true;
			else return false;
		});
	}, [category]);
	useEffect(() => {
		setIsVisible(() => {
			if (checkMarker === shopData.address) return true;
		});
	}, [checkMarker]);
	useEffect(() => {
		if (isVisible) {
			setOverlayZIndex(99);
		} else {
			setOverlayZIndex(1);
		}
	}, [isVisible]);
	useEffect(() => {
		if (index === fixCenter) {
			if (coord) {
				setPositionCenter({ lat: coord.Ma, lng: coord.La });
			} else {
				console.log("없음");
			}
		}
	}, [fixCenter]);
	return (
		<>
			{coord && showMarker && (
				<S.MarkerCover
					onMouseOver={() => {
						setIsVisible(true);
					}}
					onMouseOut={() => {
						setIsVisible(false);
					}}
					onClick={() => {
						setTimeout(() => showShopDetailHandler(index), 101);
						setAnimationYumBox(true);
					}}
				>
					<CustomOverlayMap
						position={{ lat: coord.Ma, lng: coord.La }}
						zIndex={overlayZIndex}
					>
						<S.Blank />
						<S.InfoWindow isVisible={isVisible}>
							{isVisible ? (
								<S.InfoWindowName>{shopData.name}</S.InfoWindowName>
							) : (
								<GiPositionMarker
									color="orange"
									size={16}
									className="orangemarker"
								/>
							)}
						</S.InfoWindow>
						<S.Blank />
					</CustomOverlayMap>
				</S.MarkerCover>
			)}
		</>
	);
};

export default MapMarkerWrapper;

/*
<
<AiFillCar/> 차
<GiMeat/> 고기
<GiNoodles/> 중식
<GiRoastChicken/> 치킨
<FaPizzaSlice/> 피자
<IoIosCut /> 미용실
<MdFoodBank /> 그냥 한식으로
*/
