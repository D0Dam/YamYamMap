import axios from "axios";
import React, { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { Link } from "react-router-dom";
import MapMarkerWrapper from "../components/MapMarkerWrapper";
import NavButtonWrapper from "../components/NavButtonWrapper";
import YumItemDetailBox from "../components/YumItemDetailBox";
import YumItemWrapper from "../components/YumItemWrapper";
import noImage from "../styles/assets/Image/noImage.png";
import * as S from "./YumYumMap.styled";
import { CSSTransition } from "react-transition-group";

const YumYumMap = () => {
	const [position, setPosition] = useState({
		lat: 36.763924,
		lng: 127.2813112,
	});
	const [seletedCenter, setSelectedCenter] = useState(null);
	const [shopDatas, setShopDatas] = useState(null);
	const [category, setCategory] = useState(0);
	const [checkMarker, setCheckMarker] = useState(null);
	const [showShopDetail, setShowShopDetail] = useState(null);
	const [animationYumBox, setAnimationYumBox] = useState(false);
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
			<S.Navbar>
				<S.Home>
					<Link to="/" style={{ textDecoration: "none", color: "black" }}>
						Go Home!
					</Link>
				</S.Home>
				<S.NavButtons>
					<NavButtonWrapper categories={categories} setCategory={setCategory} />
				</S.NavButtons>
			</S.Navbar>
			<S.YumContainer>
				<S.GoToCenterButton
					onClick={() => setPosition({ lat: 36.763924, lng: 127.2813112 })}
				>
					Center
				</S.GoToCenterButton>
				<S.YumList>
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
								handleCenter={setSelectedCenter}
								setAnimationYumBox={setAnimationYumBox}
							/>
						))}
				</S.YumList>

				{shopDatas && (
					<CSSTransition
						in={animationYumBox}
						timeout={1000}
						classNames="yumbox"
					>
						<YumItemDetailBox
							shopData={shopDatas[showShopDetail]}
							getImage={getImage}
						/>
					</CSSTransition>
				)}
				<Map
					center={position}
					style={{
						width: "100vw",
						height: "95vh",
						minWidth: "1124px",
					}}
					level={4}
					onClick={() => {
						setAnimationYumBox(false);
						setTimeout(() => setShowShopDetail(null), 199);
					}}
					isPanto={true}
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
								setPositionCenter={setPosition}
								fixCenter={seletedCenter}
							/>
						))}
				</Map>
			</S.YumContainer>
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
