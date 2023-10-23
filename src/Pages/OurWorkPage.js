import { Container, Stack, Typography, Box } from "@mui/material";
import React, { useState } from "react";

import GridImage from "../Components/OurWorkPageComponents/GridImage";
import SimpleSlider from "../Components/Core/Slider/SimpleSlider";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const gridImage = [
  {
    img1: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FGrid%2FInterior%20LED%20img1.jpg?alt=media&token=e26b473d-4caa-4d8a-b682-a79b85c2a530",
    img2: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FGrid%2FInterior%20LED%20img2.jpeg?alt=media&token=7b568011-a63a-4d15-ad75-3527aabb9951",
    // arTitle: "الشاشات الداخلية",
    enTitle: "Interior LED Screens",
    isLeft: false,
  },
  {
    img1: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FGrid%2FInterior%20LED%20img1.jpg?alt=media&token=e26b473d-4caa-4d8a-b682-a79b85c2a530",
    img2: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FGrid%2FInterior%20LED%20img2%20a.jpg?alt=media&token=4d98569a-b06c-4530-a026-d26cc77f2b6a", // arTitle: "الشاشات الداخلية",
    enTitle: "Interior LED Screens",
    isLeft: false,
  },
  {
    img1: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FGrid%2Fgym%20img1.jpg?alt=media&token=3db6e3b9-26e0-4816-9de3-0d7b5d3e2af9",
    img2: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FGrid%2Fgym%20img2.jpg?alt=media&token=b768c17d-75de-4f55-91cb-25409c741a6e",
    // arTitle: "شاشات مخصصة للأندية الرياضية",
    enTitle: "Specialized Screens for Gyms",
    isLeft: true,
  },
  {
    img1: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FGrid%2FSPARKYS%20img1%20a.jpeg?alt=media&token=e2790234-02af-4dd9-bc69-7c2b2e8866d1",
    img2: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FGrid%2FSPARKYS%20img2.jpg?alt=media&token=7027d792-efb6-4e54-a99e-9c6e53d1d8e3",
    // arTitle: "",
    enTitle: "SPARKYS",
    isLeft: false,
  },
];
const images = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%201.jpeg?alt=media&token=c21057ca-967a-4f3f-b750-b7c94ea14409",
    title: "ourWork1",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%202.jpeg?alt=media&token=36c96119-4bf6-4351-8c9e-03bd02838184",
    title: "ourWork2",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%203.jpg?alt=media&token=d9d472af-b22a-4764-93bb-68b3178cdc66",
    title: "ourWork3",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%204.jpg?alt=media&token=284543af-cbf4-42ce-83b0-9e22d9f7aa6a",
    title: "ourWork4",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%205.jpg?alt=media&token=de5d19f0-4e82-4692-96a7-c14e0edb3951",
    title: "ourWork5",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%206.jpg?alt=media&token=d9fe7396-3293-437f-b180-850ae54d702b",
    title: "ourWork6",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%207.jpg?alt=media&token=8ce445ae-c2da-4db8-9c54-0b376fcad3bb",
    title: "ourWork7",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%208.jpeg?alt=media&token=3fbf8e44-9d1f-419b-93ef-b84422e69a7f",
    title: "ourWork8",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%209.jpeg?alt=media&token=8673dfa1-6fa2-402b-b9c8-b7b3723b08d0",
    title: "ourWork9",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%2010.jpeg?alt=media&token=d8f22a3a-0a6f-460c-923c-ad5de57537ed",
    title: "ourWork10",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%2011.jpg?alt=media&token=0840db5b-bc3e-40b0-813e-f242af75f676",
    title: "ourWork11",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%2012.jpg?alt=media&token=f7d39f57-4051-40ea-8961-cbd440a341b7",
    title: "ourWork12",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%2013.jpg?alt=media&token=94c14d77-7c0f-445b-800e-5e10b6ac533d",
    title: "ourWork13",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%2014.jpg?alt=media&token=5d7d240d-778e-455e-9ee1-dfa370cedf05",
    title: "ourWork14",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%2015.png?alt=media&token=3461ee80-9753-4772-8663-932c3b1101f1",
    title: "ourWork15",
  },
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
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurWork%2FSlider%2Fslider%201.jpeg?alt=media&token=c21057ca-967a-4f3f-b750-b7c94ea14409",
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
