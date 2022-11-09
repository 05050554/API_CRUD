import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
const LoginButton = () => {
  return (
    <>
      <Box sx={{ width: "30vh", m: "auto", pt: 2 }}>
        <Button
          sx={{
            borderRadius: 2,
            border: 1,
            width: "30vh",
            p: 1,
            m: "auto",
          }}
          variant="contained"
        >
          Login
        </Button>
      </Box>
      <Box sx={{ width: "30vh", m: "auto", pt: 2 }}>
        <Typography sx={{ pb: 3 }} align="center">
          <Link href="#" underline="none">
            Forget Your Password?{" "}
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default LoginButton;
