import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import bgImage from "../Components/images/bgImage.jpg";
import digitalSignage from "../Components/images/products/DigitalSignage1.jpg";
import digitalShelf from "../Components/images/products/Digital-Shelf-AI.jpg";
import inkCatridges from "../Components/images/products/Ink cartridges1.jpg";
import ledVideoScreen from "../Components/images/products/LED-Screen-AI2.jpg";
import transparentScreen from "../Components/images/products/transparent-screen-AI.jpg";
import smartTable from "../Components/images/products/smartTable.jpg";
import ProductCard from "../Components/ProductsPageComponents/ProductCard";

const productsData = [
  {
    name: "digitalSignage",
    enName: "Digital Signage",
    arName: "اللوحات الرقمية",
    url: digitalSignage,
  },
  {
    name: "DigitalShelf",
    enName: "Digital Shelf",
    arName: "الرفوف الرقمية",
    url: digitalShelf,
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack
      alignItems="center"
      sx={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="lg">
        <Stack alignItems="center" mt={4} mb={12}>
          <Typography variant="h1" fontWeight="700" color="primary">
            <span style={{ borderBottom: "8px solid", borderRadius: "8px" }}>
              {" "}
              Our Products
            </span>
          </Typography>
          <Typography
            color="primary.main"
            textAlign="center"
            mt={4}
            width="60%"
          >
            Discover our range of products, from screens to printers and tools.
            We offer solutions that work for you, ensuring efficiency and
            quality in your operations.
          </Typography>
          <Stack
            pb={10}
            pt={8}
            flexDirection="row"
            justifyContent="center"
            flexWrap="wrap"
            gap={{ xs: 3, xl: 5, xxl: 8 }}
            alignContent="center"
          >
            {productsData.map((item, index) => (
              <ProductCard
                key={index}
                name={item.name}
                enName={item.enName}
                arName={item.arName}
                img={item.url}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProductsPage;
