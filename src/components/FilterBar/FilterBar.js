import React, { useState } from "react";
import "./FilterBar.css";
import FilterInput from "../FilterInput/FilterInput";
import { Checkbox, Grid, withStyles } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";

function FilterBar() {
	const [expertFilters, setExpertFilters] = useState(["Strategy", "Hello"]);
	const [focusFilters, setFocusFilters] = useState(["Focus Area"]);

	const [checked, setChecked] = useState([false, false, false, false]);

	const handleCheckbox = (i) => {
		let arr = checked;
		arr[i] = !arr[i];
		setChecked(arr);
		console.log(arr);
	};

	const renderStars = (i) => {
		return [...Array(i)].map((star, i) => (
			<Star color="secondary" fontSize="small" />
		));
	};

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
					<Grid container spacing={0}>
						<Grid item xs={12} sm={6} className="checkbox-row">
							<RatingCheck onChange={() => handleCheckbox(3)} />
							{renderStars(5)}
						</Grid>
						<Grid item xs={12} sm={6} className="checkbox-row">
							<RatingCheck onChange={() => handleCheckbox(2)} />
							{renderStars(4)}
						</Grid>
						<Grid item xs={12} sm={6} className="checkbox-row">
							<RatingCheck onChange={() => handleCheckbox(1)} />
							{renderStars(3)}
						</Grid>
						<Grid item xs={12} sm={6} className="checkbox-row">
							<RatingCheck onChange={() => handleCheckbox(0)} />
							{renderStars(2)}
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}

export default FilterBar;

const RatingCheck = withStyles({
	root: {
		"&$checked": {
			color: green[600],
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);
