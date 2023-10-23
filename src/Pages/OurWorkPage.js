import { Container, Stack, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import GridImage from "../Components/OurWorkPageComponents/GridImage";
import SimpleSlider from "../Components/Core/Slider/SimpleSlider";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  images,
  gridImage,
} from "../Components/OurWorkPageComponents/OurWorkData";
import SliderCardImage from "../Components/OurWorkPageComponents/SliderCardImage";

const initialBigImageState = {
  url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%201.jpeg?alt=media&token=c21057ca-967a-4f3f-b750-b7c94ea14409",
  title: "basicImage",
};

const cardStyles = {
  bgcolor: "#F1F1F1",
  display: "flex",
  justifyContent: "center",
};
const cardMediaStyles = {
  height: { xs: 320, sm: 380, ml: 564 },
  width: "auto",
  objectFit: "cover",
};

const OurWorkPage = () => {
  const [bigImage, setBigImage] = useState(initialBigImageState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            color="secondary.dark"
            textAlign="center"
            mt={4}
            mb={10}
            width="60%"
          >
            At MAHC, we've been active! Take a look at some of our recent
            projects and see how we're making a difference in various
            industries.
          </Typography>

          {gridImage.map((item, index) => (
            <GridImage
              key={index}
              img1={item.img1}
              img2={item.img2}
              arTitle={item.arTitle}
              enTitle={item.enTitle}
              isLeft={item.isLeft}
            />
          ))}
          <Stack mb={4} width="90%" display={{ xs: "none", sm: "flex" }}>
            <Card elevation={10} sx={cardStyles}>
              <CardMedia
                component="img"
                sx={cardMediaStyles}
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
                  <SliderCardImage
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
