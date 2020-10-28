import React, { useState } from "react";
import "./FilterBar.css";
import FilterInput from "../FilterInput/FilterInput";
import {
	Checkbox,
	FormControlLabel,
	Grid,
	withStyles,
} from "@material-ui/core";
import { Star } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
import { languages } from "../../data/Languages";

function FilterBar() {
	const [expertFilters, setExpertFilters] = useState(["Strategy", "Hello"]);
	const [focusFilters, setFocusFilters] = useState(["Focus Area"]);

	const [checked, setChecked] = useState([false, false, false, false]);
	const [showMore, setShowMore] = useState(false);

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
			<div className="section-div">
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
							<FilterCheck onChange={() => handleCheckbox(3)} />
							{renderStars(5)}
						</Grid>
						<Grid item xs={12} sm={6} className="checkbox-row">
							<FilterCheck onChange={() => handleCheckbox(2)} />
							{renderStars(4)}
						</Grid>
						<Grid item xs={12} sm={6} className="checkbox-row">
							<FilterCheck onChange={() => handleCheckbox(1)} />
							{renderStars(3)}
						</Grid>
						<Grid item xs={12} sm={6} className="checkbox-row">
							<FilterCheck onChange={() => handleCheckbox(0)} />
							{renderStars(2)}
						</Grid>
					</Grid>
				</div>
				<div className="m5-bottom">
					<h5 className="light-gray vertical">PRICE</h5>
					<FormControlLabel control={<FilterCheck />} label="Free" />
					<br />
					<FormControlLabel
						control={<FilterCheck />}
						label="Less than $25"
					/>
					<br />
					<FormControlLabel
						control={<FilterCheck />}
						label="$25 - $50"
					/>
					<br />
					<FormControlLabel
						control={<FilterCheck />}
						label="$50 - $100"
					/>
					<br />
					<FormControlLabel
						control={<FilterCheck />}
						label="More than $100"
					/>
					<br />
				</div>
				<div className="m5-bottom ">
					<h5 className="light-gray vertical">
						SESSION AVAILABILITY
					</h5>
					<FormControlLabel
						control={<FilterCheck />}
						label="30 min"
					/>
					<br />
					<FormControlLabel
						control={<FilterCheck />}
						label="60 min"
					/>
					<br />
					<FormControlLabel
						control={<FilterCheck />}
						label="15 min"
					/>
					<br />
				</div>
				<div className="m5-bottom">
					<h5 className="light-gray vertical">LANGUAGE</h5>
					{[...Array(6)].map((x, i) => (
						<>
							<FormControlLabel
								control={<FilterCheck />}
								label={languages[i]}
							/>
							<br />
						</>
					))}
					{showMore
						? [...Array(languages.length - 6)].map((x, i) => (
								<>
									<FormControlLabel
										control={<FilterCheck />}
										label={languages[i + 6]}
									/>
									<br />
								</>
						  ))
						: null}
					<p
						className="lime-green more-link"
						onClick={() => setShowMore(!showMore)}
					>
						More
					</p>
				</div>
			</div>
		</div>
	);
}

export default FilterBar;

const FilterCheck = withStyles({
	root: {
		"&$checked": {
			color: green[600],
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} style={{ height: 15 }} />);
