import { FunctionComponent } from "react";
import React from "react";
import Logo from "../../assets/FiverrLogoWhite.svg";
import { Link } from "react-router-dom";
import "./navbarbef.css";

interface NavbarBeforeProps {}

const NavbarBefore: FunctionComponent<NavbarBeforeProps> = () => {
	return (
		<nav>
			<ul>
				<li>
					<img
						src={Logo}
						height={"30px"}
						width={"auto"}
						alt="Fiverr Logo"
						style={{
							position: "absolute",
							top: "0",
							left: "0",
							marginLeft: "20px",
							padding: "0 20px",
							marginTop: "20px",
						}}
					/>
				</li>
				<li>
					<Link to="/">FIverr Business</Link>
				</li>
				<li>
					<Link to="/">Explore</Link>
				</li>

				<li>
					<Link to="/">Become a Seller</Link>
				</li>
				<li>
					<Link to="/">Sign In</Link>
				</li>
				<li>
					<Link to="/" className="join-link">
						Join
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavbarBefore;
