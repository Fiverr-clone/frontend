import { FunctionComponent, useEffect, useState } from "react";
import NavbarAfter from "../navbarAfterComponent/navbarAfter";
import NavbarMenu from "../navbarMenuComponent/navbarMenu";

interface CatProps {}

const Cat: FunctionComponent<CatProps> = () => {
	const [catId, setCatId] = useState<string>(
		localStorage.getItem("catId") || ""
	);
	const handleCatId = (value: string) => {
		setCatId(value);
	};
	useEffect(() => {
		localStorage.setItem("subCatId", catId);
	}, [catId]);

	return (
		<>
			<NavbarAfter />
			<NavbarMenu CategoryId={handleCatId} />
			<h1>works !!</h1>
			<p>id : {catId}</p>
		</>
	);
};
export default Cat;
