import { FunctionComponent } from "react";
import "./footer.css";

import FooterBottom from "./footerBottom";
import FooterCollapse from "./footerCollapse";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<>
			<footer id="footer">
				<FooterCollapse />
				<FooterBottom />
			</footer>
		</>
	);
};
export default Footer;
