import React from "react";
import styled from "styled-components";

const NavButton = styled.button`
	color: blue;
`;

const NavButtonWrapper = ({ categories, setCategory }) => {
	return (
		<div>
			{categories.map((c, index) => (
				<NavButton key={index} onClick={() => setCategory(index)}>
					{c}
				</NavButton>
			))}
		</div>
	);
};

export default NavButtonWrapper;
