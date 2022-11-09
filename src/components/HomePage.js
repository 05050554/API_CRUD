import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
const HomePage = () => {
  return (
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth={false} sx={{ pt: 5 }}>
        <Typography variant="h3" fontWeight="500" sx={{ pb: 5 }} align="center">
           Welcome!
          </Typography>
          <br/>
          <Typography variant="h3" fontWeight="500" sx={{ pb: 5 }} align="center">
        Click Drawer To Start Your API Test!
          </Typography>
        </Container>
      </React.Fragment>
  )
}

export default HomePage