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
import Gig from "./pages/Gig/Gig";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import NotFound from "./pages/NotFound/NotFound";
import Orders from "./pages/Orders/Orders";
import Purchases from "./pages/Purchases/Purchases";
import Message from "./pages/Message/Message";
import Conversations from "./pages/Conversations/Conversations";

const client = new ApolloClient({
	uri: "http://localhost:8000/graphql",
	cache: new InMemoryCache(),
});

function App() {
	const tokenCookie = Cookies.get("token");
	const tokenRedux = useSelector((state: any) => state.auth.token);

	if (!tokenCookie || !tokenRedux) {
		return (
			<ApolloProvider client={client}>
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/signin" element={<Login />} />
					<Route path="/join" element={<Join />} />
					<Route path="/subcategory/:id" element={<SubCategoryPage />} />
					<Route path="/category/:id" element={<CategoryPage />} />
					<Route path="/gig/:id" element={<Gig />} />
					<Route path="/:id/verify/:emailToken" element={<EmailVerify />} />
				</Routes>
			</ApolloProvider>
		);
	}
	return (
		<div className="App">
			<ApolloProvider client={client}>
				<Routes>
					{/* need to be logged in */}
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/signin" element={<HomePage />} />
					<Route path="/join" element={<HomePage />} />
					<Route path="/subcategory/:id" element={<SubCategoryPage />} />
					<Route path="/category/:id" element={<CategoryPage />} />
					<Route path="/gig/:id" element={<Gig />} />
					<Route path="/:id/verify/:emailToken" element={<EmailVerify />} />
					<Route path="/add-gig" element={<AddGig />} />
					<Route path="/mygigs/:id" element={<UserServicesPage />} />
					<Route path="/myorders/:id" element={<Orders />} />
					<Route path="/mypurchases/:id" element={<Purchases />} />
					<Route path="/repertory/:id" element={<Conversations />} />
					<Route path="/conversation/:conversationId" element={<Message />} />
					{/* <Route path="/conversation/:id" element={<Conversations />} /> */}
				</Routes>
			</ApolloProvider>
		</div>
	);
}

export default App;
