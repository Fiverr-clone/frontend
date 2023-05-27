import React, { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/FiverrLogoSVG.svg";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import "./navAfterLogin.css";
import NavbarMenu from "../navbarMenuComponent/navbarMenu";
import bellImage from "../../assets/bell.png";
import userImage from "../../assets/user.png";
import emailImage from "../../assets/email.png";

interface NavAfterLoginProps {}

const NavAfterLogin: FunctionComponent<NavAfterLoginProps> = () => {
	const [subCatId, setSubCatId] = useState<string>("");
	const [showDropdown, setShowDropdown] = useState<boolean>(false);

	const handleSubCatId = (value: string) => {
		setSubCatId(value);
	};

	// const toggleDropdown = () => {
	// 	setShowDropdown(!showDropdown);
	// };

	return (
		<div>
			<nav className="navbar-after">
				<ul>
					<li>
						<img
							src={Logo}
							height={"30px"}
							width={"auto"}
							alt="Fiverr Logo"
							className="navbar-after-logo"
						/>
					</li>
					<li>
						<Searchbar />
					</li>
				</ul>
				<ul>
					<li>
						<img src={bellImage} alt="Bell Icon" className="small-icon" />
					</li>
					<li>
						<img src={emailImage} alt="Email Icon" className="small-icon" />
					</li>
					<li>
						<Link to="/add-service" className="add1">
							Add Gig
						</Link>
					</li>
					<li>
						<Link to="/">Orders</Link>
					</li>
					<li>
						<div className="user-icon-container">
							<img src={userImage} alt="User Icon" className="user-nav-icon" />
							<ul>
								<div className="dropdown">
									<li className="dropdown-li">
										<Link to="/profile">Profile</Link>
									</li>
									<li className="dropdown-li">
										<Link to="/mygigs">My Gigs</Link>
									</li>
									<li className="dropdown-li">
										<Link to="/logout">Logout</Link>
									</li>
								</div>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
			{/* <NavbarMenu CategoryId={handleSubCatId} /> */}
		</div>
	);
};

export default NavAfterLogin;
