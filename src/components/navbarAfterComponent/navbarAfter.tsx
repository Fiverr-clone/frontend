import { FunctionComponent, useState } from "react";
import Logo from "../../assets/FiverrLogoSVG.svg";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import "./navbarAfter.css";

interface NavbarAfterProps {}

const NavbarAfter: FunctionComponent<NavbarAfterProps> = () => {
	return (
		<div>
			<nav className="navbar-after">
				<ul>
					<li>
						<Link to="/">
							<img
								src={Logo}
								// height={"30px"}
								// width={"auto"}
								alt="Fiverr Logo"
								className="navbar-after-logo"
								style={{ cursor: "pointer" }}
							/>
						</Link>
					</li>
					<li>
						<Searchbar />
					</li>
				</ul>
				<ul>
					<li>
						<Link to="/" className="Business">
							FIverr Business
						</Link>
					</li>
					<li>
						<Link to="/">Explore</Link>
					</li>

					<li>
						<Link to="/">Contact Us</Link>
					</li>
					<li>
						<Link to="/signin">Sign In</Link>
					</li>
					<li>
						<Link to="/join" className="join-link">
							Join
						</Link>
					</li>
				</ul>
			</nav>
			{/* <NavbarMenu CategoryId={handleSubCatId} /> */}
		</div>
	);
};

export default NavbarAfter;
