import React, { useEffect, useState } from "react";

const YumItemWrapper = ({ shopData, category }) => {
	useEffect(() => {
		setFilterCategory(() => {
			if (category === 0) return true;
			else if ("S00" + category === shopData.category) return true;
			else return false;
		});
	}, [category]);

	const [filterCategory, setFilterCategory] = useState(true);

	return <div>{shopData && filterCategory && <div>{shopData.name}</div>}</div>;
};

export default YumItemWrapper;
