/*global kakao*/
import React, { useEffect, useState } from "react";
import { MapInfoWindow, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

let geocoder = new kakao.maps.services.Geocoder();

const MapMarkerWrapper = ({ shopData }) => {
	const [coord, setCoord] = useState(null);
	const [isVisible, setIsVisible] = useState(false);
	useEffect(
		() =>
			geocoder.addressSearch(shopData.address, function (result, status) {
				if (status === kakao.maps.services.Status.OK) {
					let coord = new kakao.maps.LatLng(result[0].y, result[0].x);
					setCoord(coord);
				}
			}),
		[]
	);
	return (
		<div>
			{coord && (
				<MapMarker
					position={{ lat: coord.Ma, lng: coord.La }}
					onMouseOver={() => setIsVisible(true)}
					onMouseOut={() => setIsVisible(false)}
				>
					<div>{shopData.name}</div>
					<div>{isVisible && }</div>
				</MapMarker>
			)}
		</div>
	);
};

export default MapMarkerWrapper;
