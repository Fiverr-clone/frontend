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
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import "./navAfterLogin.css";
import NavbarMenu from "../navbarMenuComponent/navbarMenu";
import bellImage from "../../assets/bell.png";
import userImage from "../../assets/user.png";
import emailImage from "../../assets/email.png";

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
								<FontAwesomeIcon
									icon={faTriangleCircleSquare}
									className="triangle-icon"
								/>
								<div className="dropdown">
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
									<li className="dropdown-li">
										<Link
											to="/mygigs"
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
									<li className="dropdown-li">
										<Link
											to="/logout"
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
		</div>
	);
};

export default NavAfterLogin;
