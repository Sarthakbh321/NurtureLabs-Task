import { Chip, TextField } from "@material-ui/core";
import { Close, Search } from "@material-ui/icons";
import React, { useState } from "react";

function FilterInput({ data, setData }) {
	const [curr, setCurr] = useState("");

	const onDelete = (index) => {
		let newArray = [...data];
		newArray.splice(index, 1);
		setData(newArray);
	};

	const handleEnter = (e) => {
		if (e.key === "Enter") {
			let newArray = data;
			newArray.push(curr);
			setCurr("");
			setData(newArray);
		}
	};

	return (
		<div>
			<TextField
				variant="outlined"
				fullWidth
				InputProps={{
					endAdornment: (
						<Search className="inp-icon" fontSize="large" />
					),
				}}
				style={{ marginBottom: "5%" }}
				onKeyPress={handleEnter}
				value={curr}
				onChange={(e) => setCurr(e.target.value)}
			/>
			{data.map((filter, i) => (
				<Chip
					key={i}
					label={filter}
					deleteIcon={<Close style={{ color: "white" }} />}
					onDelete={() => onDelete(i)}
					style={{
						backgroundColor: i % 2 === 0 ? "#3c67e8" : "#a7cd6e",
						color: "white",
						fontWeight: 700,
						margin: "2px 5px",
					}}
				/>
			))}
		</div>
	);
}

export default FilterInput;
