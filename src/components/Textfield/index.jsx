import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputMUI({
	labelText,
	min = 1,
	max = 32,
	onChange,
	value,
	readOnly,
	shrink
}) {
	return (
		<Box
			sx={{
				"& .MuiTextField-root": {
					m: 1,
					minWidth: "300px",
					border: "1px solid var(--blue)",
					borderRadius: "5px",
				},
			}}
	
		>
			<TextField
				id="outlined-required"
				label={labelText}
				InputLabelProps={{
					style: {
						color: "var(--white)",
						backgroundColor: "var(--grey)",
					},
					shrink: shrink
				}}
				InputProps={{
					autoComplete: "off",
					onChange: onChange,
					value: value,
					type: "search",
					style: {
						width: "300px",
						borderRadius: "none",
						"&:hover": {
							border: "none",
						},
						"&:focus": {
							border: "none",
						},
						color: "var(--white)",
					},
				}}
				inputProps={{
					readOnly: readOnly,
					maxLength: max,
					minLength: min,
				}}
			/>
		</Box>
	);
}
