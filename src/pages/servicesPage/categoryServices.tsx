import React, { FunctionComponent, useRef, useState } from "react";

import "./ServicePage.css";
// import { gigs } from "../../data";
import ServiceCard from "./ServiceCard";
import NavbarAfter from "../../components/navbarAfterComponent/navbarAfter";
import NavbarMenu from "../../components/navbarMenuComponent/navbarMenu";

interface CategoryServiceProps {}

const CategoryService: FunctionComponent<CategoryServiceProps> = () => {
	const [subCatId, setSubCatId] = useState<String>("");

	const handleSubCatId = (value: String) => {
		setSubCatId(value);
		// console.log(value);
	};
	const [sort, setSort] = useState("sales");
	const [open, setOpen] = useState(false);
	const minRef = useRef();
	const maxRef = useRef();

	const reSort = (type: any) => {
		setSort(type);
		setOpen(false);
	};

	const apply = () => {
		// console.log(minRef.current.value);
		// console.log(maxRef.current.value);
	};

	return (
		<>
			<NavbarAfter />
			<NavbarMenu CategoryId={handleSubCatId} />
			<div className="gigs">
				<div className="container">
					<span className="breadcrumbs">
						Liverr &gt; Graphics & Design &gt;
					</span>
					<h1>AI Artists</h1>
					<p>
						Explore the boundaries of art and technology with Liverr's AI
						artists
					</p>
					<div className="menu">
						<div className="left">
							<span>Budget</span>
							{/* <input ref={minRef} type="number" placeholder="min" /> */}
							{/* <input ref={maxRef} type="number" placeholder="max" /> */}
							<button onClick={apply}>Apply</button>
						</div>
						<div className="right">
							<span className="sortBy">Sort by</span>
							<span className="sortType">
								{sort === "sales" ? "Best Selling" : "Newest"}
							</span>
							<img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
							{open && (
								<div className="rightMenu">
									{sort === "sales" ? (
										<span onClick={() => reSort("createdAt")}>Newest</span>
									) : (
										<span onClick={() => reSort("sales")}>Best Selling</span>
									)}
									<span onClick={() => reSort("sales")}>Popular</span>
								</div>
							)}
						</div>
					</div>
					<div className="cards">
						{/* {gigs.map((gig) => ( */}
						<ServiceCard />
						{/* ))} */}
					</div>
				</div>
			</div>
		</>
	);
};

export default CategoryService;
