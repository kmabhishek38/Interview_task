import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function TypeText(props) {
  return (
   
    <Box
      component="form"
      sx={{
    '& > :not(style)': {   width: props.small ? '20vw': '40vw' },
      }}
      validate
      autoComplete="off"
    >
      <TextField id="outlined-basic" placeholder={props.p} variant="outlined" />
     
    </Box>
    
  )
}

export default TypeText
