import { FunctionComponent } from "react";
import React from "react";
import Logo from "../../assets/FiverrLogoWhite.svg";
import { Link } from "react-router-dom";
import "./navbarMenu.css";

interface NavbarMenuProps {}

const NavbarMenu: FunctionComponent<NavbarMenuProps> = () => {
	return (
		<>
			<nav className="navbar-menu">
				<div className="category-nav">
					<ul className="category-nav-ul">
						{/* Online Courses */}
						<li className="category-nav-li">
							Online Courses
							<ul className="subcategory-nav-ul">
								<li className="subcategory-nav-li">
									<Link
										to="/online-courses/learn-programming"
										className="category-nav-link"
									>
										Learn Programming
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/online-courses/learn-digital-marketing"
										className="category-nav-link"
									>
										Learn Digital Marketing
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/online-courses/learn-english"
										className="category-nav-link"
									>
										Learn English
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/online-courses/learn-french"
										className="category-nav-link"
									>
										Learn French
									</Link>
								</li>
							</ul>
						</li>
						{/* Digital Marketing */}
						<li className="category-nav-li">
							Digital Marketing
							<ul className="subcategory-nav-ul">
								<li className="subcategory-nav-li">
									<Link
										to="/digital-marketing/website-ads"
										className="category-nav-link"
									>
										Website Ads
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/digital-marketing/content-marketing"
										className="category-nav-link"
									>
										Content Marketing
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/digital-marketing/instagram-marketing"
										className="category-nav-link"
									>
										Instagram Marketing
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/digital-marketing/facebook-marketing"
										className="category-nav-link"
									>
										Facebook Marketing
									</Link>
								</li>
							</ul>
						</li>
						{/* Writing & Translation */}
						<li className="category-nav-li">
							Writing & Translation
							<ul className="subcategory-nav-ul">
								<li className="subcategory-nav-li">
									<Link
										to="/writing-translation/translation-services"
										className="category-nav-link"
									>
										Translation Services
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/writing-translation/summarising-services"
										className="category-nav-link"
									>
										Summarising Services
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/writing-translation/sales-copy"
										className="category-nav-link"
									>
										Sales Copy
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/writing-translation/scriptwriting"
										className="category-nav-link"
									>
										Scriptwriting
									</Link>
								</li>
							</ul>
						</li>
						{/* Design */}
						<li className="category-nav-li">
							Design
							<ul className="subcategory-nav-ul">
								<li className="subcategory-nav-li">
									<Link
										to="/design/book-cover-design"
										className="category-nav-link"
									>
										Book Cover Design
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/design/business-card-design"
										className="category-nav-link"
									>
										Business Card Design
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/design/presentation-design"
										className="category-nav-link"
									>
										Presentation Design
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/design/photo-editing-services"
										className="category-nav-link"
									>
										Photo Editing Services
									</Link>
								</li>
							</ul>
						</li>
						{/* Programming & Development */}
						<li className="category-nav-li">
							Programming & Development
							<ul className="subcategory-nav-ul">
								<li className="subcategory-nav-li">
									<Link
										to="/programming-development/css-html-programming"
										className="category-nav-link"
									>
										CSS & HTML Programming
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/programming-development/java-dot-net-programming"
										className="category-nav-link"
									>
										Java and .NET Programming
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/programming-development/php-programming"
										className="category-nav-link"
									>
										PHP Programming
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/programming-development/python-programming"
										className="category-nav-link"
									>
										Python Programming
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/programming-development/mobile-app-programming"
										className="category-nav-link"
									>
										Mobile Application Programming
									</Link>
								</li>
								<li className="subcategory-nav-li">
									<Link
										to="/programming-development/wordpress-services"
										className="category-nav-link"
									>
										WordPress Services
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default NavbarMenu;
