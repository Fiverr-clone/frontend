import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/login/login";
import Join from "./pages/join/join";
import AddService from "./pages/addService/addService";
import EmailVerify from "./pages/emailVerification/emailVerify";
import SubCat from "./pages/servicesPage/subCategoryPage";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Cat from "./pages/servicesPage/cat";
import HomePage from "./pages/home/home";
import CategoryService from "./pages/servicesPage/categoryServices";
import { ChakraProvider } from "@chakra-ui/react";

const client = new ApolloClient({
	uri: "http://localhost:8000/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<div className="App">
			<ChakraProvider>
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
							element={<SubCat />}
						/>
						<Route
							path="/digital-marketing/:subcategoryName"
							element={<SubCat />}
						/>
						<Route
							path="/writing-translation/:subcategoryName"
							element={<SubCat />}
						/>
						<Route
							path="/online-courses/:subcategoryName"
							element={<SubCat />}
						/>
						<Route path="/design/:subcategoryName" element={<SubCat />} />

						<Route path="/:categoryName" element={<CategoryService />} />
						{/* <Route path="/:categoryName" element={<Cat />} /> */}
					</Routes>
				</ApolloProvider>
			</ChakraProvider>
		</div>
	);
}

export default App;
