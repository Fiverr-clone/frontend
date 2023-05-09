import { FunctionComponent, useState } from "react";
import "./AddService.css";

import AddServiceForm from "./AddServiceForm";
import NavbarMenu from "../navbarMenuComponent/navbarMenu";
import NavbarAfter from "../navbarAfterComponent/navbarAfter";
import NavbarBefore from "../navbarBeforeComponent/navbarBefore";

interface AddServiceProps {}

const AddService: FunctionComponent<AddServiceProps> = () => {
	const [error, setError] = useState(false);

	const handleError = (value: boolean) => {
		setError(value);
	};
	return (
		<>
			<NavbarBefore />
			<NavbarAfter />
			<NavbarMenu />
			<div
				id="AddService"
				style={
					{
						// height: error ? "685px " : "670px ",
					}
				}
			>
				<h4 id="AddService-h4">Add New Service </h4>
				<AddServiceForm onError={handleError} />
			</div>
		</>
	);
};
export default AddService;
