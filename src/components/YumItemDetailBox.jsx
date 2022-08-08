import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const YumItemDetail = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	z-index: 3;
	margin: 0px;
	left: 324px;
	top: 55%;
	right: 0px;
	height: 43.8vh;
	opacity: 0.9;
	margin: 0px 10px 0px 0px;
	border-radius: 12px;
	background: white;
	box-shadow: 0px 0px 3px #cfd2cf;
	:hover {
		opacity: 0.99;
		box-shadow: 0px 0px 6px #cfd2cf;
	}
	${(props) =>
		props.shopData &&
		css`
			transition: all 0.1s ease;
		`}
`;

const MainImg = styled.img`
	width: 320px;
	height: 320px;
	margin-left: 12px;
`;
const Top = styled.div``;
const Bottom = styled.div``;
const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 320px;
	width: 100%;
	margin: 0px 12px 0px 12px;
`;
const Name = styled.div`
	font-weight: bold;
	font-size: 32px;
	margin-bottom: 8px;
`;
const Phone = styled.div``;
const OperatingTime = styled.div``;
const Address = styled.div``;
const Delivery = styled.div``;
const Description = styled.div``;
const SubImg = styled.img`
	height: 32px;
	width: 32px;
	margin: 6px 6px 6px 0px;
	box-shadow: 0px 0px 3px #cfd2cf;
	transition: all 0.1s linear;
	:hover {
		transform: scale(1.1);
		box-shadow: 0px 0px 6px #cfd2cf;
	}
`;
const YumItemDetailBox = ({ shopData, getImage }) => {
	const [mainImgIndex, setMainImgIndex] = useState(0);
	useEffect(() => setMainImgIndex(0), [shopData]);
	return (
		<>
			{shopData && (
				<YumItemDetail>
					<MainImg src={getImage(shopData.image_urls, mainImgIndex)}></MainImg>
					<ItemInfo>
						<Top>
							<Name>{shopData.name}</Name>
							<Phone>전화번호&nbsp;&nbsp;&nbsp;{shopData.phone}</Phone>
							<OperatingTime>
								운영시간&nbsp;&nbsp;&nbsp;{shopData.open_time} ~{" "}
								{shopData.close_time}
							</OperatingTime>
							<Address>상세주소&nbsp;&nbsp;&nbsp;{shopData.address}</Address>
							<Delivery>
								배달여부&nbsp;&nbsp;&nbsp;
								{shopData.delivery ? <span>O</span> : <span>X</span>}
								{shopData.delivery && (
									<div>
										배달비용&nbsp;&nbsp;&nbsp;{shopData.delivery_price}원
									</div>
								)}
							</Delivery>
							<br />
							<Description>
								세부설명
								<br />
								{shopData.description}
							</Description>
						</Top>
						<Bottom>
							{shopData.image_urls &&
								shopData.image_urls.map((data, index) => (
									<SubImg
										key={index}
										src={getImage(shopData.image_urls, index)}
										onClick={() => setMainImgIndex(index)}
									></SubImg>
								))}
						</Bottom>
					</ItemInfo>
				</YumItemDetail>
			)}
		</>
	);
};

export default YumItemDetailBox;
