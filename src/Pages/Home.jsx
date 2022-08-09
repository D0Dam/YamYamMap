import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import "./Home.css";
import pizza from "../styles/assets/Image/pizza.png";
import location from "../styles/assets/Image/location.png";
import delivery from "../styles/assets/Image/delivery.png";
import burger from "../styles/assets/Image/burger.png";
import meat from "../styles/assets/Image/meat.png";
import bread from "../styles/assets/Image/bread.png";
import chiken from "../styles/assets/Image/chiken.png";
import snack from "../styles/assets/Image/snack.png";

const smoothAppear = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-10%);
	}
	30% {
		opacity: 0;
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;
const Outer = styled.div`
	font-family: "Pretendard700";
	overflow-y: auto;
	height: 100vh;
	::-webkit-scrollbar {
		display: none;
	}
	.inner {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 100px;
	}
`;

const FirstPage = styled.div`
	background: #f9f2ed;
`;
const StartButton = styled.button`
	position: absolute;
	width: 100px;
	height: 36px;
	right: 24px;
	top: 24px;
	border-radius: 50px;
	border: none;
	background: white;
	box-shadow: 0px 0px 2px #e0d8b0;
	:hover {
		box-shadow: 0px 0px 6px #e0d8b0;
		font-family: "Pretendard600";
	}
`;
const Title = styled.div`
	display: flex;
	width: 342px;
	flex-direction: column;
	.maintitle {
		font-size: 60px;
		animation: ${smoothAppear} 1.5s;
	}
	.subtitle {
		font-size: 36px;
		margin: 36px 0px 0px 8px;
		font-family: "Pretendard500";
		animation: ${smoothAppear} 1.499s alternate;
		animation-iteration-count: infinite;
	}
`;
const MainPicture = styled.img`
	font-family: "Pretendard500";
	font-size: 24px;
	background: none;
	height: 512px;
	width: 512px;
	animation: ${smoothAppear} 1.499s alternate;
	animation-iteration-count: infinite;
`;
const Picture = styled.img`
	font-family: "Pretendard500";
	font-size: 24px;
	background: none;
	height: 512px;
	width: 512px;
`;
const Description = styled.div`
	font-size: 16px;
	margin: 36px 0px 0px 8px;
	font-family: "Pretendard500";
`;
const SecondPage = styled.div`
	background: #f9f2ed;
`;
const ThirdPage = styled.div`
	background: #f9f2ed;
`;

const Home = () => {
	const [titleIndex, setTitleIndex] = useState(0);
	const outerDivRef = useRef();
	useEffect(() => {
		const wheelHandler = (e) => {
			e.preventDefault();
			const { deltaY } = e;
			const { scrollTop } = outerDivRef.current;
			const pageHeight = window.innerHeight;

			if (deltaY > 0) {
				// 스크롤 내릴 때
				if (scrollTop >= 0 && scrollTop < pageHeight) {
					//현재 1페이지
					outerDivRef.current.scrollTo({
						top: pageHeight,
						left: 0,
						behavior: "smooth",
					});
				} else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
					//현재 2페이지
					outerDivRef.current.scrollTo({
						top: pageHeight * 2,
						left: 0,
						behavior: "smooth",
					});
				} else {
					// 현재 3페이지
					outerDivRef.current.scrollTo({
						top: pageHeight * 2,
						left: 0,
						behavior: "smooth",
					});
				}
			} else {
				// 스크롤 올릴 때
				if (scrollTop >= 0 && scrollTop < pageHeight) {
					//현재 1페이지
					outerDivRef.current.scrollTo({
						top: 0,
						left: 0,
						behavior: "smooth",
					});
				} else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
					//현재 2페이지
					outerDivRef.current.scrollTo({
						top: 0,
						left: 0,
						behavior: "smooth",
					});
				} else {
					// 현재 3페이지
					outerDivRef.current.scrollTo({
						top: pageHeight,
						left: 0,
						behavior: "smooth",
					});
				}
			}
		};
		const outerDivRefCurrent = outerDivRef.current;
		outerDivRefCurrent.addEventListener("wheel", wheelHandler);
		return () => {
			outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
		};
	}, []);
	useEffect(() => {
		titlecycling(titleIndex);
	}, [titleIndex]);
	const titlecycling = (titleIndex) => {
		setTimeout(() => {
			if (titleIndex < 5) {
				setTitleIndex(titleIndex + 1);
				console.log(titleIndex);
			} else {
				setTitleIndex(0);
			}
		}, "3000");
	};
	const changeTitle = (titleIndex) => {
		if (titleIndex === 0) {
			return <div className="subtitle">피자가 끌린다!</div>;
		} else if (titleIndex === 1) {
			return <div className="subtitle">햄버거가 끌린다!</div>;
		} else if (titleIndex === 2) {
			return <div className="subtitle">고기가 끌린다!</div>;
		} else if (titleIndex === 3) {
			return <div className="subtitle">빵이 끌린다!</div>;
		} else if (titleIndex === 4) {
			return <div className="subtitle">치킨이 끌린다!</div>;
		} else {
			return <div className="subtitle">간식이 끌린다!</div>;
		}
	};

	return (
		<Outer ref={outerDivRef} className="outer">
			<FirstPage className="inner">
				<StartButton>
					<Link
						to="YumYumMap"
						style={{
							textDecoration: "none",
							color: "black",
						}}
					>
						Get Start!
					</Link>
				</StartButton>
				<Title>
					<div className="maintitle">
						병천에서 <br /> 든든한 한끼가 <br /> 필요할 때...
					</div>
					{changeTitle(titleIndex)}
				</Title>
				<MainPicture src={food[titleIndex]}></MainPicture>
			</FirstPage>
			<SecondPage className="inner">
				<Title>
					<div className="maintitle">
						병천의
						<br /> 최고맛집을 <br /> 한눈에!
					</div>
					<Description>
						병천이 병천순대만 유명한게 아닙니다. <br />
						맛있는게 얼마나 많은데요!!
						<br />
					</Description>
				</Title>
				<Picture src={location}></Picture>
			</SecondPage>
			<ThirdPage className="inner">
				<Title>
					<div className="maintitle">
						배달이 되나
						<br /> 확인까지 <br /> 다되는!
					</div>
					<Description>
						여기가 배달이 되는 곳이었나 헷갈리신다구요? <br />
						걱정 말아요~ 그 정보 다 여기 있으니~
						<br />
					</Description>
				</Title>
				<Picture src={delivery}></Picture>
			</ThirdPage>
		</Outer>
	);
};
const food = [pizza, burger, meat, bread, chiken, snack];
export default Home;
