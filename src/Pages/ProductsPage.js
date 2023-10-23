import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "../Components/ProductsPageComponents/ProductCard";
import bgImage from "../Components/images/bgImage.jpg";

const productsData = [
  {
    name: "digitalSignage",
    enName: "Digital Signage",
    arName: "اللوحات الرقمية",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/Products%2FDigitalSignage1.jpg?alt=media&token=8e827940-89ee-4da6-935e-47b7c8d21494",
  },
  {
    name: "DigitalShelf",
    enName: "Digital Shelf",
    arName: "الرفوف الرقمية",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/Products%2FDigital-Shelf-AI.jpg?alt=media&token=73af6c63-1a41-4d8f-b49d-cae572e6ef40",
  },
  {
    name: "transparentScreen",
    enName: "Transparent Screens",
    arName: "الشاشات الشفافة",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/Products%2Ftransparent-screen-AI.jpg?alt=media&token=fb3094c5-53c0-4254-b334-494812d52384",
  },
  {
    name: "ledVideoScreen",
    enName: "LED Video Screen",
    arName: "شاشات الحائط داخلية وخارجيه",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/Products%2FLED-Screen-AI2.jpg?alt=media&token=a815b351-0c1d-4726-80fa-a1777bdb9d96",
  },
  {
    name: "smartTable",
    enName: "Smart Tables",
    arName: "الطاولات الذكية",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/Products%2FsmartTable.jpg?alt=media&token=e26facd0-bd23-48e3-829d-bed0dd5ce962",
  },
  {
    name: "inkCatridges",
    enName: "Ink cartridges",
    arName: "خراطيش الحبر",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/Products%2FInk%20cartridges1.jpg?alt=media&token=b1e2c61b-ea96-4fc7-ad9a-3124c6e50059",
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
            color="secondary.dark"
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
