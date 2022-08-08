/*global kakao*/
import React, { useEffect, useRef, useState } from "react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import styled, { css } from "styled-components";
import { GiPositionMarker } from "react-icons/gi";
import { isVisible } from "@testing-library/user-event/dist/utils";

let geocoder = new kakao.maps.services.Geocoder();

const MarkerCover = styled.div``;
const Blank = styled.span`
	width: 24px;
`;
const InfoWindow = styled.span`
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
const InfoWindowName = styled.span``;
const MapMarkerWrapper = ({
	shopData,
	category,
	checkMarker,
	showShopDetailHandler,
	index,
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
	return (
		<>
			{coord && showMarker && (
				<MarkerCover
					onMouseOver={() => {
						setIsVisible(true);
					}}
					onMouseOut={() => {
						setIsVisible(false);
					}}
					onClick={() => showShopDetailHandler(index)}
				>
					<CustomOverlayMap
						position={{ lat: coord.Ma, lng: coord.La }}
						zIndex={overlayZIndex}
					>
						<Blank />
						<InfoWindow isVisible={isVisible}>
							{isVisible ? (
								<InfoWindowName>{shopData.name}</InfoWindowName>
							) : (
								<GiPositionMarker color="orange" size={16} />
							)}
						</InfoWindow>
						<Blank />
					</CustomOverlayMap>
				</MarkerCover>
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
