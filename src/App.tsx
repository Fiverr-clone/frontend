import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/login/login";
import Join from "./pages/join/join";
import AddGig from "./pages/addGig/addGig";
import EmailVerify from "./pages/emailVerification/emailVerify";
import SubCategoryPage from "./pages/Gigs/subCategoryPage";
import UserServicesPage from "./pages/Gigs/userGigs";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import CategoryPage from "./pages/Gigs/categoryPage";
import HomePage from "./pages/home/home";
import NavAfterLogin from "./components/navAfterLogin/navAfterLogin";
import Gig from "./pages/Gig/Gig";
import { useParams } from "react-router-dom";

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
					<Route path="/navlogin" element={<NavAfterLogin />} />
					<Route path="/join" element={<Join />} />
					<Route path="/signin" element={<Login />} />
					<Route path="/add-gig" element={<AddGig />} />
					<Route path="/:id/verify/:emailToken" element={<EmailVerify />} />
					<Route path="/subcategory/:id" element={<SubCategoryPage />} />
					<Route path="/category/:id" element={<CategoryPage />} />
					<Route path="/gig/:id" element={<Gig />} />
					<Route path="/mygigs/:id" element={<UserServicesPage />} />
				</Routes>
			</ApolloProvider>
		</div>
	);
}

export default App;
