import { FunctionComponent } from "react";
import LoadingIcons from "react-loading-icons";
import "./loading.css";

interface LoadingProps {}

const Loading: FunctionComponent<LoadingProps> = () => {
	return (
		<>
			<div className="loading-icon">
				<LoadingIcons.TailSpin stroke="#2DB67C" />
			</div>
		</>
	);
};

export default Loading;
