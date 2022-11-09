import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";

import VpnKeyIcon from "@mui/icons-material/VpnKey";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import PersonIcon from '@mui/icons-material/Person';


const LoginField = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box
        sx={{

          pt: 1,
        }}
      >
        <Box
          sx={{
            borderRadius: 2,
            border: 1,
            width: "30vh",
            p: 1,
            m: "auto",
          }}
        >
          <TextField
            id="input-with-sx"
            placeholder="Username"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
            
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{

          pt: 3,
        }}
      >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          borderRadius: 2,
          border: 1,
          width: "30vh",
          p: 1,
          m: "auto",
        }}
      >
        <InputLabel sx={{ pr: 1 }}>
          {" "}
          <VpnKeyIcon />
        </InputLabel>
        <Input
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          disableUnderline="true"
          placeholder="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
      </Box>
    </>
  );
};

export default LoginField;
