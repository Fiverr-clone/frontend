import { FunctionComponent } from "react";
import "./login.css";

import LoginForm from "./loginForm";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
	return (
		<>
			<div id="login">
				<h4 id="login-h4">Sign In to Fiverr</h4>
				<LoginForm />
			</div>
		</>
	);
};
export default Login;
