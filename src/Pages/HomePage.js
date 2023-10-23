import { Box, Stack, Container } from "@mui/material";
import React, { useEffect } from "react";
import HeroSection from "../Components/HomePageComponents/HeroSection";
import NavigationSection from "../Components/HomePageComponents/NavigationSection";
import MissionAndVisionSec from "../Components/HomePageComponents/MissionAndVisionSec/MissionAndVisionSec";
import OurClientsSection from "../Components/HomePageComponents/OurClientsSection";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box position="relative" alignItems="center">
      <Stack alignItems="center">
        <HeroSection />
      </Stack>

      <Container maxWidth="xxl">
        <Stack maxWidth="xxl" marginTop={7} marginBottom={7}>
          <NavigationSection />
        </Stack>
      </Container>

      <MissionAndVisionSec />
      <Container maxWidth="xxl">
        <OurClientsSection />
      </Container>
    </Box>
  );
};

export default HomePage;
