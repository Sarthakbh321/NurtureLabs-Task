import React, { useState } from "react";
import "./FilterBar.css";
import FilterInput from "../FilterInput/FilterInput";

function FilterBar() {
	const [expertFilters, setExpertFilters] = useState(["Strategy", "Hello"]);
	const [focusFilters, setFocusFilters] = useState(["Focus Area"]);

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
					<FilterInput
						data={focusFilters}
						setData={setFocusFilters}
					/>
				</div>
				<div className="m5-bottom">
					<h5 className="light-gray">RATINGS</h5>
				</div>
			</div>
		</div>
	);
}

export default FilterBar;
