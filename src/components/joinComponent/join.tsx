import { FunctionComponent } from "react";
import "./join.css";

import JoinForm from "./joinForm";

interface JoinProps {}

const Join: FunctionComponent<JoinProps> = () => {
	return (
		<>
			<div id="join">
				<h4 id="join-h4">Join Us</h4>
				<JoinForm />
			</div>
		</>
	);
};
export default Join;
