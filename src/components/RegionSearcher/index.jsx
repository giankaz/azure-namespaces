import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import regions from "../../regions";



export default function SelectRegion({region, setRegion}) {



	return (
		<Stack spacing={2} sx={{minWidth: '300px', width: "50%", color: "var(--white)"}}>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				disableClearable
				options={regions.map((option) => option.region)}
                onChange={(e, value) => {
                   const selectedRegion = regions.find((item) => item.region.toLowerCase() === value.toLowerCase())
                    setRegion(selectedRegion.abbreviation)
                }}
				renderInput={(params) => (
                  
					<TextField       
                        onChange={(e) =>  {
                            const selectedRegion = regions.find((item) => item.region.toLowerCase() === e.target.value.toLowerCase())
                            if (selectedRegion ) {
                                setRegion(selectedRegion.abbreviation)

                            }
                         }}
                        value={region}
						{...params}
						sx={{
							label: { color: "var(--white)", backgroundColor: 'var(--grey)',borderRadius: '10px' },
							border: "none",
							borderRadius: "6px",
							"&:hover": {
								border: "none"
							},
                            "&:focus": {
								border: "none"
							},
						}}
						label="Type or select Azure region"
                        InputLabelProps={{
                            style: {
                                color: 'var(--white)',
                            }
                        }}
						InputProps={{
                            width: '100%',
							...params.InputProps,
							type: "search",
                            style: {
							border: '1px solid var(--blue)',
							borderRadius: "none",
							"&:hover": {
								border: "none"
							},
                            "&:focus": {
								border: "none",
                              
							},
                            color: 'var(--white)',
                            padding: '10px'
                        
                         }
						}}
					/>
                
                    )}
                    />
		</Stack>
	);
}
