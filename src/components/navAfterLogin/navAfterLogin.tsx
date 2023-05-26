import { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/FiverrLogoSVG.svg";
import { Link } from "react-router-dom";
// import Searchbar from "./Searchbar";
import Searchbar from "../navbarAfterComponent/Searchbar";
import "./navAfterLogin.css";

interface NavAfterLoginProps {}

const NavAfterLogin: FunctionComponent<NavAfterLoginProps> = () => {
	return (
		<div>
			<nav className="navbar-after">
				<ul>
					<li>
						<Link to="/">
							<img
								src={Logo}
								height={"30px"}
								width={"auto"}
								alt="Fiverr Logo"
								className="navbar-after-logo"
							/>
						</Link>
					</li>
					<li>
						<Searchbar />
					</li>
				</ul>
				<ul>
					<li>
						<Link to="/add-gig" className="add1">
							Add Gig
						</Link>
					</li>
					<li>
						<Link to="/">Orders</Link>
					</li>
					<li>
						<FontAwesomeIcon icon={faBell} />
					</li>
					<li>
						<FontAwesomeIcon icon={faUser} />
					</li>
				</ul>
			</nav>
			{/* <NavbarMenu CategoryId={handleSubCatId} /> */}
		</div>
	);
};

export default NavAfterLogin;
