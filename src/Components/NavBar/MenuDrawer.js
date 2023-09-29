import React from "react";
import { Drawer, List, ListItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MenuDrawer = ({ isOpen, toggleDrawer }) => {
  const navigate = useNavigate();
  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      <List
        sx={{
          bgcolor: "primary.main",
          color: "#fff",
          height: "100%",
          width: "250px",
        }}
      >
        <ListItem button onClick={() => navigate("/")}>
          <Typography padding={1} color="inherit">
            Home
          </Typography>
        </ListItem>
        <ListItem button onClick={() => navigate("/aboutus")}>
          <Typography padding={1} color="inherit">
            About us
          </Typography>
        </ListItem>
        <ListItem button onClick={() => navigate("/services")}>
          <Typography padding={1} color="inherit">
            Services
          </Typography>
        </ListItem>
        <ListItem button onClick={() => navigate("/products")}>
          <Typography padding={1} color="inherit">
            Products
          </Typography>
        </ListItem>
        <ListItem button onClick={() => navigate("/ourWork")}>
          <Typography padding={1} color="inherit">
            Our work
          </Typography>
        </ListItem>
        <ListItem button onClick={() => navigate("/contactUs")}>
          <Typography padding={1} color="inherit">
            Contact us
          </Typography>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
