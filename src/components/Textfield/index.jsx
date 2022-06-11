import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputMUI({ labelText, min = 1, max = 32 }) {
	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": {
					m: 1,
					minWidth: "300px",
					border: "1px solid var(--blue)",
					borderRadius: "5px",
				},
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				required
				id="outlined-required"
				label={labelText}
				InputLabelProps={{
					style: {
						color: "var(--white)",
						backgroundColor: "var(--grey)",
					},
				}}
				InputProps={{
	
					type: "search",
					style: {
						width: "100%",
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
          maxLength: max,
          minLength: min
        }}
			/>
		</Box>
	);
}
