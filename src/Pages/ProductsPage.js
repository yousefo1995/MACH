import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "../Components/ProductsPageComponents/ProductCard";
import bgImage from "../Components/images/bgImage.jpg";

const productsData = [
  {
    name: "digitalSignage",
    enName: "Digital Signage",
    arName: "اللوحات الرقمية",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/Products%2FDigitalSignage1.jpg?alt=media&token=62898348-cdf2-4af3-b80a-669e42a40b6b",
  },
  {
    name: "DigitalShelf",
    enName: "Digital Shelf",
    arName: "الرفوف الرقمية",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/Products%2FDigital-Shelf-AI.jpg?alt=media&token=5aae3dfe-cee2-4510-a49f-b3d7af09fc9a",
  },
  {
    name: "transparentScreen",
    enName: "Transparent Screens",
    arName: "الشاشات الشفافة",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/Products%2Ftransparent-screen-AI.jpg?alt=media&token=1566b729-d380-4b30-b4d6-28f6b8bdebef",
  },
  {
    name: "ledVideoScreen",
    enName: "LED Video Screen",
    arName: "شاشات الحائط داخلية وخارجيه",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/Products%2FLED-Screen-AI2.jpg?alt=media&token=d6e6a401-258a-4bbd-b8f8-bf987cbc360e",
  },
  {
    name: "smartTable",
    enName: "Smart Tables",
    arName: "الطاولات الذكية",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/Products%2FsmartTable.jpg?alt=media&token=ee13d2a3-a899-4e8b-a3ca-b9ae82809842",
  },
  {
    name: "inkCatridges",
    enName: "Ink cartridges",
    arName: "خراطيش الحبر",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/Products%2FInk%20cartridges1.jpg?alt=media&token=0a2cff23-5921-49ac-a1e8-ecd4a64c8426",
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
