import { useState, useEffect } from "react";
import NavbarBefore from "../../components/navbarBeforeComponent/navbarBefore";
import NavbarAfter from "../../components/navbarAfterComponent/navbarAfter";

import Featured from "../../components/featured/Featured";
import Trusted from "../../components/trusted/Trusted";
import Footer from "../../components/footerComponent/footer";
import NavbarMenu from "../../components/navbarMenuComponent/navbarMenu";

const HomePage = () => {
	const [subCatId, setSubCatId] = useState<String>("");

	const handleSubCatId = (value: String) => {
		setSubCatId(value);
		// console.log(value);
	};
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			{scrolled ? (
				<div id="home-navbar" style={{ position: "fixed" }}>
					<NavbarAfter />
					<NavbarMenu CategoryId={handleSubCatId} />
				</div>
			) : (
				<NavbarBefore />
			)}
			<div className="navbar-menu-container">
				<Featured />
				<Trusted />
				<Footer />
				{/* Contenu de votre page */}
			</div>
		</div>
	);
};

export default HomePage;
