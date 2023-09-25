import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack, Box } from "@mui/material";
import MenuDrawer from "./MenuDrawer";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack width="42%">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>
          </Stack>
          <Stack
            flexDirection="row"
            width="58%"
            display={{ xs: "none", lg: "flex" }}
            justifyContent="space-between"
          >
            <Button color="inherit">Home</Button>
            <Button color="inherit">About us</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Our work</Button>
            <Button color="inherit">Contact us</Button>
          </Stack>
          <Stack
            flexDirection="row-reverse"
            display={{ xs: "flex", lg: "none" }}
            width="58%"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <MenuDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

export default NavBar;
