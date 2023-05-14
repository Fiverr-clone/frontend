import { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import NavbarAfter from "../navbarAfterComponent/navbarAfter";
import NavbarMenu from "../navbarMenuComponent/navbarMenu";

const GET_SUBCAT_SERVICES = gql`
	query getSubCatServices($id: ID!) {
		subcategory(id: $id) {
			id
			name
			category {
				categoryName
			}
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

interface SubCatProps {}

const SubCat: FunctionComponent<SubCatProps> = () => {
	const [subCatId, setSubCatId] = useState<string>(
		localStorage.getItem("subCatId") || ""
	);

	const handleSubCatId = (value: string) => {
		setSubCatId(value);
	};

	const { loading, error, data } = useQuery(GET_SUBCAT_SERVICES, {
		variables: { id: subCatId },
	});
	useEffect(() => {
		localStorage.setItem("subCatId", subCatId);
	}, [subCatId]);

	return (
		<>
			<NavbarAfter />
			<NavbarMenu SubCategoryId={handleSubCatId} />
			<h1>programming-development</h1>
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong ! = value : {subCatId} </p>}
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
						{data.subcategory.services.map((service: any) => (
							<tr key={service.id}>
								<td>{service.title}</td>
								<td>{service.price}</td>
								<td>{service.deliveryTime}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	);
};

export default SubCat;
