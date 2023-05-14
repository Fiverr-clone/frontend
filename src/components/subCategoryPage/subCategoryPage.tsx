import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import NavbarAfter from "../navbarAfterComponent/navbarAfter";
import NavbarMenu from "../navbarMenuComponent/navbarMenu";

interface SubCatProps {}

const SubCat: FunctionComponent<SubCatProps> = () => {
	return (
		<>
			<NavbarAfter />
			<NavbarMenu />
			<h1>programming-development</h1>
		</>
	);
};

export default SubCat;
