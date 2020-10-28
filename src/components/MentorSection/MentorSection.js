import { MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import "./MentorSection.css";

function MentorSection() {
	const [select, setSelect] = useState("best-match");

	return (
		<div className="mentor-section">
			<div className="top-bar">
				<h3>Featured Experts</h3>
				<Select variant="outlined" value={select}>
					<MenuItem value="best-match">Best Match</MenuItem>
					<MenuItem value="rating">Rating</MenuItem>
					<MenuItem value="free-sessions">Free Sessions</MenuItem>
				</Select>
			</div>
		</div>
	);
}

export default MentorSection;
