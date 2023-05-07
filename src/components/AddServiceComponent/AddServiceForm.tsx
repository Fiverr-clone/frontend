import { FunctionComponent, useState ,useEffect} from "react";
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
const AddServiceForm: FunctionComponent<AddServiceFormProps> = ({ onError }) => {
	const [categories, setCategories] = useState<Category[]>([]);

	const [Servicedata, setServiceData] = useState({
		title: "",
        category: "",
        subCategory: "",
        description: "",
        image: "",
        price: "",
        deadline: "",
        buyerInstruction: "",
	});
    useEffect(() => {
		//const [categories, setCategories] = useState<Category[]>([]);

		// Fetch categories from the database
		const fetchCategories = async () => {
		  try {
			const response = await fetch('/api/categories'); // replace with your actual API endpoint
			const data = await response.json();
			setCategories(data);
		  } catch (error) {
			console.error('Error fetching categories:', error);
		  }
		};
	
		fetchCategories();
	  }, []);
	const [error, setError] = useState(false);
	

	const handleChange = (e: any) => {
		setError(false);
		onError(false);
		const value = e.target.value;
		setServiceData({
			...Servicedata,
			[e.target.name]: value,
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const userServiceData = {
			title: Servicedata.title,
			category: Servicedata.category,
            subCategory: Servicedata.subCategory,
            description: Servicedata.description,
            image: Servicedata.image,
            price: Servicedata.price,
            deadline: Servicedata.deadline,
            buyerInstruction: Servicedata.buyerInstruction,
		};
		axios
			.post("http://localhost:8000/api/AddService", userServiceData)
			.then((response) => {
				if (response.status === 201) {
					Cookies.set("userId", response.data.userId);
					Cookies.set("token", response.data.token);
				}
			})
			.catch((error) => {
				if (error.response.status === 500) {
					setError(true);
					onError(true);
				} else {
					console.log("An error occurred:", error.message);
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
						<div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={Servicedata.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
			
            <option
			
			key={category._id} value={category._id}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>
                        {/* <p>Category</p>
						<input
							type="text"
							name="category"
							value={Servicedata.category}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a category"
							
						/> */}
                         <p>subCategory</p>
                        <input
							type="text"
							name="subCategory"
							value={Servicedata.subCategory}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a subCategory"
							
						/>
                         <p>description</p>
                        <input
							type="text"
							name="description"
							value={Servicedata.description}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a description"
							
						/>
                         <p>Image</p>
                        <input
							type="file"
							name="image"
							value={Servicedata.image}
							onChange={handleChange}
							className="input-field"
							
							
						/>
                         <p>Price</p>
                        <input
							type="text"
							name="price"
							value={Servicedata.price}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a price"
							
						/>
                         <p>Deadline</p>
                        <input
							type="text"
							name="deadline"
							value={Servicedata.deadline}
							onChange={handleChange}
							className="input-field"
							placeholder="Choose a deadline"
							
						/>
                         <p>Buyer Instruction</p>
                        <input
							type="text"
							name="buyer Instruction"
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
