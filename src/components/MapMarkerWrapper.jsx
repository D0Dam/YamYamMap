/*global kakao*/
import React, { useEffect, useRef, useState } from "react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { IoFastFoodOutline } from "react-icons/io5";

let geocoder = new kakao.maps.services.Geocoder();

const MarkerCover = styled.div``;

const InfoWindow = styled.span`
	background-color: white;
	border: 1px solid black;
	border-radius: 6px;
	width: 100%;
	padding: 0;
	margin: 0;
`;

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
						<InfoWindow>
							{isVisible ? <span>{shopData.name}</span> : <IoFastFoodOutline />}
						</InfoWindow>
					</CustomOverlayMap>
				</MarkerCover>
			)}
		</>
	);
};

export default MapMarkerWrapper;
const overlayIcons = "<IoFastFoodOutIine/>";
