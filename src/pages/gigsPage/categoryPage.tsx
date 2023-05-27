import { FunctionComponent, useEffect, useState } from "react";
import NavbarAfter from "../../components/navbarAfterComponent/navbarAfter";
import NavbarMenu from "../../components/navbarMenuComponent/navbarMenu";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Footer from "../../components/footerComponent/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./GigsPage.css";

const GET_CAT_SERVICES = gql`
	query getCategoryServices($id: ID!, $page: Int, $limit: Int) {
		category(id: $id) {
			id
			categoryName
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
interface CategoryPageProps {}

const CategoryPage: FunctionComponent<CategoryPageProps> = () => {
	const ITEMS_PER_PAGE = 8;
	const [page, setPage] = useState(1);
	const [catId, setCatId] = useState<string>("");

	useEffect(() => {
		const storedCatId = localStorage.getItem("catId");
		if (storedCatId) {
			setCatId(storedCatId);
		}
	}, []);

	const { loading, error, data, fetchMore } = useQuery(GET_CAT_SERVICES, {
		variables: { id: catId, page: 1, limit: ITEMS_PER_PAGE },
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
					{data.category.services.map((service: any) => (
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
				</div>
			)}
			{!loading && !error && (
				<div className="pagination-controls" style={{ margin: "50px 0" }}>
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
						disabled={data.category.services.length < ITEMS_PER_PAGE}
					>
						Next
					</button>
				</div>
			)}

			<Footer />
		</>
	);
};
export default CategoryPage;
