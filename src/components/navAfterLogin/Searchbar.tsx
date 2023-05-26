import React from "react";
import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./navAfterLogin.css";

const SearchBar = () => {
	return (
		<div className="search-container2">
			<input
				className="search-input2"
				type="text"
				placeholder="What service are you looking for you today?"
				style={{ fontSize: "16px" }}
			/>
			<button className="search-icon-btn2">
				<FontAwesomeIcon className="search-icon2" icon={faSearch} />
			</button>
		</div>
	);
};

export default SearchBar;
