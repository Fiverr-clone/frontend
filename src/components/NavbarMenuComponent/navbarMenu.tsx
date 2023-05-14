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
								id="programming-development"
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
									id="html-css-programming"
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
									id="java-dot-net-programming"
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
									id="php-programming"
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
									id="python-programming"
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
									id="mobile-app-programming"
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
						<span className="category-span">Digital Marketing</span>
						<ul className="subcategory-nav-ul">
							<li className="subcategory-nav-li">
								<Link
									to="/digital-marketing/website-ads"
									className="subcategory-nav-link"
								>
									Website Ads
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/digital-marketing/content-marketing"
									className="subcategory-nav-link"
								>
									Content Marketing
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/digital-marketing/instagram-marketing"
									className="subcategory-nav-link"
								>
									Instagram Marketing
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/digital-marketing/facebook-marketing"
									className="subcategory-nav-link"
								>
									Facebook Marketing
								</Link>
							</li>
						</ul>
					</li>

					{/* Writing & Translation */}
					<li className="category-nav-li">
						<span className="category-span">Writing & Translation</span>
						<ul className="subcategory-nav-ul">
							<li className="subcategory-nav-li">
								<Link
									to="/writing-translation/translation-services"
									className="subcategory-nav-link"
								>
									Translation Services
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/writing-translation/summarising-services"
									className="subcategory-nav-link"
								>
									Summarising Services
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/writing-translation/sales-copy"
									className="subcategory-nav-link"
								>
									Sales Copy
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/writing-translation/scriptwriting"
									className="subcategory-nav-link"
								>
									Scriptwriting
								</Link>
							</li>
						</ul>
					</li>

					{/* Online Courses */}
					<li className="category-nav-li">
						<span className="category-span">Online Courses</span>
						<ul className="subcategory-nav-ul">
							<li className="subcategory-nav-li">
								<Link
									to="/online-courses/learn-programming"
									className="subcategory-nav-link"
								>
									Learn Programming
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/online-courses/learn-digital-marketing"
									className="subcategory-nav-link"
								>
									Learn Digital Marketing
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/online-courses/learn-english"
									className="subcategory-nav-link"
								>
									Learn English
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/online-courses/learn-french"
									className="subcategory-nav-link"
								>
									Learn French
								</Link>
							</li>
						</ul>
					</li>

					{/* Design */}
					<li className="category-nav-li">
						<span className="category-span">Design</span>
						<ul className="subcategory-nav-ul">
							<li className="subcategory-nav-li">
								<Link
									to="/design/book-cover-design"
									className="subcategory-nav-link"
								>
									Book Cover Design
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/design/business-card-design"
									className="subcategory-nav-link"
								>
									Business Card Design
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/design/presentation-design"
									className="subcategory-nav-link"
								>
									Presentation Design
								</Link>
							</li>
							<li className="subcategory-nav-li">
								<Link
									to="/design/photo-editing-services"
									className="subcategory-nav-link"
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
