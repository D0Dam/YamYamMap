import React, { useEffect, useState } from "react";
import styled from "styled-components";
const YumItemContainer = styled.div`
	display: flex;
	align-items: center;
	width: 296px;
	height: 80px;
	background-color: white;
	opacity: 0.8;
	margin: 12px 0px 12px 8px;
	border: none;
	border-radius: 12px;
`;
const YumImg = styled.div`
	width: 68px;
	height: 68px;
	opacity: 0.5;
	background-color: gray;
	border-radius: 12px;
	margin-left: 6px;
`;
const YumDescription = styled.div`
	margin: 6px;
`;

const YumItemWrapper = ({ shopData, category, categories, handleMarker }) => {
	useEffect(() => {
		setFilterCategory(() => {
			if (category === 0) return true;
			else if ("S00" + category === shopData.category) return true;
			else return false;
		});
	}, [category]);
	const [filterCategory, setFilterCategory] = useState(true);

	return (
		<>
			{shopData && filterCategory && (
				<YumItemContainer
					onMouseOver={() => handleMarker(shopData.address)}
					onMouseOut={() => handleMarker(null)}
				>
					<YumImg></YumImg>
					<YumDescription>
						<div>{shopData.name}</div>
						<div>{shopData.phone}</div>
						<span>
							{shopData.open_time} ~ {shopData.close_time}
						</span>
						{shopData.delivery ? <span>배달O</span> : <span>배달X</span>}
						<div>분류 : {categories[shopData.category.substr(3, 3)]}</div>
					</YumDescription>
				</YumItemContainer>
			)}
		</>
	);
};

export default YumItemWrapper;
