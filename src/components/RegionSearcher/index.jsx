
import { makeStyles } from "@material-ui/styles";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import regions from "../../regions";

const useStyles = makeStyles({
    paper: {
      backgroundColor: 'var(--grey)',
      color: 'var(--white)'
    }
  });


export default function SelectRegion({region, setRegion}) {
    const classes = useStyles()

    useEffect(() => {
       if (region === '') {

       }
    }, [region])


	return (
		<Stack spacing={2} sx={{minWidth: '300px', width: "50%", color: "var(--white)"}}>
			<Autocomplete
				freeSolo
				id="free-solo-2-demo"
				options={regions.map((option) => option.region)}
                classes={{ paper: classes.paper }}
                onChange={(e, value) => {
                    console.log(e.target.innerText)
                    if (value) {
                        const selectedRegion = regions.find((item) => item.region.toLowerCase() === value.toLowerCase())
                        setRegion(selectedRegion.abbreviation)
                    } 


                }}
                
				renderInput={(rest) => (
                
					<TextField       
                      {...rest}
                     
                        onChange={(e) =>  {
                            const res = {...rest}
                            console.log(`🤖 ~ SelectRegion ~ ref`, res.inputProps.ref.current.value)
                            
                            const selectedRegion = regions.find((item) => item.region.toLowerCase() === e.target.value.toLowerCase())
                            if (selectedRegion ) {
                                setRegion(selectedRegion.abbreviation)

                            }
                         }}
                        
                      
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
							...rest.InputProps,
                            width: '100%',
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
