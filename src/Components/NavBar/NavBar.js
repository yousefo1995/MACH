import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack, Box, Container } from "@mui/material";
import MenuDrawer from "./MenuDrawer";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            {/* <Stack flexDirection="row" width="100%" justifyContent="center">
            <Stack
              flexDirection="row"
              sx={{
                width: "100%",
                maxWidth: { xl: "1400px" },
                justifyContent: "center",
              }}
            > */}
            {/* or use container =================================================== */}
            <Stack width="36%">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Logo
              </Typography>
            </Stack>
            <Stack
              flexDirection="row"
              width="64%"
              display={{ xs: "none", lg: "flex" }}
              justifyContent="flex-end"
              gap={1}
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
              width="64%"
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                // sx={{ mr: 1 }} // change it to 0 margine
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
            {/* </Stack>
          </Stack> */}
          </Toolbar>
        </Container>
      </AppBar>
      <MenuDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

export default NavBar;
