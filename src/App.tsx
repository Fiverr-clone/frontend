import React from "react";
import {  Route ,Routes, useNavigate} from "react-router-dom";

import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Footer from "./components/footerComponent/footer";
import Login from "./components/loginComponent/login";
import NavbarBefore from "./components/navbarBeforeComponent/navbarBefore";
import NavbarAfter from "./components/navbarAfterComponent/navbarAfter";
import NavbarMenu from "./components/NavbarMenuComponent/navbarMenu";
import Join from "./components/joinComponent/joinForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/join" element={<Join />} />
		<Route path="/signin" element={<Login />} />
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
