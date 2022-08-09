import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const [titleIndex, setTitleIndex] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			if (titleIndex < 5) {
				setTitleIndex(titleIndex + 1);
			} else {
				setTitleIndex(0);
			}
		}, "3000");
	}, [titleIndex]);
	const changeTitle = (titleIndex) => {
		if (titleIndex === 0) {
			return <div>떡볶이가 끌린다!</div>;
		} else if (titleIndex === 1) {
			return <div>족발이 끌린다!</div>;
		} else if (titleIndex === 2) {
			return <div>짜장면이 끌린다!</div>;
		} else if (titleIndex === 3) {
			return <div>치킨이 끌린다!</div>;
		} else if (titleIndex === 4) {
			return <div>피자가 끌린다!</div>;
		} else {
			return <div>고기가 끌린다!</div>;
		}
	};
	return (
		<div>
			<h1>당신은 지금...</h1>
			{changeTitle(titleIndex)}
			<button>
				<Link to="YumYumMap">Get Start!</Link>
			</button>
		</div>
	);
};

export default Home;
