import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CardMedia,
  Paper,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import bgImage from "../images/HeroCover.jpg";

const heroSectionDate = {
  img: bgImage,
  title: "Your Vision, Our Technology, Realizing Your Success.",
};

//styles
const heroCardMediaStyles = {
  maxHeight: { xs: "320px", md: "520px" },
  objectFit: "cover",
};
const heroTextContainerStyles = {
  display: "flex",
  justifyContent: "center",
  backdropFilter: { xs: "blur(1px)", md: "none" },
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Stack maxWidth="xxl" width="100%">
      <Stack position="relative">
        <Paper elevation={0}>
          <CardMedia
            component="img"
            src={heroSectionDate.img}
            alt=""
            width="100%"
            sx={heroCardMediaStyles}
          />
          <Stack
            position="absolute"
            width="100%"
            top={{ xs: "20%", sm: "26%", xl: "18%" }}
            alignItems="center"
          >
            <Container maxWidth="xxl" sx={heroTextContainerStyles}>
              <Stack
                gap={1}
                width="92%"
                alignItems={{ xs: "center", md: "start" }}
              >
                <Stack
                  maxWidth={{
                    xs: "220px",
                    sm: "340px",
                    md: "300px",
                    ml: "350px",
                    lg: "400px",
                  }}
                >
                  <Typography
                    fontStyle="italic"
                    fontWeight="700"
                    color="#F1F1F1" // change color
                    variant="h3"
                    fontSize={{
                      xs: "1.7rem",
                      sm: "2rem",
                      md: "2rem",
                      ml: "2.15rem",
                      lg: "2.5rem",
                      xl: "3rem",
                    }}
                    fontFamily="sans-serif"
                    textAlign={{ xs: "center", md: "start" }}
                  >
                    {heroSectionDate.title}
                  </Typography>
                </Stack>

                <Stack
                  alignSelf={{ xs: "center", md: "self-start" }}
                  mt={{ xs: 2, sm: 4, md: 2 }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate("/contactUs")}
                  >
                    <Typography variant="button" color="#fff">
                      contact us
                    </Typography>
                  </Button>
                </Stack>
              </Stack>
            </Container>
          </Stack>
        </Paper>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
