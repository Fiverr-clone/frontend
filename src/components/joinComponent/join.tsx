import { FunctionComponent } from "react";
import "./join.css";

import JoinForm from "./joinForm";

interface joinProps {}

const join: FunctionComponent<joinProps> = () => {
	return (
		<>
			<div id="join">
				<h4 id="join-h4">Join Fiverr</h4>
				<JoinForm />
			</div>
		</>
	);
};
export default join;
