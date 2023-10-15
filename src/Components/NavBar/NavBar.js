import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack, Box, Container } from "@mui/material";
import MenuDrawer from "./MenuDrawer";
import { useNavigate } from "react-router-dom";
import logoCropped from "../images/LogoCropped.png";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }} marginBottom={{ xs: "48px", sm: "64px" }}>
      <AppBar position="fixed">
        {/* check the maxWidth  xl or xxl  ====================================================== */}
        <Container maxWidth="xxl">
          <Toolbar>
            <Stack width="36%" onClick={() => navigate("/")}>
              <img
                src={logoCropped}
                alt="Logo"
                style={{ cursor: "pointer", width: "120px" }}
              />
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
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <MenuDrawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </Box>
  );
};

export default NavBar;
