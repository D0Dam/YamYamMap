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

	return (
		<>
			{shopData && filterCategory && (
				<div>
					<div>{shopData.name}</div>
					<div>{shopData.phone}</div>
					<div>
						{shopData.open_time} ~ {shopData.close_time}
					</div>
					{shopData.delivery ? <div>배달가능</div> : <div>배달안됨</div>}
					<br />
				</div>
			)}
		</>
	);
};

export default YumItemWrapper;
