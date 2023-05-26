import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import "./GigsPage.css";

import NavbarAfter from "../../components/navbarAfterComponent/navbarAfter";
import NavbarMenu from "../../components/navbarMenuComponent/navbarMenu";
import Footer from "../../components/footerComponent/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const GET_SUBCAT_SERVICES = gql`
	query getSubCatServices($id: ID!, $page: Int, $limit: Int) {
		subcategory(id: $id) {
			id
			name
			category {
				categoryName
			}
			services(page: $page, limit: $limit) {
				id
				userId
				user {
					id
					username
				}
				title
				image
				price
			}
		}
	}
`;

interface SubCatProps {}

const SubCategoryPage: FunctionComponent<SubCatProps> = () => {
	const ITEMS_PER_PAGE = 8;
	const [page, setPage] = useState(1);

	const [subCatId, setSubCatId] = useState<string>("");

	useEffect(() => {
		const storedSubCatId = localStorage.getItem("subCatId");
		if (storedSubCatId) {
			setSubCatId(storedSubCatId);
		}
	}, []);

	const { loading, error, data, fetchMore } = useQuery(GET_SUBCAT_SERVICES, {
		variables: { id: subCatId, page: 1, limit: ITEMS_PER_PAGE },
	});

	const handlePrevPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	const handleNextPage = () => {
		setPage(page + 1);
	};
	useEffect(() => {
		fetchMore({
			variables: { page, limit: ITEMS_PER_PAGE },
			updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
				if (!fetchMoreResult) return prevResult;
				return fetchMoreResult;
			},
		});
	}, [page, fetchMore]);
	return (
		<>
			<NavbarAfter />
			<NavbarMenu />
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong ! </p>}
			{!loading && !error && (
				<div className="services-wrapper">
					{data.subcategory.services.map((service: any) => (
						<div className="service-whole-container" key={service.id}>
							<div className="image-container">
								<img
									src={service.image}
									className="service-img"
									alt="Service"
								/>
							</div>
							<div className="service-info-container">
								<span className="service-freelancer-username">
									<FontAwesomeIcon
										icon={faUser}
										style={{ color: "#404145" }}
										className="user-icon"
									/>
									{service.user.username}
								</span>
								<span className="service-title">
									<Link to="/" className="service-link">
										{service.title}
									</Link>
								</span>
								<span className="service-price">From US${service.price} </span>
							</div>
						</div>
					))}
					<div className="pagination-controls" style={{ marginTop: "50px" }}>
						<button
							className="pagination-btn"
							onClick={handlePrevPage}
							disabled={page === 1}
						>
							Previous
						</button>
						<span className="page-number">{page}</span>
						<button
							className="pagination-btn"
							onClick={handleNextPage}
							disabled={data.subcategory.services.length < ITEMS_PER_PAGE}
						>
							Next
						</button>
					</div>
				</div>
			)}
			<Footer />
		</>
	);
};

export default SubCategoryPage;
