import { FunctionComponent, useState } from "react";
import "./addService.css";

import AddServiceForm from "./addServiceForm";
import NavbarMenu from "../../components/navbarMenuComponent/navbarMenu";
import NavbarAfter from "../../components/navbarAfterComponent/navbarAfter";
import NavbarBefore from "../../components/navbarBeforeComponent/navbarBefore";

import AddServiceNotes from "./addServiceNotes";
import Footer from "../../components/footerComponent/footer";
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
				<AddServiceForm />
				<AddServiceNotes />
			</div>
			<Footer />
		</>
	);
};
export default AddService;
