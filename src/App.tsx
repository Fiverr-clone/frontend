import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Login from "./components/loginComponent/login";
import Join from "./components/joinComponent/join";
import AddService from "./components/AddServiceComponent/AddService";
import Welcome from "./components/loginComponent/welcome";
import EmailVerify from "./components/emailVerifyComponent/emailVerify";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/join" element={<Join />} />
				<Route path="/signin" element={<Login />} />
				<Route path="/add-service" element={<AddService />} />
				<Route path="/welcome" element={<Welcome />} />
				<Route path="/:id/verify/:emailToken" element={<EmailVerify />} />
			</Routes>
		</div>
	);
}

export default App;
