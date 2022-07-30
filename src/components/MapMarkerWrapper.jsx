/*global kakao*/
import React, { useEffect, useState } from "react";
import { MapInfoWindow, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

let geocoder = new kakao.maps.services.Geocoder();

const MapMarkerWrapper = ({ shopData, category }) => {
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
	return (
		<div>
			{coord && showMarker && (
				<MapMarker
					position={{ lat: coord.Ma, lng: coord.La }}
					onMouseOver={() => setIsVisible(true)}
					onMouseOut={() => setIsVisible(false)}
				>
					{isVisible && <div>{shopData.name}</div>}
				</MapMarker>
			)}
		</div>
	);
};

export default MapMarkerWrapper;
