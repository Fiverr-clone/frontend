import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footerComponent/footer";
import Login from "./components/loginComponent/login";
import NavbarBefore from "./components/navbarBeforeComponent/navbarBefore";
import NavbarAfter from "./components/navbarAfterComponent/navbarAfter";
//import NavbarMenu from "./components/navbarMenuComponent/navbarMenu";
import Join from "./components/joinComponent/join";
import AddService from "./components/AddServiceComponent/AddService";
import Welcome from "./components/loginComponent/welcome";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/join" element={<Join />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/add-service" element={<AddService />} />
				<Route path="/welcome" element={<Welcome />} />
			</Routes>

			{/* <NavbarBefore /> */}
			{/*<NavbarAfter />
      <NavbarMenu />
      <Login />

         */}
			{/*<Footer />*/}
		</div>
	);
}

export default App;
