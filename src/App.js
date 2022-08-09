import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import YumYumMap from "./Pages/YumYumMap";
import "./styles/fonts/Pretendard.css";
import "./App.css";
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="YumYumMap" element={<YumYumMap />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
