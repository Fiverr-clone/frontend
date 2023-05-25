import { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import "./subCategoryPage.css";

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
				<div>
					{data.subcategory.services.map((subCatService: any) => (
						<div className="service__wrapper">
							<div className="service__container">
								<div className="service-info__container">
									<h1 className="service-title">{subCatService.title}</h1>

									<div className="service-info__description">
										{subCatService.description}
									</div>
								</div>
							</div>
							<div className="service-freelancer__container">
								{/* <NavLink
							to={`/user/${data.service.freelancer._id}`}
							className="service-freelancer__link"
						> */}
								<div className="service-freelancer__info">
									<div className="service-freelancer__avatar">
										<img src={subCatService.image} alt="avatar" />
									</div>
									<div className="service-freelancer__personal-info-wrapper">
										<h3 className="service-freelancer__name">
											{subCatService.user.username}
										</h3>
									</div>
								</div>
								{/* </NavLink> */}
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default SubCat;
