/*global kakao*/
import React, { useEffect, useState } from "react";
import {
	MapInfoWindow,
	MapMarker,
	CustomOverlayMap,
} from "react-kakao-maps-sdk";
import styled from "styled-components";
import { IoFastFoodOutline } from "react-icons/io5";

let geocoder = new kakao.maps.services.Geocoder();

const InfoWindow = styled.span`
	position: relative;
	background-color: white;
	border: 1px solid black;
	border-radius: 6px;
	width: 100%;
	padding: 0;
	margin: 0;
	z-index: 10;
	:hover {
		z-index: 9999;
	}
`;

const MapMarkerWrapper = ({ shopData, category, checkMarker }) => {
	const [coord, setCoord] = useState(null);
	const [isVisible, setIsVisible] = useState(false);
	const [showMarker, setShowMarker] = useState(true);
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

	return (
		<div>
			{coord && showMarker && (
				<CustomOverlayMap
					position={{ lat: coord.Ma, lng: coord.La }}
					style={{ color: "#000", zIndex: "auto" }}
				>
					<InfoWindow
						onMouseOver={() => setIsVisible(true)}
						onMouseOut={() => setIsVisible(false)}
					>
						{isVisible ? <span>{shopData.name}</span> : <IoFastFoodOutline />}
					</InfoWindow>
				</CustomOverlayMap>
			)}
		</div>
	);
};

export default MapMarkerWrapper;
const overlayIcons = "IoFastFoodOutIine";
