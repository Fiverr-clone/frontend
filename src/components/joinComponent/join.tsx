import { FunctionComponent, useState } from "react";
import "./join.css";

import JoinForm from "./joinForm";

interface JoinProps {}

const Join: FunctionComponent<JoinProps> = () => {
	const [error, setError] = useState(false);

	const handleError = (value: boolean) => {
		setError(value);
	};
	return (
		<>
			<div id="join"
			style={{
				height: error ? "620px " : "575px ",
			}}>
			
				<h4 id="join-h4">Join Us</h4>
				<JoinForm onError={handleError} />
			</div>
		</>
	);
};
export default Join;
