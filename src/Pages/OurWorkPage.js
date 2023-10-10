import { Container, Stack, Typography, Box, Paper, Grid } from "@mui/material";
import React, { useState } from "react";
import basicImage from "../Components/images/OurWorkBg.png";
import image2 from "../Components/images/Service.jpg";
import image3 from "../Components/images/contachUsCover (1).jpg";
import image4 from "../Components/images/service4.jpg";
import image5 from "../Components/images/vision2.jpg";
import image6 from "../Components/images/products/DigitalSignage1.jpg";

import GridImage from "../Components/OurWorkPageComponents/GridImage";
import SimpleSlider from "../Components/Core/Slider/SimpleSlider";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const images = [
  { url: basicImage, title: "ourWork" },
  { url: image2, title: "ourWork" },
  { url: image3, title: "ourWork" },
  { url: image4, title: "ourWork" },
  { url: image5, title: "ourWork" },
  { url: image6, title: "ourWork" },
  { url: image2, title: "ourWork" },
  { url: basicImage, title: "ourWork" },
  { url: image3, title: "ourWork" },
  { url: image4, title: "ourWork" },
  { url: basicImage, title: "ourWork" },
  { url: image3, title: "ourWork" },
];

const ImageCard = ({ img, title, onClick }) => {
  return (
    <Stack p={1}>
      <Card
        sx={{ maxWidth: { xs: "100%", md: "345" }, cursor: "pointer" }}
        onClick={onClick}
      >
        <CardMedia
          component="img"
          sx={{ height: { xs: 320, sm: 140 } }}
          image={img}
          loading="lazy"
          title={title}
        />
      </Card>
    </Stack>
  );
};

const OurWorkPage = () => {
  const [bigImage, setBigImage] = useState({
    url: basicImage,
    title: "basicImage",
  });

  const selectImageHandler = (url, title) => {
    setBigImage({ url: url, title: title });
  };

  return (
    <Stack alignItems="center">
      <Container maxWidth="xl">
        <Stack maxWidth="100%" alignItems="center" my={4}>
          <Typography variant="h1" fontWeight="700" color="primary">
            <span style={{ borderBottom: "8px solid", borderRadius: "8px" }}>
              {" "}
              Our Work
            </span>
          </Typography>
          <Typography
            color="primary.main"
            textAlign="center"
            mt={4}
            mb={10}
            width="60%"
          >
            At MAHC, we've been active! Take a look at some of our recent
            projects and see how we're making a difference in various
            industries.
          </Typography>

          <GridImage
            img1={basicImage}
            img2={image3}
            arTitle="الشاشات الداخلية"
            enTitle="Interior LED Screens"
          />
          <GridImage
            img1={basicImage}
            img2={image3}
            isLeft={true}
            arTitle="الشاشات الداخلية"
            enTitle="Interior LED Screens"
          />
          <GridImage
            img1={basicImage}
            img2={image3}
            arTitle="الشاشات الداخلية"
            enTitle="Interior LED Screens"
          />

          <Stack mb={4} width="90%" display={{ xs: "none", sm: "flex" }}>
            <Card
              elevation={10}
              sx={{
                bgcolor: "#F1F1F1",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: { xs: 320, sm: 380, ml: 564 },
                  width: "auto",
                  objectFit: "cover",
                }}
                image={bigImage.url}
                loading="lazy"
                title={bigImage.title}
              />
            </Card>
          </Stack>

          <Box
            display="flex"
            flexDirection="column"
            width={{ xs: "98%", sm: "90%" }}
            marginTop={2}
          >
            <SimpleSlider buttonHeight="50%">
              {images.map((item) => {
                return (
                  <ImageCard
                    img={item.url}
                    title={item.title}
                    key={item.title}
                    onClick={() => selectImageHandler(item.url, item.title)}
                  />
                );
              })}
            </SimpleSlider>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default OurWorkPage;
