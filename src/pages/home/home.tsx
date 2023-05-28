import { useState, useEffect } from "react";
import NavbarBefore from "../../components/navbarBeforeComponent/navbarBefore";
import NavbarAfter from "../../components/navbarAfterComponent/navbarAfter";

import Featured from "../../components/featured/Featured";
import Trusted from "../../components/trusted/Trusted";
import Footer from "../../components/footerComponent/footer";
import NavbarMenu from "../../components/navbarMenuComponent/navbarMenu";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";
import NavbarCombined from "../../components/navbarCombined/NavbarCombined";

const HomePage = () => {
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
				<div
					id="home-navbar"
					style={{ position: "fixed", width: "100%", zIndex: "10" }}
				>
					{/* <NavbarAfter />
					<NavbarMenu /> */}
					<NavbarCombined />
				</div>
			) : (
				<NavbarBefore />
			)}

			<div className="navbar-menu-container">
				<Featured />
				<Trusted />
				<Slide slidesToShow={5} arrowsScroll={5}>
					{cards.map((card) => (
						<CatCard key={card.id} card={card} />
					))}
				</Slide>

				<Footer />
			</div>
		</div>
	);
};

export default HomePage;
