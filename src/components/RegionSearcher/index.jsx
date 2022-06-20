import { Paper } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import regions from "../../databases/regions";


export default function SelectRegion({ region, setRegion }) {

	return (
		<Stack
			spacing={2}
			sx={{ minWidth: "300px", width: "50%", color: "var(--white)" }}
		>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				options={regions.map((option) => option.region)}
				PaperComponent={({ children }) => (
                    <Paper style={{fontFamily: 'rubik, sans-serif', background: "var(--grey)", color: 'var(--white)', fontWeight: '50' }}>{children}</Paper>
                  )}
				onChange={(e, value) => {
			
					if (value) {
						const selectedRegion = regions.find(
							(item) => item.region.toLowerCase() === value.toLowerCase()
						);
						setRegion("region", selectedRegion.abbreviation);
					}
				}}
				renderInput={(rest) => (
					<TextField
						{...rest}
						onChange={(e) => {
							/* const res = { ...rest }; */
					/* 		console.log(
								`🤖 ~ SelectRegion ~ ref`,
								res.inputProps.ref.current.value
							); */

							const selectedRegion = regions.find(
								(item) =>
									item.region.toLowerCase() === e.target.value.toLowerCase()
							);
							if (selectedRegion) {
								setRegion("region", selectedRegion.abbreviation);
							}
						}}
						sx={{
							label: {
								color: "var(--white)",
								backgroundColor: "var(--grey)",
								borderRadius: "10px",
							},
							border: "none",
							borderRadius: "6px",
							"&:hover": {
								border: "none",
							},
							"&:focus": {
								border: "none",
							},
						}}
						label="Type or select Azure region"
						InputLabelProps={{
							style: {
								color: "var(--white)",
							},
						}}
						InputProps={{
							...rest.InputProps,
							width: "100%",
							type: "search",
							style: {
								border: "1px solid var(--blue)",
								borderRadius: "none",
								"&:hover": {
									border: "none",
								},
								"&:focus": {
									border: "none",
								},
								color: "var(--white)",
								padding: "10px",
							},
						}}
					/>
				)}
			/>
		</Stack>
	);
}
