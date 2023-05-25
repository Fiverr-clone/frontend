import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/login/login";
import Join from "./pages/join/join";
import AddService from "./pages/addService/addService";
import EmailVerify from "./pages/emailVerification/emailVerify";
import SubCategoryPage from "./pages/servicesPage/subCategoryPage";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import CategoryPage from "./pages/servicesPage/categoryPage";
import HomePage from "./pages/home/home";

const client = new ApolloClient({
	uri: "http://localhost:8000/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<div className="App">
			<ApolloProvider client={client}>
				<Routes>
					<Route path="/ve" element={<EmailVerify />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/join" element={<Join />} />
					<Route path="/signin" element={<Login />} />
					<Route path="/add-service" element={<AddService />} />
					<Route path="/:id/verify/:emailToken" element={<EmailVerify />} />
					<Route
						path="/programming-development/:subcategoryName"
						element={<SubCategoryPage />}
					/>
					<Route
						path="/digital-marketing/:subcategoryName"
						element={<SubCategoryPage />}
					/>
					<Route
						path="/writing-translation/:subcategoryName"
						element={<SubCategoryPage />}
					/>
					<Route
						path="/online-courses/:subcategoryName"
						element={<SubCategoryPage />}
					/>
					<Route
						path="/design/:subcategoryName"
						element={<SubCategoryPage />}
					/>

					<Route path="/:categoryName" element={<CategoryPage />} />
					{/* <Route path="/:categoryName" element={<Cat />} /> */}
				</Routes>
			</ApolloProvider>
		</div>
	);
}

export default App;
