/*global kakao*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import MapMarkerWrapper from "../components/MapMarkerWrapper";
import NavButtonWrapper from "../components/NavButtonWrapper";
import YumItemDetailBox from "../components/YumItemDetailBox";
import YumItemWrapper from "../components/YumItemWrapper";
import noImage from "../styles/Image/noImage.png";
const Navbar = styled.nav`
	display: flex;
	width: 100vw;
	height: 5vh;
	align-items: center;
`;

const Home = styled.button`
	width: 84px;
	height: 28px;
	margin: 6px;
	border: none;
	border-radius: 6px;
	box-shadow: 0px 0px 2px black;
`;

const NavButtons = styled.span`
	display: flex;
	width: 100vw;
	height: 5vh;
	justify-content: space-between;
`;

const YumContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const YumList = styled.div`
	position: absolute;
	z-index: 2;
	width: 25vw;
	min-width: 324px;
	height: 95vh;
	overflow-x: hidden;
	overflow-y: auto;
	padding: 0;
	::-webkit-scrollbar {
		width: 6px;
		opacity: 0;
	}
	::-webkit-scrollbar-thumb {
		visibility: hidden;
		background-color: #cfd2cf;
		border-radius: 6px;
		opacity: 0.2;
	}
	:hover {
		::-webkit-scrollbar-thumb {
			visibility: visible;
		}
		::-webkit-scrollbar-thumb:hover {
			background-color: #73777b;
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
	const [checkMarker, setCheckMarker] = useState(null);
	const [showShopDetail, setShowShopDetail] = useState(null);
	useEffect(() => {
		axios.get(`https://api.koreatech.in/shops`).then((res) => {
			setShopDatas(res.data.shops);
		});
	}, []);

	const getImage = (data, num) => {
		if (data) {
			return data[num];
		} else {
			return noImage;
		}
	};

	const showShopDetailHandler = (val) => {
		setShowShopDetail(val);
	};

	return (
		<div>
			<Navbar>
				<Home>
					<Link to="/" style={{ textDecoration: "none", color: "black" }}>
						Go Home!
					</Link>
				</Home>
				<NavButtons>
					<NavButtonWrapper categories={categories} setCategory={setCategory} />
				</NavButtons>
			</Navbar>
			<YumContainer>
				<YumList>
					{shopDatas &&
						shopDatas.map((shopData, index) => (
							<YumItemWrapper
								key={index}
								shopData={shopData}
								category={category}
								categories={categories}
								handleMarker={setCheckMarker}
								getImage={getImage}
								showShopDetailHandler={showShopDetailHandler}
								index={index}
							/>
						))}
				</YumList>
				{shopDatas && showShopDetail !== null && (
					<YumItemDetailBox
						shopData={shopDatas[showShopDetail]}
						getImage={getImage}
					/>
				)}
				<Map
					center={position}
					style={{ width: "100vw", height: "95vh" }}
					level={4}
					onClick={() => showShopDetailHandler(null)}
				>
					{shopDatas &&
						shopDatas.map((shopData, index) => (
							<MapMarkerWrapper
								key={index}
								shopData={shopData}
								category={category}
								checkMarker={checkMarker}
								showShopDetailHandler={showShopDetailHandler}
								index={index}
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
