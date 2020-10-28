import { MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import MentorCard from "../MentorCard/MentorCard";
import "./MentorSection.css";
import { experts } from "../../data/Experts";

function MentorSection() {
	const [select, setSelect] = useState("best-match");

	return (
		<div className="mentor-section">
			<div className="top-bar">
				<h3>Featured Experts</h3>
				<Select
					variant="outlined"
					value={select}
					onChange={(e) => setSelect(e.target.value)}
				>
					<MenuItem value="best-match">Best Match</MenuItem>
					<MenuItem value="rating">Rating</MenuItem>
					<MenuItem value="free-sessions">Free Sessions</MenuItem>
				</Select>
			</div>
			<div className="mentor-list">
				{experts.map((expert) => (
					<MentorCard profile={expert} key={expert.id} />
				))}
			</div>
		</div>
	);
}

export default MentorSection;
