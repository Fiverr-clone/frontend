import { FunctionComponent, useState } from "react";
import "./join.css";
import google from "../../assets/socialicons/google.svg";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";


interface JoinFormProps {
	onError: (value: boolean) => void;
}

const JoinForm: FunctionComponent<JoinFormProps> = ({ onError }) => {
	const navigate = useNavigate();
	const [joindata, setjoinData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState(false);
	const handleChange = (e: any) => {
		setError(false);
		onError(false);
		const value = e.target.value;
		setjoinData({
			...joindata,
			[e.target.name]: value,
		});
	};


	
	const handleSubmit = (e: any) => {
		e.preventDefault();
		const userjoinData = {
			firstName: joindata.firstName,
			lastName: joindata.lastName,
			username: joindata.username,
			email: joindata.email,
			password: joindata.password,
		};
		axios
			.post("http://localhost:8000/api/join",userjoinData)
			.then((response) => {
				if (response.status === 201) {
					console.log(response.data);
					console.log("userId",response.data.userId);
					console.log("token",response.data.token);
					// Cookies.set("userId", response.data.userId);
					// Cookies.set("token", response.data.token);
					
			
				}
			})
			.catch((error) => {
				if (error.response && error.response.status && error.response.status === 500){
					setError(true);
					onError(true);
				} else {
					console.log("An error occurred:", error.message);
				}
			});
	};
		
	
	return (
		<>
			<div className="join-form-div">
				<form onSubmit={handleSubmit} className="join-form">
					{/* Social Join */}
					<div className="social-join">
						<button className="facebook-join join-social-btn">
							<span className="social-join-icon">
								<FontAwesomeIcon icon={faFacebook} />
							</span>
							<span className="join-span">Continue with Facebook</span>
						</button>
						<button className="google-join join-social-btn">
							<span className="social-join-icon">
								<img src={google} />
							</span>
							<span className="join-span">Continue with Google</span>
						</button>
						<button className="apple-join join-social-btn">
							<span className="social-join-icon">
								<FontAwesomeIcon icon={faApple} />
							</span>
							<span className="join-span">Continue with Apple</span>
						</button>
					</div>
					{/* Form Separator */}
					<div className="form-separator">
						<span className="form-separator-span">or</span>
					</div>
					{/* Input join */}
					<div className="input-join">
						<input
							type="text"
							name="firstName"
							value={joindata.firstName}
							onChange={handleChange}
							className="input-field"
							placeholder="First name"
						/>
						<input
							type="text"
							name="lastName"
							value={joindata.lastName}
							onChange={handleChange}
							className="input-field"
							placeholder="Last name"
						/>
						<input
							type="text"
							name="username"
							value={joindata.username}
							onChange={handleChange}
							className="input-field"
							placeholder="Username"
						/>
						<input
							type="text"
							name="email"
							value={joindata.email}
							onChange={handleChange}
							className="input-field"
							placeholder="Email "
						/>
						<input
							type="password"
							name="password"
							value={joindata.password}
							onChange={handleChange}
							className="input-field"
							placeholder="Password"
						/>
						<button type="submit" className="join-btn">
							Join
						</button>
					</div>
				</form>
			</div>
			<div id="Signin">
				<span id="member">Already a member?</span>
				<Link to="/signin" id="signin-now">
					<span>Sign In</span>
				</Link>
			</div>
		</>
	);
};
export default JoinForm;
