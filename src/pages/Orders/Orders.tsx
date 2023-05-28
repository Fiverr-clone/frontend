import { FunctionComponent, useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import "./Orders.css";
import NavbarCombined from "../../components/navbarCombined/NavbarCombined";
import Footer from "../../components/footerComponent/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import Loading from "../../components/loading/loading";

const GET_ORDERS = gql`
	query getOrdersBySellerId($sellerId: ID!) {
		ordersBySellerId(sellerId: $sellerId) {
			id
			service {
				image
				title
				price
			}
			buyer {
				id
				username
			}
			isCompleted
			isComfirmed
		}
	}
`;

const COMPLETE_ORDER = gql`
	mutation CompleteOrder($id: ID!) {
		completeOrder(id: $id) {
			id
		}
	}
`;

interface OrdersProps {}

const Orders: FunctionComponent<OrdersProps> = () => {
	const sellerId = Cookies.get("userId");

	const [completeOrder] = useMutation(COMPLETE_ORDER);

	const handleComplete = (id: String) => {
		completeOrder({
			variables: {
				id: id,
			},
		})
			.then((response) => {
				console.log("Marked as completed");
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const { loading, error, data } = useQuery(GET_ORDERS, {
		variables: { sellerId: sellerId },
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
				<div className="orders">
					<div className="container">
						<div className="title">
							<h1>My Orders</h1>
						</div>
						<table>
							<thead>
								<tr>
									<th>Image</th>
									<th>Title</th>
									<th>Price</th>
									<th>Buyer</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{data.ordersBySellerId.map((order: any) => (
									<tr key={order.id}>
										<td>
											<img className="image" src={order.service.image} alt="" />
										</td>
										<td>{order.service.title}</td>
										<td>{order.service.price}$</td>
										<td>{order.buyer.username}</td>
										<td>
											<button
												className="order-completed"
												onClick={() => handleComplete(order.id)}
											>
												Completed
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

export default Orders;
