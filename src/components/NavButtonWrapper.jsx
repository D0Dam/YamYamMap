import React from "react";
import * as S from "./NavButtonWrapper.styled";
const NavButtonWrapper = ({ categories, setCategory }) => {
	return (
		<>
			{categories.map((c, index) => (
				<S.NavButton key={index} onClick={() => setCategory(index)}>
					{c}
				</S.NavButton>
			))}
		</>
	);
};

export default NavButtonWrapper;
