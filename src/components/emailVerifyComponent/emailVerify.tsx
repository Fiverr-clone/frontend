import { FunctionComponent, useState, Fragment, useEffect } from "react";
import "./emailVerify.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

interface EmailVerifyProps {}

const EmailVerify: FunctionComponent<EmailVerifyProps> = () => {
	const [validUrl, setValidUrl] = useState(false);

	const params = useParams();
	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:8000/api/${params.id}/verify/${params.emailToken}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [params]);

	return (
		<Fragment>
			{validUrl ? (
				<div className="emailVerify">
					<h1>Thank you for verifying your email</h1>
					<p>You can now login to your account</p>
					<Link to="/signin">
						<button>Login here</button>
					</Link>
				</div>
			) : (
				<div className="emailVerify">
					<h1>Invalid URL</h1>
					<p>Please check your email for the correct link</p>
				</div>
			)}
		</Fragment>
	);
};
export default EmailVerify;
