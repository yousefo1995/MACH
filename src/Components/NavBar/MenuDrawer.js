import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import InventoryIcon from "@mui/icons-material/Inventory";
import whiteLogo from "../../White logo - no background.svg";

const MenuDrawer = ({ isOpen, toggleDrawer, setIsDrawerOpen }) => {
  const navigate = useNavigate();

  const onClickHandler = (route) => {
    navigate(route);
    setIsDrawerOpen(false);
  };
  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          bgcolor: "primary.main",
          color: "#fff",
          height: "100%",
          width: "250px",
        }}
      >
        <Stack>
          <ListItem button onClick={() => onClickHandler("/")}>
            <HomeIcon />
            <Typography padding={1} color="inherit">
              Home
            </Typography>
          </ListItem>
          <Divider sx={{ bgcolor: "#424242" }} />
          <ListItem button onClick={() => onClickHandler("/aboutus")}>
            <InfoIcon />
            <Typography padding={1} color="inherit">
              About us
            </Typography>
          </ListItem>
          <Divider sx={{ bgcolor: "#424242" }} />

          <ListItem button onClick={() => onClickHandler("/services")}>
            <MiscellaneousServicesIcon />
            <Typography padding={1} color="inherit">
              Services
            </Typography>
          </ListItem>
          <Divider sx={{ bgcolor: "#424242" }} />

          <ListItem button onClick={() => onClickHandler("/products")}>
            <InventoryIcon />
            <Typography padding={1} color="inherit">
              Products
            </Typography>
          </ListItem>
          <Divider sx={{ bgcolor: "#424242 " }} />

          <ListItem button onClick={() => onClickHandler("/ourWork")}>
            <WorkIcon />
            <Typography padding={1} color="inherit">
              Our work
            </Typography>
          </ListItem>
          <Divider sx={{ bgcolor: "#424242" }} />

          <ListItem button onClick={() => onClickHandler("/contactUs")}>
            <EmailIcon />
            <Typography padding={1} color="inherit">
              Contact us
            </Typography>
          </ListItem>
          <Divider sx={{ bgcolor: "#424242" }} />
        </Stack>
        <Stack width="100%" alignItems="center">
          <img src={whiteLogo} alt="Logo" style={{ width: "140px" }} />
        </Stack>
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
