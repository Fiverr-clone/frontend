import { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/FiverrLogoSVG.svg";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import "./navbarAfter.css";
import NavbarMenu from "../navbarMenuComponent/navbarMenu";

interface NavbarAfterProps {}

const NavbarAfter: FunctionComponent<NavbarAfterProps> = () => {
	const [subCatId, setSubCatId] = useState<String>("");

	const handleSubCatId = (value: String) => {
		setSubCatId(value);
		// console.log(value);
	};

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
						<Link to="/" className="Business">
							FIverr Business
						</Link>
					</li>
					<li>
						<Link to="/">Explore</Link>
					</li>

					<li>
						<Link to="/">Become a Seller</Link>
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
