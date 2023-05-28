import { FunctionComponent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbarMenu.css";

interface NavbarMenuProps {}

const NavbarMenu: FunctionComponent<NavbarMenuProps> = () => {
	const navigate = useNavigate();
	const [categoryId, setCategoryId] = useState(null);
	const [subcategoryId, setSubCategoryId] = useState(null);

	const handleMenuItemClick = (event: any) => {
		const clickedElement = event.target;
		const categoryId = clickedElement.id;
		setCategoryId(categoryId);
		console.log(categoryId);
		navigate(`/category/${categoryId}`);
	};
	const handleSubMenuItemClick = (event: any) => {
		const clickedElement = event.target;
		const subcategoryId = clickedElement.id;
		setSubCategoryId(subcategoryId);
		console.log(subcategoryId);
		navigate(`/subcategory/${subcategoryId}`);
	};

	const handleCategoryClick = (categoryId: string, url: string) => {
		localStorage.setItem("catId", categoryId);
		window.location.href = url;
	};
	const handleSubcategoryClick = (subcategoryId: string, url: string) => {
		localStorage.setItem("subCatId", subcategoryId);
		window.location.href = url;
	};

	return (
		<>
			<nav className="navbar-menu">
				<ul className="category-nav-ul">
					{/* Programming & Development */}
					<li className="category-nav-li">
						<span
							className="category-span"
							onClick={handleMenuItemClick}
							id="644e9aaaae1fb061ca402f45"
						>
							Programming & Development
						</span>
						<ul className="subcategory-nav-ul">
							<li
								className="subcategory-nav-li"
								id="644ecff1ae1fb061ca402f65"
								onClick={handleSubMenuItemClick}
							>
								HTML & CSS Programming
							</li>
							<li
								className="subcategory-nav-li"
								id="644ed044ae1fb061ca402f66"
								onClick={handleSubMenuItemClick}
							>
								Java and .NET Programming
							</li>
							<li
								className="subcategory-nav-li"
								id="644ed06dae1fb061ca402f67"
								onClick={handleSubMenuItemClick}
							>
								PHP Programming
							</li>
							<li
								className="subcategory-nav-li"
								id="644ed08cae1fb061ca402f68"
								onClick={handleSubMenuItemClick}
							>
								Python Programming
							</li>
							<li
								className="subcategory-nav-li"
								id="644ed0abae1fb061ca402f69"
								onClick={handleSubMenuItemClick}
							>
								Mobile Application Programming
							</li>
							<li
								className="subcategory-nav-li"
								id="644ed0d2ae1fb061ca402f6a"
								onClick={handleSubMenuItemClick}
							>
								WordPress Services
							</li>
						</ul>
					</li>

					{/* Digital Marketing */}
					<li className="category-nav-li">
						<span
							className="category-span"
							onClick={handleMenuItemClick}
							id="644e99fdae1fb061ca402f42"
						>
							Digital Marketing
						</span>
						<ul className="subcategory-nav-ul">
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ecdb4ae1fb061ca402f53"
							>
								Website Ads
							</li>
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ecdf4ae1fb061ca402f54"
							>
								Content Marketing
							</li>
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ece18ae1fb061ca402f55"
							>
								Instagram Marketing
							</li>
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ece37ae1fb061ca402f56"
							>
								Facebook Marketing
							</li>
						</ul>
					</li>

					{/* Writing & Translation */}
					<li className="category-nav-li">
						<span
							className="category-span"
							id="644e9a2eae1fb061ca402f43"
							onClick={handleMenuItemClick}
						>
							Writing & Translation
						</span>
						<ul className="subcategory-nav-ul">
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ece62ae1fb061ca402f59"
							>
								Translation Services
							</li>
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644eceaaae1fb061ca402f5a"
							>
								Summarising Services
							</li>
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ecedfae1fb061ca402f5b"
							>
								Sales Copy
							</li>
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ecef8ae1fb061ca402f5c"
							>
								Scriptwriting
							</li>
						</ul>
					</li>

					{/* Online Courses */}
					<li className="category-nav-li">
						<span
							className="category-span"
							onClick={handleMenuItemClick}
							id="644e9953ae1fb061ca402f40"
						>
							Online Courses
						</span>
						<ul className="subcategory-nav-ul">
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ecc0eae1fb061ca402f4b"
							>
								Learn Programming
							</li>
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ecd2bae1fb061ca402f4e"
							>
								Learn Digital Marketing
							</li>
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ecd69ae1fb061ca402f4f"
							>
								Learn English
							</li>
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ecd8bae1fb061ca402f50"
							>
								Learn French
							</li>
						</ul>
					</li>

					{/* Design */}
					<li className="category-nav-li">
						<span
							className="category-span"
							onClick={handleMenuItemClick}
							id="644e9a8eae1fb061ca402f44"
						>
							Design
						</span>
						<ul className="subcategory-nav-ul">
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ecd8bae1fb061ca402f50"
							>
								Book Cover Design
							</li>
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ecf65ae1fb061ca402f60"
							>
								Business Card Design
							</li>
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ecf87ae1fb061ca402f61"
							>
								Presentation Design
							</li>
							<li
								className="subcategory-nav-li"
								onClick={handleSubMenuItemClick}
								id="644ecfa6ae1fb061ca402f62"
							>
								Photo Editing Services
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavbarMenu;
