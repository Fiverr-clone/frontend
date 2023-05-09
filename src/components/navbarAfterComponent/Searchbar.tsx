import React from "react";
import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./navbarAfter.css";

const SearchBar = () => {
	return (
		<div className="search-container">
			<input
				className="search-input"
				type="text"
				placeholder="What service are you looking for you today?"
				style={{ fontSize: "16px" }}
			/>
			<button className="search-icon-btn">
				<FontAwesomeIcon className="search-icon" icon={faSearch} />
			</button>
		</div>
	);
};

export default SearchBar;
