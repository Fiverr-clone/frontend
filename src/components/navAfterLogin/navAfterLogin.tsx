import { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/FiverrLogoSVG.svg";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import "./navAfterLogin.css";
import NavbarMenu from "../navbarMenuComponent/navbarMenu";

interface NavAfterLoginProps {}

const NavAfterLogin: FunctionComponent<NavAfterLoginProps> = () => {
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
            <Link to="/add-service" className="add1">
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
