import { FunctionComponent, useState } from "react";
import "./AddService.css";

import AddServiceForm from "./AddServiceForm";
import NavbarMenu from "../navbarMenuComponent/navbarMenu";
import NavbarAfter from "../navbarAfterComponent/navbarAfter";
import NavbarBefore from "../navbarBeforeComponent/navbarBefore";

import AddServiceNotes from "./AddServiceNotes";
import Footer from "../footerComponent/footer";
interface AddServiceProps {}

const AddService: FunctionComponent<AddServiceProps> = () => {
	const [subCatId, setSubCatId] = useState<String>("");

	const handleSubCatId = (value: String) => {
		setSubCatId(value);
		// console.log(value);
	};
	return (
		<>
			<NavbarBefore />
			<NavbarAfter />
			<NavbarMenu CategoryId={handleSubCatId} />
			<div
				id="AddService"
				style={
					{
						// height: error ? "685px " : "670px ",
					}
				}
			>
				<h4 id="AddService-h4">Add New Service </h4>
				<AddServiceForm />
				<AddServiceNotes />
			</div>
			<Footer />
		</>
	);
};
export default AddService;
