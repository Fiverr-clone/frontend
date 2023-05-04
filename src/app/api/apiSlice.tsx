import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { login, logout } from "../../features/actions/authSlice";
import { RootState } from "../store";

// const baseQuery = fetchBaseQuery({
// 	baseUrl: "http://localhost:3000",
// 	credentials: "include",
// 	prepareHeaders: (headers, { getState }) => {
// 		const token = (getState() as RootState).auth.token;
// 		if (token) {
// 			headers.set("authorization", `Bearer ${token}`);
// 		}
// 		return headers;
// 	},
// });

// const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
// 	let result = await baseQuery(args, api, extraOptions);

// 	if (result?.error?.originalStatus === 403) {
// 		console.log("sending refresh token");
// 		//send refresh token to get new accessToken
// 		const refreshResult = await baseQuery("/api/refresh", api, extraOptions);
// 		console.log(refreshResult);
// 		if (refreshResult?.data) {
// 			const user = apigetState().auth.user;
// 			//store the new token
// 			dispatch(login({ ...refreshResult.data, user }));
// 			// retry the original query with the new accessToken
// 			result = await baseQuery(args, api, extraOptions);
// 		} else {
// 			api.dispatch(logout());
// 		}
// 	}
// };
