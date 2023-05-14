import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./navbarMenu.css";

interface NavbarMenuProps {}

const NavbarMenu: FunctionComponent<NavbarMenuProps> = () => {
	const handleCategoryClick = (categoryId: String) => {};
	const handleSubcategoryClick = (subcategoryId: string) => {
		axios
			.post(`http://localhost:8000/api/services/${subcategoryId}`)
			.then((response) => {
				// console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});

		// console.log(`Sending ${subcategoryId} to the backend...`);
	};

	return (
		<>
			<nav className="navbar-menu">
				<ul className="category-nav-ul">
					{/* Programming & Development */}
					<li className="category-nav-li">
						<span className="category-span">
							<Link
								to="/programming-development"
								className="category-nav-link"
								id="644e9aaaae1fb061ca402f45"
								onClick={() => handleCategoryClick("644e9aaaae1fb061ca402f45")}
							>
								Programming & Development
							</Link>
						</span>
						<ul className="subcategory-nav-ul">
							<li className="subcategory-nav-li">
								<Link
									to="/programming-development/html-css-programming"
									className="subcategory-nav-link"
									id="644ecff1ae1fb061ca402f65"
									onClick={() =>
										handleSubcategoryClick("644ecff1ae1fb061ca402f65")
									}
								>
									HTML & CSS Programming
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/programming-development/java-dot-net-programming"
									className="subcategory-nav-link"
									id="644ed044ae1fb061ca402f66"
									onClick={() =>
										handleSubcategoryClick("644ed044ae1fb061ca402f66")
									}
								>
									Java and .NET Programming
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/programming-development/php-programming"
									className="subcategory-nav-link"
									id="644ed06dae1fb061ca402f67"
									onClick={() =>
										handleSubcategoryClick("644ed06dae1fb061ca402f67")
									}
								>
									PHP Programming
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/programming-development/python-programming"
									className="subcategory-nav-link"
									id="644ed08cae1fb061ca402f68"
									onClick={() =>
										handleSubcategoryClick("644ed08cae1fb061ca402f68")
									}
								>
									Python Programming
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/programming-development/mobile-app-programming"
									className="subcategory-nav-link"
									id="644ed0abae1fb061ca402f69"
									onClick={() =>
										handleSubcategoryClick("644ed0abae1fb061ca402f69")
									}
								>
									Mobile Application Programming
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/programming-development/wordpress-services"
									className="subcategory-nav-link"
									id="644ed0d2ae1fb061ca402f6a"
									onClick={() =>
										handleSubcategoryClick("644ed0d2ae1fb061ca402f6a")
									}
								>
									WordPress Services
								</Link>
							</li>
						</ul>
					</li>

					{/* Digital Marketing */}
					<li className="category-nav-li">
						<span className="category-span">
							<Link
								to="/digital-marketing"
								className="category-nav-link"
								id="644e99fdae1fb061ca402f42"
								onClick={() => handleCategoryClick("644e99fdae1fb061ca402f42")}
							>
								Digital Marketing
							</Link>
						</span>
						<ul className="subcategory-nav-ul">
							<li className="subcategory-nav-li">
								<Link
									to="/digital-marketing/website-ads"
									className="subcategory-nav-link"
									id="644ecdb4ae1fb061ca402f53"
									onClick={() =>
										handleSubcategoryClick("644ecdb4ae1fb061ca402f53")
									}
								>
									Website Ads
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/digital-marketing/content-marketing"
									className="subcategory-nav-link"
									id="644ecdf4ae1fb061ca402f54"
									onClick={() =>
										handleSubcategoryClick("644ecdf4ae1fb061ca402f54")
									}
								>
									Content Marketing
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/digital-marketing/instagram-marketing"
									className="subcategory-nav-link"
									id="644ece18ae1fb061ca402f55"
									onClick={() =>
										handleSubcategoryClick("644ece18ae1fb061ca402f55")
									}
								>
									Instagram Marketing
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/digital-marketing/facebook-marketing"
									className="subcategory-nav-link"
									id="644ece37ae1fb061ca402f56"
									onClick={() =>
										handleSubcategoryClick("644ece37ae1fb061ca402f56")
									}
								>
									Facebook Marketing
								</Link>
							</li>
						</ul>
					</li>

					{/* Writing & Translation */}
					<li className="category-nav-li">
						<span className="category-span">
							<Link
								to="/writing-translation"
								className="category-nav-link"
								id="644e9a2eae1fb061ca402f43"
								onClick={() => handleCategoryClick("644e9a2eae1fb061ca402f43")}
							>
								Writing & Translation
							</Link>
						</span>
						<ul className="subcategory-nav-ul">
							<li className="subcategory-nav-li">
								<Link
									to="/writing-translation/translation-services"
									className="subcategory-nav-link"
									id="644ece62ae1fb061ca402f59"
									onClick={() =>
										handleSubcategoryClick("644ece62ae1fb061ca402f59")
									}
								>
									Translation Services
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/writing-translation/summarising-services"
									className="subcategory-nav-link"
									id="644eceaaae1fb061ca402f5a"
									onClick={() =>
										handleSubcategoryClick("644eceaaae1fb061ca402f5a")
									}
								>
									Summarising Services
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/writing-translation/sales-copy"
									className="subcategory-nav-link"
									id="644ecedfae1fb061ca402f5b"
									onClick={() =>
										handleSubcategoryClick("644ecedfae1fb061ca402f5b")
									}
								>
									Sales Copy
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/writing-translation/scriptwriting"
									className="subcategory-nav-link"
									id="644ecef8ae1fb061ca402f5c"
									onClick={() =>
										handleSubcategoryClick("644ecef8ae1fb061ca402f5c")
									}
								>
									Scriptwriting
								</Link>
							</li>
						</ul>
					</li>

					{/* Online Courses */}
					<li className="category-nav-li">
						<span className="category-span">
							<Link
								to="/online-courses"
								className="category-nav-link"
								id="644e9953ae1fb061ca402f40"
								onClick={() => handleCategoryClick("644e9953ae1fb061ca402f40")}
							>
								Online Courses
							</Link>
						</span>
						<ul className="subcategory-nav-ul">
							<li className="subcategory-nav-li">
								<Link
									to="/online-courses/learn-programming"
									className="subcategory-nav-link"
									id="644ecc0eae1fb061ca402f4b"
									onClick={() =>
										handleSubcategoryClick("644ecc0eae1fb061ca402f4b")
									}
								>
									Learn Programming
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/online-courses/learn-digital-marketing"
									className="subcategory-nav-link"
									id="644ecd2bae1fb061ca402f4e"
									onClick={() =>
										handleSubcategoryClick("644ecd2bae1fb061ca402f4e")
									}
								>
									Learn Digital Marketing
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/online-courses/learn-english"
									className="subcategory-nav-link"
									id="644ecd69ae1fb061ca402f4f"
									onClick={() =>
										handleSubcategoryClick("644ecd69ae1fb061ca402f4f")
									}
								>
									Learn English
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/online-courses/learn-french"
									className="subcategory-nav-link"
									id="644ecd8bae1fb061ca402f50"
									onClick={() =>
										handleSubcategoryClick("644ecd8bae1fb061ca402f50")
									}
								>
									Learn French
								</Link>
							</li>
						</ul>
					</li>

					{/* Design */}
					<li className="category-nav-li">
						<span className="category-span">
							<Link
								to="/design"
								className="category-nav-link"
								id="644e9a8eae1fb061ca402f44"
								onClick={() => handleCategoryClick("644e9a8eae1fb061ca402f44")}
							>
								Design
							</Link>
						</span>
						<ul className="subcategory-nav-ul">
							<li className="subcategory-nav-li">
								<Link
									to="/design/book-cover-design"
									className="subcategory-nav-link"
									id="644ecd8bae1fb061ca402f50"
									onClick={() =>
										handleSubcategoryClick("644ecf28ae1fb061ca402f5f")
									}
								>
									Book Cover Design
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/design/business-card-design"
									className="subcategory-nav-link"
									id="644ecf65ae1fb061ca402f60"
									onClick={() =>
										handleSubcategoryClick("644ecf65ae1fb061ca402f60")
									}
								>
									Business Card Design
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/design/presentation-design"
									className="subcategory-nav-link"
									id="644ecf87ae1fb061ca402f61"
									onClick={() =>
										handleSubcategoryClick("644ecf87ae1fb061ca402f61")
									}
								>
									Presentation Design
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/design/photo-editing-services"
									className="subcategory-nav-link"
									id="644ecfa6ae1fb061ca402f62"
									onClick={() =>
										handleSubcategoryClick("644ecfa6ae1fb061ca402f62")
									}
								>
									Photo Editing Services
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavbarMenu;
