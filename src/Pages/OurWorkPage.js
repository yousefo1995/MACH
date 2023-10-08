import { Container, Stack, Typography, Box, Paper } from "@mui/material";
import React from "react";
import basicImage from "../Components/images/OurWorkBg.png";
import SimpleSlider from "../Components/Core/Slider/SimpleSlider";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const images = [
  { url: basicImage, title: "ourWork" },
  { url: basicImage, title: "ourWork" },
  { url: basicImage, title: "ourWork" },
  { url: basicImage, title: "ourWork" },
  { url: basicImage, title: "ourWork" },
  { url: basicImage, title: "ourWork" },
  { url: basicImage, title: "ourWork" },
  { url: basicImage, title: "ourWork" },
  { url: basicImage, title: "ourWork" },
  { url: basicImage, title: "ourWork" },
  { url: basicImage, title: "ourWork" },
  { url: basicImage, title: "ourWork" },
];

const ImageCard = ({ img, title }) => {
  return (
    <Stack p={1}>
      <Card sx={{ maxWidth: { xs: "100%", md: "345" } }}>
        <CardMedia
          sx={{ height: { xs: 320, sm: 140 } }}
          image={img}
          title={title}
        />
      </Card>
    </Stack>
  );
};

const OurWorkPage = () => {
  // add modal on big image click
  // add slider
  // add label to slider
  // or make it all shown as mobile screenshot whatsapp
  return (
    <Stack
      alignItems="center"
      sx={
        {
          // background: `url(${bgImage})`,
          // backgroundSize: "cover",
        }
      }
    >
      <Container maxWidth="xl">
        <Stack maxWidth="100%" alignItems="center" my={4}>
          <Typography variant="h1" fontWeight="700" color="primary" mb={12}>
            <span style={{ borderBottom: "8px solid", borderRadius: "8px" }}>
              {" "}
              Our Work
            </span>
          </Typography>

          <Stack mb={4} alignItems="center">
            <img src={basicImage} alt="" width="90%" />
          </Stack>

          <Box
            display="flex"
            flexDirection="column"
            width={{ xs: "98%", sm: "90%" }}
            marginTop={2}
          >
            <SimpleSlider buttonHeight="50%">
              {images.map((item) => {
                return <ImageCard img={item.url} title={item.title} />;
              })}
            </SimpleSlider>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default OurWorkPage;
