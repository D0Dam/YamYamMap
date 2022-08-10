import styled, { keyframes } from "styled-components";

export const smoothAppear = keyframes`
0% {
  opacity: 0;
  transform: translateX(-5%);
}
100% {
  opacity: 1;
  transform: translateX(0);
}
`;

export const smoothDisappear = keyframes`
0% {
  opacity: 1;
  transform: translateX(0%);
}
100% {
  opacity: 0;
  transform: translateX(-2%);
}
`;

export const Navbar = styled.nav`
	display: flex;
	width: 100vw;
	height: 5vh;
	min-width: 1000px;
	min-height: 36px;
	align-items: center;
`;

export const Home = styled.button`
	width: 84px;
	min-width: 84px;
	height: 28px;
	margin: 6px;
	border: none;
	border-radius: 6px;
	box-shadow: 0px 0px 2px black;
	font-family: "Pretendard300";
	:hover {
		transition: all 0.1s ease;
		box-shadow: 0px 0px 4px black;
		:active {
			box-shadow: 0px 0px 2px black;
		}
	}
`;

export const NavButtons = styled.span`
	display: flex;
	width: 100vw;
	height: 5vh;
	min-width: 1000px;
	min-height: 36px;
	justify-content: space-between;
`;

export const YumContainer = styled.div`
	display: flex;
	flex-direction: row;
	font-family: "Pretendard400";
	.yumbox-enter {
		opacity: 0;
	}
	.yumbox-enter-active {
		opacity: 1;
		animation: ${smoothAppear} 0.3s;
	}
	.yumbox-exit {
		opacity: 1;
		animation: ${smoothDisappear} 0.2s;
	}
	.yumbox-exit-active {
		opacity: 0;
	}
`;

export const GoToCenterButton = styled.button`
	position: absolute;
	z-index: 999;
	top: 6vh;
	right: 1vh;
	width: 60px;
	height: 36px;
	border: none;
	border-radius: 16px;
	background: white;
	margin: 0;
	padding: 0;
	box-shadow: 0px 0px 4px #f2f2f2;
	:hover {
		transition: all 0.2s ease;
		background: #f2f2f2;
	}
`;

export const YumList = styled.div`
	position: absolute;
	z-index: 2;
	width: 312px;
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
