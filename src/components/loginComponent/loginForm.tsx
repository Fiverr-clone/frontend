import { FunctionComponent, useState } from "react";
import "./login.css";
import google from "../../assets/socialicons/google.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

interface LoginFormProps {}

const LoginForm: FunctionComponent<LoginFormProps> = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const handleMouseDownPassword = (e: any) => {
		e.preventDefault();
	};

	const handleChange = (e: any) => {
		const value = e.target.value;
		setData({
			...data,
			[e.target.name]: value,
		});
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		const userData = {
			email: data.email,
			password: data.password,
		};
		// add later axios code
	};
	return (
		<>
			<div className="signin-form-div">
				<form onSubmit={handleSubmit} className="signin-form">
					{/* Social Signin */}
					<div className="social-signing">
						<button className="facebook-signin signin-social-btn">
							<span className="social-signin-icon">
								<FontAwesomeIcon icon={faFacebook} />
							</span>
							<span className="signin-span">Continue with Facebook</span>
						</button>
						<button className="google-signin signin-social-btn">
							<span className="social-signin-icon">
								<img src={google} />
							</span>
							<span className="signin-span">Continue with Google</span>
						</button>
						<button className="apple-signin signin-social-btn">
							<span className="social-signin-icon">
								<FontAwesomeIcon icon={faApple} />
							</span>
							<span className="signin-span">Continue with Apple</span>
						</button>
					</div>
					{/* Form Separator */}
					<div className="form-separator">
						<span className="form-separator-span">or</span>
					</div>
					{/* Input Signin */}
					<div className="input-signin">
						<input
							type="text"
							name="email"
							value={data.email}
							onChange={handleChange}
							className="input-field"
							placeholder="Email / Username"
						/>
						<input
							type="password"
							name="password"
							value={data.password}
							onChange={handleChange}
							className="input-field"
							placeholder="Password"
						/>
						<button type="submit" className="signin-btn">
							Continue
						</button>
						<div id="remember-forgot">
							<div id="remember">
								<input type="checkbox" name="remember" id="remember-checkbox" />
								<label id="remember-span">Remember Me</label>
							</div>
							<div id="forgot">
								<Link to="/" id="forgot-link">
									<span>Forgot Password?</span>
								</Link>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div id="join">
				<span id="not-member">Not a member yet?</span>
				<Link to="/" id="join-now">
					<span>Join now</span>
				</Link>
			</div>
		</>
	);
};
export default LoginForm;
