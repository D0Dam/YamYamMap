/*global kakao*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Map, MapMarker, getLat, getLng } from "react-kakao-maps-sdk";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MapMarkerWrapper from "../components/MapMarkerWrapper";

const Navbar = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100vw;
	height: 5vh;
`;

const YumContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const YumList = styled.div`
	width: 25vw;
`;

const YumYumMap = () => {
	const [position, setPosition] = useState({
		lat: 36.763924,
		lng: 127.2823112,
	});
	const [shopDatas, setShopDatas] = useState(null);
	useEffect(() => {
		axios.get(`https://api.koreatech.in/shops`).then((res) => {
			setShopDatas(res.data.shops);
		});
	}, []);
	return (
		<div>
			<Navbar>
				<Link to="/">Go Home</Link>
				<button>뭔가 기능</button>
				<span>뭔가 기능 2</span>
			</Navbar>
			<YumContainer>
				<YumList>여기에 음식점 리스트</YumList>
				<Map
					center={position}
					style={{ width: "75vw", height: "95vh" }}
					level={4}
					onClick={(_t, mouseEvent) => {
						setPosition({
							lat: mouseEvent.latLng.getLat(),
							lng: mouseEvent.latLng.getLng(),
						});
					}}
				>
					{shopDatas &&
						shopDatas.map((shopData, index) => (
							<MapMarkerWrapper key={index} shopData={shopData} />
						))}
				</Map>
			</YumContainer>
		</div>
	);
};

export default YumYumMap;
