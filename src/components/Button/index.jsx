import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonMUI({children, onClick}) {
  return (
    <Box sx={{ '& button': { m: 1, marginTop: '15px' } }}>

        <Button variant="contained" size="large" width='50%' onClick={onClick}>
          {children}
        </Button>

    </Box>
  );
}
