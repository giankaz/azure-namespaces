import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SelectMUI({selectValue, selectChangeFunction, options, selectInfo}) {

  return (
    <Box sx={{ minWidth: '300px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{color: 'var(--white) !important', backgroundColor: 'var(--grey)'}}>{selectInfo}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          sx={{border: '1px solid var(--blue)', color: 'var(--white)'}}
          id="demo-simple-select"
          value={selectValue}
          label={selectInfo}
          onChange={(e) => selectChangeFunction(e.target.value)}
        >
         {options.map((option, index) => <MenuItem key={index} value={option}>{option}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
