import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Footer from "./components/footerComponent/footer";
import Login from "./components/loginComponent/login";
import NavbarBefore from "./components/navbarBeforeComponent/navbarBefore";
import NavbarAfter from "./components/navbarAfterComponent/navbarAfter";
import NavbarMenu from "./components/navbarMenuComponent/navbarMenu";

function App() {
	return (
		<div className="App">
			{/* <NavbarBefore /> */}
			<NavbarAfter />
			<NavbarMenu />
			{/* <Login /> */}
			<Footer />
		</div>
	);
}

export default App;
