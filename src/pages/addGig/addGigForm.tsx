import { FunctionComponent, useState, useEffect } from "react";
import "./addGig.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

interface AddGigFormProps {}

interface Category {
	_id: string;
	categoryName: string;
}
interface SubCategory {
	_id: string;
	category_id: string;
	name: string;
}
const AddGigForm: FunctionComponent<AddGigFormProps> = () => {
	const navigate = useNavigate();
	const token = Cookies.get("token");
	const userid = Cookies.get("userId");
	const [categories, setCategories] = useState<Category[]>([]);
	const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
	const [fileData, setFileData] = useState("");
	const [images, setFile] = useState("");
	const [Servicedata, setServiceData] = useState({
		title: "",
		category: "",
		subCategory: "",
		description: "",
		price: "",
		deliveryTime: "",
		buyerInstruction: "",
	});
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch("http://localhost:8000/api/categories");
				const data = await response.json();
				setCategories(data);
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
		};
		fetchCategories();
	}, []);

	const handleCategoryChange = async (e: any) => {
		const categoryId = e.target.value;
		try {
			const response = await axios.get(
				`http://localhost:8000/api/sub-category/${categoryId}`
			);
			setSubCategories(response.data);
		} catch (error) {
			console.error("Error fetching sub-categories:", error);
		}
		setServiceData({
			...Servicedata,
			category: categoryId,
			subCategory: "",
		});
	};

	const handleFileChange = (e: any) => {
		setFileData(e.target.files[0]);
		setFile(e.target.value);
	};

	const handleChange = (e: any) => {
		const value = e.target.value;
		if (e.target.name === "category") {
			const selectedCategory = categories.find(
				(category) => category._id === value
			);
			if (selectedCategory) {
				setServiceData({
					...Servicedata,
					[e.target.name]: selectedCategory._id,
					subCategory: "",
				});
			}
		} else if (e.target.name === "subCategory") {
			const selectedSubCategory = subCategories.find(
				(subCategory) => subCategory._id === value
			);
			if (selectedSubCategory) {
				setServiceData({
					...Servicedata,
					[e.target.name]: selectedSubCategory._id,
				});
			}
		} else {
			setServiceData({
				...Servicedata,
				[e.target.name]: value,
			});
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const userServiceData = new FormData();
		userServiceData.append("title", Servicedata.title);
		userServiceData.append("category", Servicedata.category);
		userServiceData.append("subCategory", Servicedata.subCategory);
		userServiceData.append("description", Servicedata.description);
		userServiceData.append("price", Servicedata.price);
		userServiceData.append("deliveryTime", Servicedata.deliveryTime);
		userServiceData.append("buyerInstruction", Servicedata.buyerInstruction);
		userServiceData.append("image", fileData);
		axios
			.post("http://localhost:8000/api/add-service", userServiceData, {
				headers: {
					Authorization: `${token}`,
				},
			})
			.then((response) => {
				if (response.status === 201) {
					Swal.fire({
						icon: "success",
						title: "Gig added",
						showConfirmButton: true,
					});
				}
				navigate(`/mygigs/${userid}`);
			})
			.catch((error) => {
				if (error.response.status === 500) {
					console.log(error);
				} else {
					console.log("An error occurred:", error);
				}
			});
	};

	return (
		<>
			<div>
				<form onSubmit={handleSubmit} className="AddService-form">
					{/* Input AddService */}
					<div className="input-AddService">
						<p>Title</p>
						<input
							type="text"
							name="title"
							value={Servicedata.title}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a title"
							required
						/>
						<p>Category</p>
						<select
							id="category"
							name="category"
							value={Servicedata.category}
							onChange={(e) => {
								handleCategoryChange(e);
								handleChange(e);
							}}
							className="input-field"
							required
						>
							<option value="">Select a category</option>
							{categories.map((category) => (
								<option key={category._id} value={category._id}>
									{category.categoryName}
								</option>
							))}
						</select>
						<p>Sub-Category</p>
						<select
							name="subCategory"
							value={Servicedata.subCategory}
							onChange={handleChange}
							className="input-field"
							required
						>
							<option value="">Select a sub-category</option>
							{subCategories.map((subCategory) => (
								<option key={subCategory._id} value={subCategory._id}>
									{subCategory.name}
								</option>
							))}
						</select>
						<p>Description</p>
						<textarea
							maxLength={2500}
							name="description"
							value={Servicedata.description}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a description"
							required
						/>
						<p>Image</p>
						{/* <input
							type="file"
							id="image"
							name="image"
							onChange={(e: any) => setImageFile(e.target.files[0])}
							required
						/> */}
						<input
							type="file"
							value={images}
							name="file"
							accept="image/*"
							id="image"
							onChange={handleFileChange}
							required
						/>

						<p>Price</p>
						<input
							type="number"
							name="price"
							value={Servicedata.price}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a price"
							required
						/>
						<p>Delivery time</p>
						<input
							type="number"
							name="deliveryTime"
							value={Servicedata.deliveryTime}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a delivery time (days)"
							required
						/>

						<p>Buyer Instructions</p>
						<textarea
							maxLength={1500}
							name="buyerInstruction"
							value={Servicedata.buyerInstruction}
							onChange={handleChange}
							className="input-field"
							placeholder="Add buyer Instructions"
						/>

						<button type="submit" className="AddService-btn">
							Add Gig
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
export default AddGigForm;
