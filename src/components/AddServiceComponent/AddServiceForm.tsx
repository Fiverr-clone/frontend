import { FunctionComponent, useState, useEffect } from "react";
import "./AddService.css";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

interface AddServiceFormProps {
	onError: (value: boolean) => void;
}

interface Category {
	_id: string;
	categoryName: string;
}
interface SubCategory {
	_id: string;
	category_id: string;
	name: string;
}
const AddServiceForm: FunctionComponent<AddServiceFormProps> = ({
	onError,
}) => {
	const token = Cookies.get("token");
	const cookieUserId: string = Cookies.get("userId") || "";
	const [categories, setCategories] = useState<Category[]>([]);
	const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
	const [error, setError] = useState(false);
	const [imageFile, setImageFile] = useState("");
	const [Servicedata, setServiceData] = useState({
		userId: cookieUserId,
		title: "",
		category: "",
		subCategory: "",
		description: "",
		// image: "",
		price: "",
		deadline: "",
		buyerInstruction: "",
	});
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch("http://localhost:8000/api/categories"); // replace with your actual API endpoint
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

	const handleChange = (e: any) => {
		setError(false);
		onError(false);
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
		// userServiceData.append("userId", cookieUserId);
		userServiceData.append("title", Servicedata.title);
		userServiceData.append("category", Servicedata.category);
		userServiceData.append("subCategory", Servicedata.subCategory);
		userServiceData.append("description", Servicedata.description);
		userServiceData.append("price", Servicedata.price);
		userServiceData.append("deadline", Servicedata.deadline);
		userServiceData.append("buyerInstruction", Servicedata.buyerInstruction);
		// if (imageFile) {
		userServiceData.append("image", imageFile);
		// }
		console.log(Servicedata);
		console.log(imageFile);

		axios
			.post("http://localhost:8000/api/add-service", userServiceData, {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				if (response.status === 201) {
					console.log(response.data);
				}
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
			<div className="AddService-form-div">
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
							style={{
								border: error ? "1px solid red" : "1px solid #c5c6c9",
							}}
							required
						/>
						<label htmlFor="category">Category:</label>
						<select
							id="category"
							name="category"
							value={Servicedata.category}
							onChange={(e) => {
								handleCategoryChange(e);
								handleChange(e);
							}}
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
						>
							<option value="">Select a sub-category</option>
							{subCategories.map((subCategory) => (
								<option key={subCategory._id} value={subCategory._id}>
									{subCategory.name}
								</option>
							))}
						</select>
						<p>description</p>
						<textarea
							maxLength={100}
							name="description"
							value={Servicedata.description}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a description"
						/>
						<label htmlFor="image">Image:</label>
						<input
							type="file"
							id="image"
							name="image"
							onChange={(e: any) => setImageFile(e.target.files[0])}
						/>

						<p>Price</p>
						<input
							type="number"
							name="price"
							value={Servicedata.price}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a price"
						/>
						<p>Deadline</p>
						<input
							type="date"
							name="deadline"
							value={Servicedata.deadline}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a deadline"
						/>
						<p>Buyer Instruction</p>
						<textarea
							maxLength={150}
							name="buyerInstruction"
							value={Servicedata.buyerInstruction}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a buyer Instruction"
						/>

						<button type="submit" className="AddService-btn">
							Add Service
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
export default AddServiceForm;
