import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import NavbarAfter from "../navbarAfterComponent/navbarAfter";
import NavbarMenu from "../navbarMenuComponent/navbarMenu";

const GET_SUBCAT_SERVICES = gql`
	query getSubCatServices {
		subcategory(id: "644ecd69ae1fb061ca402f4f") {
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
	const { loading, error, data } = useQuery(GET_SUBCAT_SERVICES);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Something went wrong !</p>;

	return (
		<>
			<NavbarAfter />
			<NavbarMenu />
			<h1>programming-development</h1>
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
								<td>
									<Link to={`/services/${service.id}`}>{service.title}</Link>
								</td>
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
