import React, { FunctionComponent, useEffect, useState } from "react";

import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import NavbarAfter from "../navbarAfterComponent/navbarAfter";
import NavAfterLogin from "../navAfterLogin/navAfterLogin";
import NavbarMenu from "../navbarMenuComponent/navbarMenu";

interface NavbarCombinedProps {}

const NavbarCombined: FunctionComponent<NavbarCombinedProps> = () => {
	const tokenCookie = Cookies.get("token");
	const tokenRedux = useSelector((state: any) => state.auth.token);
	const [isAuth, setIsAuth] = useState(false);
	useEffect(() => {
		if (tokenCookie || tokenRedux) {
			setIsAuth(true);
		}
	}, []);
	return (
		<>
			{isAuth ? <NavAfterLogin /> : <NavbarAfter />}
			<NavbarMenu />
		</>
	);
};

export default NavbarCombined;
