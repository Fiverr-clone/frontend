import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Footer from "./components/footerComponent/footer";
import Login from "./components/loginComponent/login";
import Navbar from "./components/NavbarbefComponent/navbarbef";
import NavbarAfter from "./components/NavbaraftComponent/navbaraft";
import NavbarMenu from "./components/NavbarMenuComponent/navbarMenu";

function App() {
	return (
		<div className="App">
			<NavbarMenu />
			{/* <Navbar /> */}
			{/* <NavbarAfter /> */}
			{/* <Login /> */}
			{/* <Footer /> */}
		</div>
	);
}

export default App;
