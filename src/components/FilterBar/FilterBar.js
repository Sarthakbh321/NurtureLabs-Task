import React, { useState } from "react";
import "./FilterBar.css";
import FilterInput from "../FilterInput/FilterInput";

function FilterBar() {
	const [expertFilters, setExpertFilters] = useState(["Strategy", "Hello"]);

	return (
		<div className="filter-bar">
			<h3>Filters</h3>
			<div className="filter-div">
				<div className="m5-bottom">
					<h5 className="light-gray">EXPERTISE</h5>
					<FilterInput
						data={expertFilters}
						setData={setExpertFilters}
					/>
				</div>
				<div className="m5-bottom">
					<h5 className="light-gray">FOCUS AREA</h5>
				</div>
				{/* <input type="text" className="input-field" /> */}
			</div>
		</div>
	);
}

export default FilterBar;
