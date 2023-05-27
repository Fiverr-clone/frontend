import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import NavAfterLogin from "../../components/navAfterLogin/navAfterLogin";
import navbarMenu from "../../components/navbarMenuComponent/navbarMenu";
import NavbarMenu from "../../components/navbarMenuComponent/navbarMenu";

import Footer from "../../components/footerComponent/footer";
import "./Gig.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import NavbarAfter from "../../components/navbarAfterComponent/navbarAfter";
// import { Types } from "mongoose";

interface Service {
	id: string;
	userId: string;
	user: {
		username: string;
		email: string;
	};
	category: {
		categoryName: string;
	};
	subCategory: {
		name: string;
	};
	title: string;
	price: number;
	description: string;
	image: string;
	deliveryTime: string;
	buyerInstruction: string;
}

interface ServiceData {
	service: Service;
}

interface ServiceVariables {
	id: string;
}

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

const Gig: React.FC = () => {
	const serviceId = localStorage.getItem("serviceId") || "";

	const { loading, error, data } = useQuery<ServiceData, ServiceVariables>(
		GET_ONE_SERVICE,
		{
			variables: { id: serviceId },
		}
	);

	if (!data) {
		return null;
	}

	const { service } = data;
	return (
		<>
			<NavbarAfter />
			<NavbarMenu />
			<div className="gig">
				{loading && <p>Loading...</p>}
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
								<img
									className="pp"
									src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
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

							<div className="seller">
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

									<button>Contact Me</button>
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

							<p>{service.buyerInstruction}</p>

							<div className="details">
								<div className="item">
									<img src="/img/clock.png" alt="" />
									<span>2 Days Delivery</span>
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
							<button>Add to Orders</button>
						</div>
					</div>
				)}
			</div>

			<Footer />
		</>
	);
};

export default Gig;

// import React from "react";
// import NavAfterLogin from "../../components/navAfterLogin/navAfterLogin";
// import NavbarMenu from "../../components/navbarMenuComponent/navbarMenu";
// import Footer from "../../components/footerComponent/footer";
// import { gql, useQuery } from "@apollo/client";
// import "./Gig.css";

// const GET_ONE_SERVICES = gql`
//   query getOneServices($id: ID!) {
//     service(id: $id) {
//       id
//       userId
//       user {
//         username
//         email
//       }
//       category {
//         categoryName
//       }
//       subCategory {
//         name
//       }
//       title
//       price
//       description
//       image
//       deliveryTime
//       buyerInstruction
//     }
//   }
// `;
// const ServiceDetailsPage = ({ id }) => {
//     const { loading, error, data } = useQuery(GET_ONE_SERVICES, {
//       variables: { id },
//     });

//     if (loading) {
//       return <p>Loading...</p>;
//     }

//     if (error) {
//       return <p>Error: {error.message}</p>;
//     }

//     const { service } = data;

// function Gig() {
//   return (
//     <>
//            <NavAfterLogin />
// 			<NavbarMenu />
//     <div className="gig">
//       <div className="container">
//         <div className="left">
//           <span className="breadcrumbs">Liverr / Graphics & Design </span>
//           <h1>I will create ai generated art for you</h1>
//           <div className="user">
//             <img
//               className="pp"
//               src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <span>Anna Bell</span>
//             <div className="stars">
//               <img src="/img/star.png" alt="" />
//               <img src="/img/star.png" alt="" />
//               <img src="/img/star.png" alt="" />
//               <img src="/img/star.png" alt="" />
//               <img src="/img/star.png" alt="" />
//               <span>5</span>
//             </div>
//           </div>
//          <div>
//              <img
//               src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             /></div>

//           <h2>About This Gig</h2>
//           <p>
//             I use an AI program to create images based on text prompts. This
//             means I can help you to create a vision you have through a textual
//             description of your scene without requiring any reference images.
//             Some things I've found it often excels at are: Character portraits
//             (E.g. a picture to go with your DnD character) Landscapes (E.g.
//             wallpapers, illustrations to compliment a story) Logos (E.g. Esports
//             team, business, profile picture) You can be as vague or as
//             descriptive as you want. Being more vague will allow the AI to be
//             more creative which can sometimes result in some amazing images. You
//             can also be incredibly precise if you have a clear image of what you
//             want in mind. All of the images I create are original and will be
//             found nowhere else. If you have any questions you're more than
//             welcome to send me a message.
//           </p>
//           <div className="seller">
//             <h2>About The Seller</h2>
//             <div className="user">
//               <img
//                 src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className="info">
//                 <span>Anna Bell</span>
//                 <div className="stars">
//                   <img src="/img/star.png" alt="" />
//                   <img src="/img/star.png" alt="" />
//                   <img src="/img/star.png" alt="" />
//                   <img src="/img/star.png" alt="" />
//                   <img src="/img/star.png" alt="" />
//                   <span>5</span>
//                 </div>
//                 <button>Contact Me</button>
//               </div>
//             </div>
//             <div className="box">
//               <div className="items">
//                 <div className="item">
//                   <span className="title">From</span>
//                   <span className="desc">USA</span>
//                 </div>
//                 <div className="item">
//                   <span className="title">Member since</span>
//                   <span className="desc">Aug 2022</span>
//                 </div>
//                 <div className="item">
//                   <span className="title">Avg. response time</span>
//                   <span className="desc">4 hours</span>
//                 </div>
//                 <div className="item">
//                   <span className="title">Last delivery</span>
//                   <span className="desc">1 day</span>
//                 </div>
//                 <div className="item">
//                   <span className="title">Languages</span>
//                   <span className="desc">English</span>
//                 </div>
//               </div>
//               <hr />
//               <p>
//                 My name is Anna, I enjoy creating AI generated art in my spare
//                 time. I have a lot of experience using the AI program and that
//                 means I know what to prompt the AI with to get a great and
//                 incredibly detailed result.
//               </p>
//             </div>
//           </div>
//   <div className="reviews">
//     <h2>Reviews</h2>
//     <div className="item">
//       <div className="user">
//         <img
//           className="pp"
//           src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
//           alt=""
//         />
//         <div className="info">
//           <span>Garner David</span>
//           <div className="country">
//             <img
//               src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
//               alt=""
//             />
//             <span>United States</span>
//           </div>
//         </div>
//       </div>
//       <div className="stars">
//         <img src="/img/star.png" alt="" />
//         <img src="/img/star.png" alt="" />
//         <img src="/img/star.png" alt="" />
//         <img src="/img/star.png" alt="" />
//         <img src="/img/star.png" alt="" />
//         <span>5</span>
//       </div>
//       <p>
//         I just want to say that art_with_ai was the first, and after
//         this, the only artist Ill be using on Fiverr. Communication was
//         amazing, each and every day he sent me images that I was free to
//         request changes to. They listened, understood, and delivered
//         above and beyond my expectations. I absolutely recommend this
//         gig, and know already that Ill be using it again very very soon
//       </p>
//       <div className="helpful">
//         <span>Helpful?</span>
//         <img src="/img/like.png" alt="" />
//         <span>Yes</span>
//         <img src="/img/dislike.png" alt="" />
//         <span>No</span>
//       </div>
//     </div>
//     <hr />
//     <div className="item">
//       <div className="user">
//         <img
//           className="pp"
//           src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
//           alt=""
//         />
//         <div className="info">
//           <span>Sidney Owen</span>
//           <div className="country">
//             <img
//               src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
//               alt=""
//             />
//             <span>Germany</span>
//           </div>
//         </div>
//       </div>
//       <div className="stars">
//         <img src="/img/star.png" alt="" />
//         <img src="/img/star.png" alt="" />
//         <img src="/img/star.png" alt="" />
//         <img src="/img/star.png" alt="" />
//         <img src="/img/star.png" alt="" />
//         <span>5</span>
//       </div>
//       <p>
//         The designer took my photo for my book cover to the next level!
//         Professionalism and ease of working with designer along with
//         punctuality is above industry standards!! Whatever your project
//         is, you need this designer!
//       </p>
//       <div className="helpful">
//         <span>Helpful?</span>
//         <img src="/img/like.png" alt="" />
//         <span>Yes</span>
//         <img src="/img/dislike.png" alt="" />
//         <span>No</span>
//       </div>
//     </div>
//     <hr />
//     <div className="item">
//       <div className="user">
//         <img
//           className="pp"
//           src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
//           alt=""
//         />
//         <div className="info">
//           <span>Lyle Giles </span>
//           <div className="country">
//             <img
//               src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
//               alt=""
//             />
//             <span>United States</span>
//           </div>
//         </div>
//       </div>
//       <div className="stars">
//         <img src="/img/star.png" alt="" />
//         <img src="/img/star.png" alt="" />
//         <img src="/img/star.png" alt="" />
//         <img src="/img/star.png" alt="" />
//         <img src="/img/star.png" alt="" />
//         <span>5</span>
//       </div>
//       <p>
//         Amazing work! Communication was
//         amazing, each and every day he sent me images that I was free to
//         request changes to. They listened, understood, and delivered
//         above and beyond my expectations. I absolutely recommend this
//         gig, and know already that Ill be using it again very very soon
//       </p>
//       <div className="helpful">
//         <span>Helpful?</span>
//         <img src="/img/like.png" alt="" />
//         <span>Yes</span>
//         <img src="/img/dislike.png" alt="" />
//         <span>No</span>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="right">
//   <div className="price">
//     <h3>1 AI generated image</h3>
//     <h2>$ 59.99</h2>
//   </div>
//   <p>
//     I will create a unique high quality AI generated image based on a
//     description that you give me
//   </p>
//   <div className="details">
//     <div className="item">
//       <img src="/img/clock.png" alt="" />
//       <span>2 Days Delivery</span>
//     </div>
//     <div className="item">
//       <img src="/img/recycle.png" alt="" />
//       <span>3 Revisions</span>
//     </div>
//   </div>
//   <div className="features">
//     <div className="item">
//       <img src="/img/greencheck.png" alt="" />
//       <span>Prompt writing</span>
//     </div>
//     <div className="item">
//       <img src="/img/greencheck.png" alt="" />
//       <span>Artwork delivery</span>
//     </div>
//     <div className="item">
//       <img src="/img/greencheck.png" alt="" />
//       <span>Image upscaling</span>
//     </div>
//     <div className="item">
//       <img src="/img/greencheck.png" alt="" />
//       <span>Additional design</span>
//     </div>
//   </div>
//   <button>Continue</button>
// </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Gig;
