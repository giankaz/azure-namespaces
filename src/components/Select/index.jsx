import { makeStyles } from "@material-ui/styles";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const useStyles = makeStyles({

  "& .MuiListItem-root": {
    borderTop: "1px solid rgb(3,15,252)",
    borderRadius: 8
  },
})

export default function SelectMUI({selectValue, selectChangeFunction, options, selectInfo, value, setter}) {
  const classes = useStyles()

  return (
    <Box sx={{ minWidth: '300px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{color: 'var(--white) !important', backgroundColor: 'var(--grey)'}}>{selectInfo}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          sx={{border: '1px solid var(--blue)', color: 'var(--white)'}}
          id="demo-simple-select"
          label={selectInfo}
          value={value}
          className={classes.paper}
          onChange={(e) => {
            selectChangeFunction(selectValue, e.target.value)
            setter(e.target.value)
          }}
       >
      
         {options.map((option, index) => <MenuItem key={index}     className={classes.paper} value={option}>{option}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
