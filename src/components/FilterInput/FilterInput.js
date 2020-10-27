import { Chip, TextField } from "@material-ui/core";
import { Close, Search } from "@material-ui/icons";
import React from "react";

function FilterInput({ data, setData }) {
	const onDelete = (index) => {
		let newArray = [...data];
		newArray.splice(index, 1);
		setData(newArray);
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
			/>
			{data.map((filter, i) => (
				<Chip
					label={filter}
					deleteIcon={<Close style={{ color: "white" }} />}
					onDelete={() => onDelete(i)}
					style={{
						backgroundColor: i % 2 === 0 ? "#3c67e8" : "#a7cd6e",
						color: "white",
						fontWeight: 700,
						margin: "0 5px",
					}}
				/>
			))}
		</div>
	);
}

export default FilterInput;
