import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/login/login";
import Join from "./pages/join/join";
import AddGig from "./pages/addGig/addGig";
import EmailVerify from "./pages/emailVerification/emailVerify";
import SubCategoryPage from "./pages/gigsPage/subCategoryPage";
import UserServicesPage from "./pages/gigsPage/userGigs";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import CategoryPage from "./pages/gigsPage/categoryPage";
import HomePage from "./pages/home/home";
import NavAfterLogin from "./components/navAfterLogin/navAfterLogin";

const client = new ApolloClient({
	uri: "http://localhost:8000/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<div className="App">
			<ApolloProvider client={client}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/user" element={<UserServicesPage />} />
					<Route path="/navlogin" element={<NavAfterLogin />} />
					<Route path="/join" element={<Join />} />
					<Route path="/signin" element={<Login />} />
					<Route path="/add-gig" element={<AddGig />} />
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
				</Routes>
			</ApolloProvider>
		</div>
	);
}

export default App;
