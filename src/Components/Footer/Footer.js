import React from "react";
import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box bgcolor="primary.main">
      <Container maxWidth="xl">
        <Stack
          color="#fff"
          flexDirection={{ sx: "column", lg: "row" }}
          paddingTop="28px"
          paddingLeft="40px"
          paddingRight="40px"
          paddingBottom="16px"
          alignItems={{ xs: "center", lg: "flex-start" }}
        >
          <Stack
            gap={1}
            order={{ xs: "4 ", lg: "-1" }}
            width="35%"
            paddingTop="38px"
            alignItems={{ xs: "center", lg: "flex-start" }}
          >
            {/* <Typography variant="h1">LOGO</Typography> */}
            <Typography
              variant="body2"
              textAlign={{ xs: "center", lg: "start" }}
            >
              © Copyright 2023 Mishal Abdulmohsin Alhokair Ltd. Co.
            </Typography>
            <Typography
              variant="body2"
              textAlign={{ xs: "center", lg: "start" }}
            >
              Address: 11584, Riyadh, Kingdom of Saudi Arabia.
            </Typography>
            <Typography variant="body2">P.O. Box: 57750</Typography>
            <Typography variant="body2">Tel: +4444 413 11 966</Typography>
          </Stack>
          <Stack alignItems="center" width="35%">
            <Typography variant="h6" fontWeight="600" paddingBottom={2}>
              Menu
            </Typography>
            <Stack
              flexDirection={{ xs: "column", lg: "row" }}
              width="80%"
              justifyContent="space-around"
              gap={{ xs: 1, lg: 0 }}
            >
              <Stack alignItems="center" gap={1}>
                <Link
                  component="button"
                  variant="body1"
                  color="#fff"
                  underline="hover"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </Link>
                <Link
                  component="button"
                  variant="body1"
                  color="#fff"
                  underline="hover"
                  order={{ xs: 3, lg: 2 }}
                  onClick={() => {
                    navigate("/aboutus");
                  }}
                >
                  About us
                </Link>{" "}
                <Link
                  component="button"
                  variant="body1"
                  color="#fff"
                  underline="hover"
                  order={{ xs: 2, lg: 3 }}
                  onClick={() => {
                    navigate("/services");
                  }}
                >
                  services
                </Link>
              </Stack>
              <Stack alignItems="center" gap={1}>
                <Link
                  component="button"
                  variant="body1"
                  color="#fff"
                  underline="hover"
                  onClick={() => {
                    navigate("/products");
                  }}
                >
                  products
                </Link>{" "}
                <Link
                  component="button"
                  variant="body1"
                  color="#fff"
                  underline="hover"
                  onClick={() => {
                    navigate("/contactUs");
                  }}
                >
                  contact us
                </Link>{" "}
                <Link
                  component="button"
                  variant="body1"
                  color="#fff"
                  underline="hover"
                  onClick={() => {
                    navigate("/ourWork");
                  }}
                >
                  our work
                </Link>
              </Stack>
            </Stack>
            <Stack
              flexDirection="row"
              width="100%"
              justifyContent="center"
              paddingTop={4}
            >
              <IconButton color="iconFooter">
                <FacebookIcon />
              </IconButton>
              <IconButton color="iconFooter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="iconFooter">
                <InstagramIcon />
              </IconButton>
              <IconButton color="iconFooter">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="iconFooter">
                <WhatsAppIcon />
              </IconButton>{" "}
            </Stack>
          </Stack>
          <Stack
            width="30%"
            order={{ xs: "-1 ", lg: "4" }}
            alignItems={{ xs: "center", lg: "flex-end" }}
            paddingTop={4}
            paddingBottom={{ xs: 2, lg: 0 }}
          >
            <Typography variant="h1" paddingBottom={1}>
              LOGO
            </Typography>
            <Stack alignItems="flex-end" display={{ xs: "none", lg: "flex" }}>
              <Typography variant="subtitle2">شركة مشعل عبدالمحسن </Typography>
              <Typography variant="subtitle2">الحكير المحدودة</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
