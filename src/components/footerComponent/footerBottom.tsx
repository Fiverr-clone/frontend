import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../../assets/FiverrLogoSVG.svg";
import twitter from "../../assets/socialicons/twitter.svg";
import facebook from "../../assets/socialicons/facebook.svg";
import linkedin from "../../assets/socialicons/linkedin.svg";
import pinterest from "../../assets/socialicons/pinterest.svg";
import instagram from "../../assets/socialicons/instagram.svg";

interface FooterBottomProps {}

const FooterBottom: FunctionComponent<FooterBottomProps> = () => {
	return (
		<>
			<div id="footer-bottom">
				<div id="footer-bottom-left">
					<ul className="ul-bottomleft">
						<li className="li-bottomleft">
							<img
								src={Logo}
								// height={"18px"}
								// width={"auto"}
								alt="Fiverr Logo"
								className="footer-logo"
							/>
						</li>
						<li className="li-bottomleft">
							<span className="copyright-span">
								© Fiverr International Ltd. 2023
							</span>
						</li>
					</ul>
				</div>
				<div id="footer-bottom-right">
					<ul className="ul-bottomright">
						<li className="li-bottomright">
							<Link to="/" className="social-link">
								<img src={twitter} className="social-img" />
							</Link>
						</li>
						<li className="li-bottomright">
							<Link to="/" className="social-link">
								<img src={facebook} className="social-img" />
							</Link>
						</li>
						<li className="li-bottomright">
							<Link to="/" className="social-link">
								<img src={linkedin} className="social-img" />
							</Link>
						</li>
						<li className="li-bottomright">
							<Link to="/" className="social-link">
								<img src={pinterest} className="social-img" />
							</Link>
						</li>
						<li className="li-bottomright">
							<Link to="/" className="social-link">
								<img src={instagram} className="social-img" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
export default FooterBottom;
