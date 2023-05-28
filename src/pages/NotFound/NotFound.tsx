import { FunctionComponent } from "react";
import "./NotFound.css";
import Error404 from "../../assets/error404.jpg";
import { Link } from "react-router-dom";

interface NotFoundProps {}

const NotFound: FunctionComponent<NotFoundProps> = () => {
	return (
		<>
			<div className="notfound">
				<img src={Error404} className="error404-img" />
				<h1 className="notfound-header-error">Page not found</h1>
				<button className="notfound-home-btn">
					<Link to="/" className="notfound-home-link">
						home page
					</Link>
				</button>
			</div>
		</>
	);
};

export default NotFound;
