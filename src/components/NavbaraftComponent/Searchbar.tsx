import React from "react";
import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Library } from "@fortawesome/fontawesome-svg-core";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
	return (
		<div>
			<input
				type="text"
				placeholder="What service are you looking for you today?"
				style={{ fontSize: "16px" }}
			/>

			<button
				style={{
					backgroundColor: "black",
					border: "1px solid black",
					padding: "1px",
					borderRadius: "5px",
				}}
			>
				<FontAwesomeIcon
					icon="search"
					style={{ color: "white", fontSize: "16px" }}
				/>
			</button>
		</div>
	);
};

export default SearchBar;
