import { FunctionComponent, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import "./Purchases.css";
import NavbarCombined from "../../components/navbarCombined/NavbarCombined";
import Footer from "../../components/footerComponent/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import Loading from "../../components/loading/loading";
import Swal from "sweetalert2";

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

const COMFIRM_PURCHASE = gql`
	mutation ComfirmOrder($id: ID!) {
		comfirmOrder(id: $id) {
			id
		}
	}
`;
const CANCEL_PURCHASE = gql`
	mutation CancelOrder($id: ID!) {
		cancelOrder(id: $id) {
			id
		}
	}
`;
interface PurchasesProps {}

const Purchases: FunctionComponent<PurchasesProps> = () => {
	const buyerId = Cookies.get("userId");

	const [cancelPurchase] = useMutation(CANCEL_PURCHASE);
	const [comfirmPurchase] = useMutation(COMFIRM_PURCHASE);

	const handleComfirm = (id: String) => {
		comfirmPurchase({
			variables: {
				id: id,
			},
		})
			.then((response) => {
				Swal.fire({
					icon: "success",
					title: "Your purchase is comfirmed",
					showConfirmButton: false,
					timer: 2000,
				});
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleCancel = (id: String) => {
		cancelPurchase({
			variables: {
				id: id,
			},
		})
			.then((response) => {
				Swal.fire({
					icon: "success",
					title: "Your purchase is canceled",
					showConfirmButton: false,
					timer: 2000,
				});
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
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
									<tr key={purchase.id}>
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
											<button
												className="order-completed"
												onClick={() => handleComfirm(purchase.id)}
											>
												Comfirm
											</button>
										</td>
										<td>
											<button
												className="user-service-delete-btn"
												onClick={() => handleCancel(purchase.id)}
											>
												Cancel
											</button>
										</td>
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
