import { useState, useEffect } from "react";
import NavbarBefore from "../../components/navbarBeforeComponent/navbarBefore";
import NavbarAfter from "../../components/navbarAfterComponent/navbarAfter";

import Featured from "../../components/featured/Featured";
import Trusted from "../../components/trusted/Trusted";
import Footer from "../../components/footerComponent/footer";

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
      {scrolled ? <NavbarAfter /> : <NavbarBefore />}
      <div className="navbar-menu-container">
        <Featured />
        <Trusted />
        <Footer/>
        {/* Contenu de votre page */}
      </div>
    </div>
  );
};

export default HomePage;
