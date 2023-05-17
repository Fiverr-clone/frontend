import { FunctionComponent, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ServicePage.css";

// import NavbarAfter from "../../components/navbarAfterComponent/navbarAfter";
// import NavbarMenu from "../../components/navbarMenuComponent/navbarMenu";
import { gql, useQuery } from "@apollo/client";

const GET_CAT_SERVICES = gql`
	query getCategoryServices($id: ID!) {
		category(id: $id) {
			id
			categoryName
			services {
				id
				title
				image
				description
				price
				deliveryTime
			}
		}
	}
`;

interface ServiceCardProps {}

const ServiceCard: FunctionComponent<ServiceCardProps> = () => {
	const [catId, setCatId] = useState<string>("");
	const handleCatId = (value: string) => {
		setCatId(value);
		localStorage.getItem("catId");
	};

	useEffect(() => {
		const storedCatId = localStorage.getItem("catId");
		if (storedCatId) {
			setCatId(storedCatId);
		}
	}, []);
	// 	localStorage.setItem("catId", catId);
	// }, [catId]);

	const { loading, error, data } = useQuery(GET_CAT_SERVICES, {
		variables: { id: catId },
	});

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong ! = value : {catId} </p>}
			{catId === "" && <p>Please select a subcategory.</p>}
			{!loading && !error && (
				<Link to="/gig/123" className="link">
					{data.category.services.map((service: any) => (
						<div className="gigCard">
							<img src={service.img} alt="" />
							<div className="info">
								{/* <div className="user"> */}
								{/* <img src={service.pp} alt="" /> */}
								{/* <span>{service.username}</span> */}
								{/* </div> */}
								<p>{service.description}</p>
								{/* <div className="star">
									<img src="./img/star.png" alt="" />
									<span>{service.star}</span>
								</div> */}
							</div>
							<hr />
							<div className="detail">
								<img src="./img/heart.png" alt="" />
								<div className="price">
									<span>STARTING AT</span>
									<h2>
										$ {service.price}
										<sup>99</sup>
									</h2>
								</div>
							</div>
						</div>
					))}
				</Link>
			)}
		</div>
	);
};
export default ServiceCard;
