import React, { useEffect, useState } from "react";
import * as S from "./YumItemDetailBox.styled";

const YumItemDetailBox = ({ shopData, getImage }) => {
	const [mainImgIndex, setMainImgIndex] = useState(0);
	useEffect(() => setMainImgIndex(0), [shopData]);
	return (
		<>
			{shopData && (
				<S.YumItemDetail>
					<S.MainImg
						src={getImage(shopData.image_urls, mainImgIndex)}
					></S.MainImg>
					<S.ItemInfo>
						<S.Top>
							<S.Name>{shopData.name}</S.Name>
							<S.Phone>전화번호&nbsp;&nbsp;&nbsp;{shopData.phone}</S.Phone>
							<S.OperatingTime>
								운영시간&nbsp;&nbsp;&nbsp;{shopData.open_time} ~{" "}
								{shopData.close_time}
							</S.OperatingTime>
							<S.Address>
								상세주소&nbsp;&nbsp;&nbsp;{shopData.address}
							</S.Address>
							<S.Delivery>
								배달여부&nbsp;&nbsp;&nbsp;
								{shopData.delivery ? <span>O</span> : <span>X</span>}
								{shopData.delivery && (
									<div>
										배달비용&nbsp;&nbsp;&nbsp;{shopData.delivery_price}원
									</div>
								)}
							</S.Delivery>
							<br />
							<S.Description>
								세부설명
								<br />
								{shopData.description}
							</S.Description>
						</S.Top>
						<S.Bottom>
							{shopData.image_urls &&
								shopData.image_urls.map((data, index) => (
									<S.SubImg
										key={index}
										src={getImage(shopData.image_urls, index)}
										onClick={() => setMainImgIndex(index)}
									></S.SubImg>
								))}
						</S.Bottom>
					</S.ItemInfo>
				</S.YumItemDetail>
			)}
		</>
	);
};

export default YumItemDetailBox;
