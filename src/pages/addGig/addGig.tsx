import { FunctionComponent } from "react";
import "./addGig.css";

import AddGigForm from "./addGigForm";
import NavbarMenu from "../../components/navbarMenuComponent/navbarMenu";
import NavbarAfter from "../../components/navbarAfterComponent/navbarAfter";

import AddGigNotes from "./addGigNotes";
import Footer from "../../components/footerComponent/footer";
interface AddGigProps {}

const AddGig: FunctionComponent<AddGigProps> = () => {
	return (
		<>
			<NavbarAfter />
			<NavbarMenu />
			<div id="AddService">
				<h4 id="AddService-h4">Add New Gig </h4>
				<AddGigForm />
				<AddGigNotes />
			</div>
			<Footer />
		</>
	);
};
export default AddGig;
