import { FunctionComponent, useEffect, useState } from "react";
import NavbarAfter from "../navbarAfterComponent/navbarAfter";
import NavbarMenu from "../navbarMenuComponent/navbarMenu";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_CAT_SERVICES = gql`
	query getCategoryServices($id: ID!) {
		category(id: $id) {
			id
			categoryName
			services {
				id
				title
				image
				description
				price
				deliveryTime
			}
		}
	}
`;
interface CatProps {}

const Cat: FunctionComponent<CatProps> = () => {
	const [catId, setCatId] = useState<string>("");
	const handleCatId = (value: string) => {
		setCatId(value);
		localStorage.getItem("catId");
	};

	useEffect(() => {
		localStorage.setItem("catId", catId);
	}, [catId]);

	const { loading, error, data } = useQuery(GET_CAT_SERVICES, {
		variables: { id: catId },
	});

	return (
		<>
			<NavbarAfter />
			<NavbarMenu CategoryId={handleCatId} />
			<h1>works !!</h1>
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong ! = value : {catId} </p>}
			{catId === "" && <p>Please select a subcategory.</p>}
			{!loading && !error && (
				<table>
					<thead>
						<tr>
							<th>Service</th>
							<th>Price</th>
							<th>Delivery Time</th>
						</tr>
					</thead>
					<tbody>
						{data.category.services.map((service: any) => (
							<tr key={service.id}>
								<td>{service.title}</td>
								<td>{service.price}</td>
								<td>{service.deliveryTime}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
			<p>id : {catId}</p>
		</>
	);
};
export default Cat;
