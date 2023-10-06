import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import bgImage from "../Components/images/bgImage.jpg";
import digitalSignage from "../Components/images/products/DigitalSignage1.jpg";
import inkCatridges from "../Components/images/products/Ink cartridges1.jpg";
import ledVideoScreen from "../Components/images/products/LEDVideoScreen.jpeg";
import transparentScreen from "../Components/images/products/TransparentScreen.png";
import smartTable from "../Components/images/products/smartTable.jpg";

const productsData = [
  {
    name: "digitalSignage",
    enName: "Digital Signage",
    arName: "اللوحات الرقمية",
    url: digitalSignage,
  },
  {
    name: "",
    enName: "Digital Shelf",
    arName: "الرفوف الرقمية",
    url: digitalSignage,
  },
  {
    name: "transparentScreen",
    enName: "Transparent Screens",
    arName: "الشاشات الشفافة",
    url: transparentScreen,
  },
  {
    name: "ledVideoScreen",
    enName: "LED Video Screen",
    arName: "شاشات الحائط داخلية وخارجيه",
    url: ledVideoScreen,
  },
  {
    name: "smartTable",
    enName: "Smart Tables",
    arName: "الطاولات الذكية",
    url: smartTable,
  },
  {
    name: "inkCatridges",
    enName: "Ink cartridges",
    arName: "خراطيش الحبر",
    url: inkCatridges,
  },
];

const ProductsPage = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="lg">
        <Stack alignItems="center" my={6}>
          <Typography variant="h3" fontWeight="700" color="primary.main">
            <span style={{ borderBottom: "8px solid", borderRadius: "8px" }}>
              {" "}
              Our Products
            </span>
          </Typography>
          <Stack
            py={10}
            flexDirection="row"
            justifyContent="center"
            flexWrap="wrap"
            gap={3}
          >
            {productsData.map((item) => (
              <Paper
                elevation={2}
                sx={{ maxWidth: "280px", bgcolor: "primary.light" }}
              >
                <Stack alignItems="center" pb={2} color="#fff">
                  <img
                    src={item.url}
                    alt=""
                    width="100%"
                    height="280px"
                    style={{ objectFit: "cover" }}
                  />
                  <Typography my={2} variant="h2">
                    {item.enName}
                  </Typography>
                  <Typography variant="h2" dir="rtl">
                    {item.arName}
                  </Typography>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProductsPage;
