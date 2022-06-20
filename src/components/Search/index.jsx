import { Paper } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useFilter } from "../../contexts/Filter";
import database from "../../databases/db";




export default function SearchBox() {

	const [allData, setAllData] = useState([]);

    const {searchValue, setSearchValue} = useFilter()


	useEffect(() => {
		const newData = [];

		for (let key in database) {
			database[key].forEach((data) => newData.push(data));
		}

		setAllData(newData);
	}, []);

	return (
		<Stack spacing={2} sx={{minWidth: '300px', width: "50%", color: "var(--white)", marginTop: '70px', marginBottom: '30px', zIndex: '1'}}>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				PaperComponent={({ children }) => (
                    <Paper style={{fontFamily: 'rubik, sans-serif', background: "var(--grey)", color: 'var(--white)', fontWeight: '50'}}>{children}</Paper>
                  )}
				disableClearable
				options={allData.map((option) => option.assetType)}
                onChange={(e, value) => setSearchValue(value)}
				renderInput={(params) => (
                  
					<TextField           
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
						{...params}
						sx={{
							label: {padding: '3px', color: "var(--white)", backgroundColor: '#292929',borderRadius: '10px', fontWeight: 'bold' },
							border: "none",
							borderRadius: "6px",
							"&:hover": {
								border: "none"
							},
                            "&:focus": {
								border: "none"
							},
							background: 'linear-gradient(to left bottom, #1e1e1e, #262627, #2e2e2f, #363639, #3e3e42) no-repeat center center fixed'
						}}
						label="Search for Asset Type"
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
