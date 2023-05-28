import React, { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBookmark,
	faEnvelope,
	faPenToSquare,
	faRightFromBracket,
	faTriangleCircleSquare,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/FiverrLogoSVG.svg";
import { Link, useNavigate } from "react-router-dom";
import Searchbar from "../navbarAfterComponent/Searchbar";
// import Searchbar from "./Searchbar";
import "./navAfterLogin.css";
import NavbarMenu from "../navbarMenuComponent/navbarMenu";
import bellImage from "../../assets/bell.png";
import userImage from "../../assets/user.png";
import emailImage from "../../assets/email.png";

import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "../../features/actions/authSlice";

interface NavAfterLoginProps {}

const NavAfterLogin: FunctionComponent<NavAfterLoginProps> = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userid = Cookies.get("userId");
	const [userClicked, setUserClicked] = useState(false);
	const HandleUserClick = () => {
		setUserClicked(!userClicked);
	};
	const HandleLogout = () => {
		Cookies.set("userId", "");
		Cookies.set("token", "");
		dispatch(logout());
		navigate("/");
	};
	const HandleUserGigs = () => {
		navigate(`/mygigs/${userid}`);
	};
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
						<Link to="/mypurchases">My Purchases</Link>
					</li>
					<li>
						<Link to="/myorders">My Orders</Link>
					</li>
					<li>
						<img src={bellImage} alt="Bell Icon" className="small-icon" />
					</li>
					<li>
						<img src={emailImage} alt="Email Icon" className="small-icon" />
					</li>
					<li>
						<div className="user-icon-container" onClick={HandleUserClick}>
							<img src={userImage} alt="User Icon" className="user-nav-icon" />
							<ul>
								<FontAwesomeIcon
									icon={faTriangleCircleSquare}
									className="triangle-icon"
									style={{
										display: userClicked ? "block" : "none",
									}}
								/>
								<div
									className="dropdown"
									style={{
										display: userClicked ? "block" : "none",
									}}
								>
									<li className="dropdown-li">
										<Link
											to="/profile"
											style={{ fontSize: "15px", fontWeight: "600" }}
										>
											<FontAwesomeIcon
												icon={faPenToSquare}
												style={{
													paddingRight: "10px",
												}}
												className="icons"
											/>
											Profile
										</Link>
									</li>
									<li className="dropdown-li" onClick={HandleUserGigs}>
										<Link
											to="#"
											style={{ fontSize: "15px", fontWeight: "600" }}
										>
											<FontAwesomeIcon
												icon={faBookmark}
												style={{
													paddingRight: "14px",
												}}
												className="icons"
											/>
											My Gigs
										</Link>
									</li>
									<li className="dropdown-li" onClick={HandleLogout}>
										<Link
											to="#"
											style={{ fontSize: "15px", fontWeight: "600" }}
										>
											<FontAwesomeIcon
												icon={faRightFromBracket}
												style={{
													paddingRight: "12px",
												}}
												className="icons"
											/>
											Logout
										</Link>
									</li>
								</div>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
			<NavbarMenu />
		</div>
	);
};

export default NavAfterLogin;
