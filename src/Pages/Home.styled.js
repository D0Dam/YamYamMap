import styled, { keyframes } from "styled-components";

export const smoothAppear = keyframes`
0% {
  opacity: 0;
  transform: translateY(-10%);
}
30% {
  opacity: 0;
}
60% {
	opacity: 1;
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;
export const Outer = styled.div`
	font-family: "Pretendard700";
	min-width: 810px;
	min-height: 560px;
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

export const FirstPage = styled.div`
	background: #f9f2ed;
`;
export const YumYum = styled.div`
	position: absolute;
	font-family: "Pretendard700";
	width: 100px;
	height: 36px;
	left: 24px;
	top: 24px;
	font-size: 24px;
	transition: all 0.2s ease;
	:hover {
		transform: scale(1.15);
	}
`;
export const StartButton = styled.button`
	position: absolute;
	width: 100px;
	height: 36px;
	right: 24px;
	top: 24px;
	border-radius: 50px;
	border: none;
	background: white;
	box-shadow: 0px 0px 2px #e0d8b0;
	transition: all 0.2s ease;
	:hover {
		transform: scale(1.075);
		box-shadow: 0px 0px 6px #e0d8b0;
		font-family: "Pretendard600";
	}
`;
export const Title = styled.div`
	display: flex;
	width: 342px;
	flex-direction: column;
	.maintitle {
		font-size: 60px;
		animation: ${smoothAppear} 1.4s;
	}
	.subtitle {
		font-size: 36px;
		margin: 36px 0px 0px 8px;
		font-family: "Pretendard500";
		animation: ${smoothAppear} 2.49s alternate;
		animation-iteration-count: infinite;
	}
`;
export const MainPicture = styled.img`
	font-family: "Pretendard500";
	font-size: 24px;
	background: none;
	height: 512px;
	width: 512px;
	animation: ${smoothAppear} 2.49s alternate;
	animation-iteration-count: infinite;
`;
export const Picture = styled.img`
	font-family: "Pretendard500";
	font-size: 24px;
	background: none;
	height: 512px;
	width: 512px;
`;
export const Description = styled.div`
	font-size: 16px;
	margin: 36px 0px 0px 8px;
	font-family: "Pretendard500";
`;
export const SecondPage = styled.div`
	background: #f9f2ed;
`;
export const ThirdPage = styled.div`
	background: #f9f2ed;
`;
