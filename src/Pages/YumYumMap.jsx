/*global kakao*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import MapMarkerWrapper from "../components/MapMarkerWrapper";
import NavButtonWrapper from "../components/NavButtonWrapper";
import YumItemWrapper from "../components/YumItemWrapper";

const Navbar = styled.nav`
	display: flex;
	width: 100vw;
	height: 5vh;
`;

const Home = styled.div`
	width: 84px;
`;

const NavButtons = styled.span`
	display: flex;
	width: 100vw;
	justify-content: space-around;
`;

const YumContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const YumList = styled.div`
	width: 35vw;
	height: 95vh;
	overflow-x: hidden;
	overflow-y: auto;
	::-webkit-scrollbar {
		width: 6px;
	}
	:hover {
		visibility: visible;
		::-webkit-scrollbar-thumb {
			border-radius: 6px;
			background: #b2c8df;
			:hover {
				border-radius: 6px;
				background: #6e85b7;
			}
		}
	}
`;

const YumYumMap = () => {
	const [position, setPosition] = useState({
		lat: 36.763924,
		lng: 127.2823112,
	});
	const [shopDatas, setShopDatas] = useState(null);
	const [category, setCategory] = useState(0);
	useEffect(() => {
		axios.get(`https://api.koreatech.in/shops`).then((res) => {
			setShopDatas(res.data.shops);
			console.log(res.data.shops);
		});
	}, []);
	return (
		<div>
			<Navbar>
				<Home>
					<Link to="/">Go Home</Link>
				</Home>
				<NavButtons>
					<NavButtonWrapper categories={categories} setCategory={setCategory} />
				</NavButtons>
			</Navbar>
			<YumContainer>
				<YumList>
					{shopDatas &&
						shopDatas.map((shopData) => (
							<YumItemWrapper shopData={shopData} category={category} />
						))}
				</YumList>
				<Map
					center={position}
					style={{ width: "65vw", height: "95vh" }}
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
							<MapMarkerWrapper
								key={index}
								shopData={shopData}
								category={category}
							/>
						))}
				</Map>
			</YumContainer>
		</div>
	);
};

const categories = [
	"전체",
	"콜밴",
	"도시락 & 떡볶이",
	"족발",
	"중식",
	"치킨 & 찜닭",
	"피자",
	"미용실",
	"한식",
];

export default YumYumMap;
