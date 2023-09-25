import React from "react";
import { Drawer, List, ListItem, Typography } from "@mui/material";

const MenuDrawer = ({ isOpen, toggleDrawer }) => {
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
        <ListItem button>
          <Typography padding={1} color="inherit">
            Home
          </Typography>
        </ListItem>
        <ListItem button>
          <Typography padding={1} color="inherit">
            About us
          </Typography>
        </ListItem>
        <ListItem button>
          <Typography padding={1} color="inherit">
            Services
          </Typography>
        </ListItem>
        <ListItem button>
          <Typography padding={1} color="inherit">
            Products
          </Typography>
        </ListItem>
        <ListItem button>
          <Typography padding={1} color="inherit">
            Our work
          </Typography>
        </ListItem>
        <ListItem button>
          <Typography padding={1} color="inherit">
            Contact us
          </Typography>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
