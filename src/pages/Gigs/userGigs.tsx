import { FunctionComponent, useEffect, useState } from "react";
import NavbarMenu from "../../components/navbarMenuComponent/navbarMenu";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footerComponent/footer";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import "./GigsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import NavAfterLogin from "../../components/navAfterLogin/navAfterLogin";
import Loading from "../../components/loading/loading";

const GET_USER_SERVICES = gql`
	query getUserServices($id: ID!, $page: Int, $limit: Int) {
		user(id: $id) {
			id
			username
			services(page: $page, limit: $limit) {
				id
				title
				image
				price
			}
		}
	}
`;

const DELETE_SERVICE = gql`
	mutation DeleteService($serviceId: ID!) {
		deleteService(serviceId: $serviceId)
	}
`;

interface CatProps {}

const UserServicesPage: FunctionComponent<CatProps> = () => {
	const navigate = useNavigate();
	const userid = Cookies.get("userId");
	const ITEMS_PER_PAGE = 8;
	const [page, setPage] = useState(1);

	const handleServiceid = (serviceId: string) => {
		console.log(serviceId);
		deleteService({
			variables: {
				serviceId,
			},
		})
			.then((response) => {
				Swal.fire({
					icon: "success",
					title: "Your services has been deleted successfully",
					showConfirmButton: false,
					timer: 2000,
				});
				// window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const { loading, error, data, fetchMore } = useQuery(GET_USER_SERVICES, {
		variables: { id: userid, page: 1, limit: ITEMS_PER_PAGE },
	});
	const [deleteService] = useMutation(DELETE_SERVICE);

	const handlePrevPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	const handleServiceClick = (serviceId: string) => {
		localStorage.setItem("serviceId", serviceId);
		console.log(serviceId);
		navigate(`/gig/${serviceId}`);
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
			<NavAfterLogin />
			<NavbarMenu />
			<h4 className="category-gig-name">
				<Link to="/">
					<FontAwesomeIcon icon={faHouse} style={{ color: "#414046" }} />
				</Link>
				&nbsp; / &nbsp; My Gigs
			</h4>
			<span style={{ marginTop: "20px", marginBottom: "-40px" }}></span>
			{loading && <Loading />}
			{error && <p>Something went wrong ! </p>}
			{!loading && !error && (
				<div className="services-wrapper">
					{data.user.services.map((service: any) => (
						<div
							className="service-whole-container"
							key={service.id}
							onClick={() => handleServiceClick(service.id)}
						>
							<div className="image-container">
								<img
									src={service.image}
									className="service-img"
									alt="Service"
								/>
							</div>
							<div
								className="service-info-container"
								style={{ marginTop: "10px" }}
							>
								<span
									className="service-title"
									onClick={() => handleServiceClick(service.id)}
								>
									{service.title}
								</span>
								<div className="price-crud">
									<button
										className="user-service-delete-btn"
										onClick={() => handleServiceid(service.id)}
									>
										Delete
									</button>
									<span className="service-price-1">
										From US${service.price}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
			{!loading && !error && (
				<div
					className="pagination-controls"
					style={{
						margin: "50px 0",
						display: "flex",
						justifyContent: "center",
					}}
				>
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
						disabled={data.user.services.length < ITEMS_PER_PAGE}
					>
						Next
					</button>
				</div>
			)}

			<Footer />
		</>
	);
};
export default UserServicesPage;
