import { FunctionComponent, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import "./Purchases.css";
import NavbarCombined from "../../components/navbarCombined/NavbarCombined";
import Footer from "../../components/footerComponent/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import Loading from "../../components/loading/loading";

const GET_PURCHAES = gql`
	query getOrdersByBuyerId($buyerId: ID!) {
		ordersByBuyerId(buyerId: $buyerId) {
			id
			service {
				image
				title
				price
			}
			seller {
				id
				username
			}
			isCompleted
			isComfirmed
		}
	}
`;

interface PurchasesProps {}

const Purchases: FunctionComponent<PurchasesProps> = () => {
	const buyerId = Cookies.get("userId");
	const [isComfirmed, setIsComfirmed] = useState(false);
	const handleComplete = () => {
		setIsComfirmed(!isComfirmed);
	};

	const { loading, error, data } = useQuery(GET_PURCHAES, {
		variables: { buyerId: buyerId },
	});

	if (!data) {
		return null;
	}

	return (
		<>
			<NavbarCombined />
			{loading && <Loading />}
			{error && <p>Something went wrong ! </p>}
			{!loading && !error && (
				<div className="purchases">
					<div className="container">
						<div className="title">
							<h1>My Purchases</h1>
						</div>
						<table>
							<thead>
								<tr>
									<th>Image</th>
									<th>Title</th>
									<th>Price</th>
									<th>Freelancer</th>
									<th>Comfirm</th>
									<th>Cancel</th>
								</tr>
							</thead>
							<tbody>
								{data.ordersByBuyerId.map((purchase: any) => (
									<tr>
										<td>
											<img
												className="image"
												src={purchase.service.image}
												alt=""
											/>
										</td>
										<td>{purchase.service.title}</td>
										<td>{purchase.service.price}$</td>
										<td>{purchase.seller.username}</td>
										<td>
											{isComfirmed ? (
												<FontAwesomeIcon
													icon={faCheck}
													style={{ color: "#555555", fontWeight: "25px" }}
												/>
											) : (
												<button
													className="order-completed"
													onClick={() => handleComplete()}
												>
													Comfirm
												</button>
											)}
										</td>
										<td>Cancel</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
			<Footer />
		</>
	);
};

export default Purchases;
