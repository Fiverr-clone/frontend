import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./components/loginComponent/login";
import Join from "./components/joinComponent/join";
import AddService from "./components/AddServiceComponent/AddService";
import Welcome from "./components/loginComponent/welcome";
import EmailVerify from "./components/emailVerifyComponent/emailVerify";
import SubCat from "./components/servicePage/subCategoryPage";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Cat from "./components/servicePage/cat";

const client = new ApolloClient({
	uri: "http://localhost:8000/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<div className="App">
			<ApolloProvider client={client}>
				<Routes>
					<Route path="/join" element={<Join />} />
					<Route path="/signin" element={<Login />} />
					<Route path="/add-service" element={<AddService />} />
					<Route path="/welcome" element={<Welcome />} />
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
					<Route path="/online-courses/:subcategoryName" element={<SubCat />} />
					<Route path="/design/:subcategoryName" element={<SubCat />} />

					<Route path="/:categoryName" element={<Cat />} />
				</Routes>
			</ApolloProvider>
		</div>
	);
}

export default App;
