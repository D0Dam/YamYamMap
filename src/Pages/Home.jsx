import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./Home.styled";
import { CSSTransition } from "react-transition-group";
import { MdKeyboardArrowDown } from "react-icons/md";
import pizza from "../styles/assets/Image/pizza.png";
import location from "../styles/assets/Image/location.png";
import delivery from "../styles/assets/Image/delivery.png";
import burger from "../styles/assets/Image/burger.png";
import meat from "../styles/assets/Image/meat.png";
import bread from "../styles/assets/Image/bread.png";
import chiken from "../styles/assets/Image/chiken.png";
import snack from "../styles/assets/Image/snack.png";

const Home = () => {
	const [titleIndex, setTitleIndex] = useState(0);
	const [isEnterYum, setIsEnterYum] = useState(false);
	const [isEnterTitle, setIsEnterTitle] = useState(false);
	const [showScrollArrow, setShowScrollArrow] = useState(true);
	const [animationSwitch, setAnimationSwitch] = useState(true);
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
					setShowScrollArrow(true);
					outerDivRef.current.scrollTo({
						top: pageHeight,
						left: 0,
						behavior: "smooth",
					});
				} else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
					//현재 2페이지
					setShowScrollArrow(false);
					outerDivRef.current.scrollTo({
						top: pageHeight * 2,
						left: 0,
						behavior: "smooth",
					});
				} else {
					// 현재 3페이지
					setShowScrollArrow(false);
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
					setShowScrollArrow(true);
					outerDivRef.current.scrollTo({
						top: 0,
						left: 0,
						behavior: "smooth",
					});
				} else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
					//현재 2페이지
					setShowScrollArrow(true);
					outerDivRef.current.scrollTo({
						top: 0,
						left: 0,
						behavior: "smooth",
					});
				} else {
					// 현재 3페이지
					setShowScrollArrow(true);
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
	useEffect(() => {
		if (animationSwitch) {
			setTimeout(() => setAnimationSwitch(false), 3499);
		}
	}, [animationSwitch]);
	const titlecycling = (titleIndex) => {
		setTimeout(() => {
			if (titleIndex < 5) {
				setTitleIndex(titleIndex + 1);
			} else {
				setTitleIndex(0);
			}
			setAnimationSwitch(true);
		}, "5000");
	};
	return (
		<S.Outer ref={outerDivRef} className="outer">
			<S.FirstPage className="inner">
				<S.StartButton>
					<Link
						to="YumYumMap"
						style={{
							textDecoration: "none",
							color: "black",
						}}
					>
						Get Start!
					</Link>
				</S.StartButton>
				<S.YumYum
					onMouseEnter={() => setIsEnterYum(true)}
					onMouseOut={() => setIsEnterYum(false)}
				>
					YumYum{isEnterYum && "!"}
				</S.YumYum>
				<S.Title>
					<div
						className="maintitle"
						onMouseEnter={() => setIsEnterTitle(true)}
						onMouseOut={() => setIsEnterTitle(false)}
					>
						병천에서 <br /> 든든한 한끼가 <br /> 필요할 때...
						{isEnterTitle && "!"}
					</div>
					<CSSTransition
						in={animationSwitch}
						timeout={3000}
						classNames="subtitle"
					>
						<div className="subtitle">{subtitle[titleIndex]}</div>
					</CSSTransition>
					<S.ScrollArrow showScrollArrow={showScrollArrow}>
						<MdKeyboardArrowDown />
					</S.ScrollArrow>
				</S.Title>
				<CSSTransition in={animationSwitch} timeout={3000} classNames="foods">
					<S.MainPicture src={food[titleIndex]}></S.MainPicture>
				</CSSTransition>
			</S.FirstPage>
			<S.SecondPage className="inner">
				<S.Title>
					<div className="maintitle">
						병천의
						<br /> 최고맛집을 <br /> 한눈에!
					</div>
					<S.Description>
						병천이 병천순대만 유명한게 아닙니다. <br />
						맛있는게 얼마나 많은데요!!
						<br />
					</S.Description>
				</S.Title>
				<S.Picture src={location}></S.Picture>
			</S.SecondPage>
			<S.ThirdPage className="inner">
				<S.Title>
					<div className="maintitle">
						배달이 되나
						<br /> 확인까지 <br /> 다되는!
					</div>
					<S.Description>
						여기가 배달이 되는 곳이었나 헷갈리신다구요? <br />
						걱정 말아요~ 그 정보 다 여기 있으니~
						<br />
					</S.Description>
				</S.Title>
				<S.Picture src={delivery}></S.Picture>
			</S.ThirdPage>
		</S.Outer>
	);
};
const subtitle = [
	"피자가 끌린다!",
	"햄버거가 끌린다!",
	"고기가 끌린다!",
	"빵이 끌린다!",
	"치킨이 끌린다!",
	"간식이 끌린다!",
];
const food = [pizza, burger, meat, bread, chiken, snack];
export default Home;
