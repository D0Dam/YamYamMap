import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>여기는 메인화면 입니다!</h1>
			<div>여기는 프로젝트 설명이 쓰여져 있습니다</div>
			<button>
				<Link to="YumYumMap">Get Start!</Link>
			</button>
		</div>
	);
};

export default Home;
