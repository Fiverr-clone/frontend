import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		// Delete the 'userId' and 'token' cookies
		document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		navigate("/signin");
	};
	return (
		<>
			<div>
				<h4 id="Welcome-h4">hello</h4>
				<button onClick={handleLogout}>Logout</button>
			</div>
		</>
	);
};

export default Welcome;
