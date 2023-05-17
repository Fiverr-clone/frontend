import { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import NavbarAfter from "../../components/navbarAfterComponent/navbarAfter";
import NavbarMenu from "../../components/navbarMenuComponent/navbarMenu";

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
	const [subCatId, setSubCatId] = useState<string>("");

	const handleSubCatId = (value: string) => {
		setSubCatId(value);
		localStorage.getItem("subCatId");
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
			<NavbarMenu CategoryId={handleSubCatId} />
			<h1>programming-development</h1>
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong ! = value : {subCatId} </p>}
			{subCatId === "" && <p>Please select a subcategory.</p>}
			{!loading && !error && (
				<table>
					<thead>
						<tr>
							<th>Service</th>
							<th>Price</th>
							<th>Image</th>
							<th>Delivery Time</th>
						</tr>
					</thead>
					<tbody>
						{data.subcategory.services.map((subCatService: any) => (
							<tr key={subCatService.id}>
								<td>{subCatService.title}</td>
								<td>{subCatService.price}</td>
								<img src={subCatService.image} width={"40%"} />
								{/* <td>{subCatService.image}</td> */}
								<td>{subCatService.deliveryTime}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	);
};

export default SubCat;
