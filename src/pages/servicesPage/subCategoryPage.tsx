import { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import "./subCategoryPage.css";

import NavbarAfter from "../../components/navbarAfterComponent/navbarAfter";
import NavbarMenu from "../../components/navbarMenuComponent/navbarMenu";
import Footer from "../../components/footerComponent/footer";

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
				userId
				user {
					id
					username
				}
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

	useEffect(() => {
		const storedSubCatId = localStorage.getItem("subCatId");
		if (storedSubCatId) {
			setSubCatId(storedSubCatId);
		}
	}, []);

	const { loading, error, data } = useQuery(GET_SUBCAT_SERVICES, {
		variables: { id: subCatId },
	});

	return (
		<>
			<NavbarAfter />
			<NavbarMenu />
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong ! </p>}
			{!loading && !error && (
				<div className="services-wrapper">
					{data.subcategory.services.map((subCatService: any) => (
						<div className="service-whole-container" key={subCatService.id}>
							<div className="image-container">
								<img
									src={subCatService.image}
									className="service-img"
									alt="Service"
								/>
							</div>
							<div className="service-info-container">
								<span className="service-freelancer-username">
									{subCatService.user.username}
								</span>
								<span className="service-title">
									<Link to="/" className="service-link">
										{subCatService.title}
									</Link>
								</span>
								<span className="service-price">
									from {subCatService.price} $
								</span>
							</div>
						</div>
					))}
				</div>
			)}
			<Footer />
		</>
	);
};

export default SubCat;
