import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import "./FilterBar.css";

function FilterBar() {
	return (
		<div className="filter-bar">
			<h3>Filters</h3>
			<div className="filter-div">
				<h5 className="light-gray">EXPERTISE</h5>

				<input type="text" className="input-field" />
			</div>
		</div>
	);
}

export default FilterBar;
