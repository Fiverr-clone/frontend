import React, { FunctionComponent } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/loading";
import Footer from "../../components/footerComponent/footer";
import UserIcon from "../../assets/user.png";
import "./Gig.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import NavbarCombined from "../../components/navbarCombined/NavbarCombined";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const GET_ONE_SERVICE = gql`
	query getOneService($id: ID!) {
		service(id: $id) {
			id
			userId
			user {
				username
				email
			}
			category {
				categoryName
			}
			subCategory {
				name
			}
			title
			price
			description
			image
			deliveryTime
			buyerInstruction
		}
	}
`;
const CREATE_ORDER = gql`
	mutation CreateOrder($serviceId: ID!, $sellerId: ID!, $buyerId: ID!) {
		createOrder(serviceId: $serviceId, sellerId: $sellerId, buyerId: $buyerId) {
			id
		}
	}
`;

const CREATE_CONVERSATION = gql`
	mutation CreateConversation($transmitterId: ID!, $receiverId: ID!) {
		createConversation(transmitterId: $transmitterId, receiverId: $receiverId) {
			id
		}
	}
`;

interface GigProps {}

const Gig: FunctionComponent<GigProps> = () => {
	const navigate = useNavigate();
	const serviceId = localStorage.getItem("serviceId") || "";
	const buyerId = Cookies.get("userId");

	const [createOrder] = useMutation(CREATE_ORDER);

	const handleCreateOrder = (sellerId: String) => {
		navigate(`/mypurchases/${buyerId}`);
		createOrder({
			variables: {
				serviceId: serviceId,
				sellerId: sellerId,
				buyerId: buyerId,
			},
		})
			.then((response) => {
				Swal.fire({
					icon: "success",
					title: "Service purchased",
					showConfirmButton: false,
					timer: 2000,
				});
				navigate(`/mypurchases/${buyerId}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const [createConversation] = useMutation(CREATE_CONVERSATION);

	const { loading, error, data } = useQuery(GET_ONE_SERVICE, {
		variables: { id: serviceId },
	});
	const transmitterId = Cookies.get("userId");

	const HandleCreateConversation = (receiverId: string) => {
		createConversation({
			variables: {
				transmitterId,
				receiverId,
			},
		})
			.then((res) => {
				const conversationId = res.data.createConversation.id;
				navigate(`/conversation/${conversationId}`);
				console.log(res);
			})
			.catch((err) => {
				if (err.message === "Conversation already exists") {
					Swal.fire({
						icon: "error",
						title: "Conversation already exists",
						showConfirmButton: true,
					});
					navigate(`/repertory/${transmitterId}`);
				} else {
					console.log(err);
				}
			});
	};

	if (!data) {
		return null;
	}

	const { service } = data;
	return (
		<>
			<NavbarCombined />
			<div className="gig">
				{loading && <Loading />}
				{error && <p>Something went wrong ! </p>}
				{!loading && !error && (
					<div className="container">
						<div className="left">
							<h4 className="category-gig-name">
								<Link to="/">
									<FontAwesomeIcon
										icon={faHouse}
										style={{ color: "#414046" }}
									/>
								</Link>
								&nbsp; / &nbsp; {service.category.categoryName}&nbsp; / &nbsp;
								{service.subCategory.name}
							</h4>

							<h1>{service.title}</h1>
							<div className="user">
								<img className="pp" src={UserIcon} alt="UserIcon" />
								<span>{service.user.username}</span>
								<div className="stars">
									<img src="/img/star.png" alt="" />
									<img src="/img/star.png" alt="" />
									<img src="/img/star.png" alt="" />
									<img src="/img/star.png" alt="" />
									<img src="/img/star.png" alt="" />
									<span>5</span>
								</div>
							</div>
							<div>
								<img src={service.image} alt="" className="gig-img" />
							</div>
							<h2>About This Gig</h2>
							<p>{service.description}</p>
							<div className="seller" key={service.userId}>
								<h2>About The Seller</h2>

								<div className="info">
									<p>{service.user.username}</p>
									<div className="stars">
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
									</div>
									<p>{service.user.email}</p>

									<button
										className="contact-me"
										onClick={() => HandleCreateConversation(service.userId)}
									>
										Contact Me
									</button>
								</div>
							</div>
							<div className="reviews">
								<h2>Reviews</h2>
								<div className="item">
									<div className="user">
										<img
											className="pp"
											src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
											alt=""
										/>
										<div className="info">
											<span>Garner David</span>
											<div className="country">
												<img
													src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
													alt=""
												/>
												<span>United States</span>
											</div>
										</div>
									</div>
									<div className="stars">
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<span>5</span>
									</div>
									<p>
										I just want to say that art_with_ai was the first, and after
										this, the only artist Ill be using on Fiverr. Communication
										was amazing, each and every day he sent me images that I was
										free to request changes to. They listened, understood, and
										delivered above and beyond my expectations. I absolutely
										recommend this gig, and know already that Ill be using it
										again very very soon
									</p>
									<div className="helpful">
										<span>Helpful?</span>
										<img src="/img/like.png" alt="" />
										<span>Yes</span>
										<img src="/img/dislike.png" alt="" />
										<span>No</span>
									</div>
								</div>
								<hr />
								<div className="item">
									<div className="user">
										<img
											className="pp"
											src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
											alt=""
										/>
										<div className="info">
											<span>Sidney Owen</span>
											<div className="country">
												<img
													src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
													alt=""
												/>
												<span>Germany</span>
											</div>
										</div>
									</div>
									<div className="stars">
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<span>5</span>
									</div>
									<p>
										The designer took my photo for my book cover to the next
										level! Professionalism and ease of working with designer
										along with punctuality is above industry standards!!
										Whatever your project is, you need this designer!
									</p>
									<div className="helpful">
										<span>Helpful?</span>
										<img src="/img/like.png" alt="" />
										<span>Yes</span>
										<img src="/img/dislike.png" alt="" />
										<span>No</span>
									</div>
								</div>
								<hr />
								<div className="item">
									<div className="user">
										<img
											className="pp"
											src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
											alt=""
										/>
										<div className="info">
											<span>Lyle Giles </span>
											<div className="country">
												<img
													src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
													alt=""
												/>
												<span>United States</span>
											</div>
										</div>
									</div>
									<div className="stars">
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<img src="/img/star.png" alt="" />
										<span>5</span>
									</div>
									<p>
										Amazing work! Communication was amazing, each and every day
										he sent me images that I was free to request changes to.
										They listened, understood, and delivered above and beyond my
										expectations. I absolutely recommend this gig, and know
										already that Ill be using it again very very soon
									</p>
									<div className="helpful">
										<span>Helpful?</span>
										<img src="/img/like.png" alt="" />
										<span>Yes</span>
										<img src="/img/dislike.png" alt="" />
										<span>No</span>
									</div>
								</div>
							</div>
						</div>
						<div className="right">
							<div className="price">
								<h3>Price :</h3>
								<h2>{service.price}$</h2>
							</div>

							<p style={{ fontSize: "15px" }}>{service.buyerInstruction}</p>

							<div className="details">
								<div className="item">
									<img src="/img/clock.png" alt="" />
									<span>{service.deliveryTime} Days Delivery</span>
								</div>
							</div>
							<div className="features">
								<div className="item">
									<img src="/img/greencheck.png" alt="" />
									<span>Prompt writing</span>
								</div>
								<div className="item">
									<img src="/img/greencheck.png" alt="" />
									<span>Artwork delivery</span>
								</div>
								<div className="item">
									<img src="/img/greencheck.png" alt="" />
									<span>Image upscaling</span>
								</div>
								<div className="item">
									<img src="/img/greencheck.png" alt="" />
									<span>Additional design</span>
								</div>
							</div>
							<button
								key={service.userId}
								onClick={() => handleCreateOrder(service.userId)}
							>
								Add to Purchases
							</button>
						</div>
					</div>
				)}
			</div>

			<Footer />
		</>
	);
};

export default Gig;
