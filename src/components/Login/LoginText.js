import React from 'react'
import AccountCircle from "@mui/icons-material/AccountCircle";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const LoginText = () => {
  return (
    <Box sx={{ width: "30vh", m: "auto", }}>
    <Stack spacing={2}>
      <Typography variant="h5" sx={{pt:5}}  align="center"><AccountCircle style={{ fontSize: 60 }}/></Typography>
      <Typography variant="h3" sx={{pb:3}} align="center">LOGIN</Typography>
   
    </Stack>
  </Box>
  )
}

export default LoginText