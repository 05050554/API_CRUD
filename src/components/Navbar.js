import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ApiIcon from "@mui/icons-material/Api";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MuiLink from "@mui/material/Link";
import { Link } from "react-router-dom";

const NavbarLeft = () => {
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown") {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography variant="h5" sx={{ pt: 3, pb: 3 }} align="center">
        Menu
      </Typography>
      <List>
        {["API_1", "API_2", "API_3", "API_4"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{ color: "black" }}
            component={Link}
            to={"/" + text}
          >
            <ListItemButton>
              <ListItemIcon>
                <ApiIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#2E3B55" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CRUD
            </Typography>
            <MuiLink sx={{pr:3}} href="/" underline="hover" color="inherit">
              HOME
            </MuiLink>
            <MuiLink href="/Login" underline="hover" color="inherit">
              LOGOUT
            </MuiLink>

          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavbarLeft;
