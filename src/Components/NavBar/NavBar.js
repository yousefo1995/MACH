import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack, Box, Container } from "@mui/material";
import MenuDrawer from "./MenuDrawer";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
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
            <Stack width="36%" onClick={() => navigate("/")}>
              {/* sx={{ cursor: "pointer" }}====================================== */}

              <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
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
              <Button onClick={() => navigate("/")} color="inherit">
                Home
              </Button>
              <Button onClick={() => navigate("/aboutus")} color="inherit">
                About us
              </Button>
              <Button onClick={() => navigate("/services")} color="inherit">
                Services
              </Button>
              <Button onClick={() => navigate("/products")} color="inherit">
                Products
              </Button>
              <Button onClick={() => navigate("/ourWork")} color="inherit">
                Our work
              </Button>
              <Button onClick={() => navigate("/contactUs")} color="inherit">
                Contact us
              </Button>
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
