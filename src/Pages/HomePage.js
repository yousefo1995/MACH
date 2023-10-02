import { Box, Stack, Paper, Container } from "@mui/material";
import React from "react";
import HeroSection from "../Components/HomePageComponents/HeroSection";
import NavigationSection from "../Components/HomePageComponents/NavigationSection";
import MissionAndVisionSec from "../Components/HomePageComponents/MissionAndVisionSec/MissionAndVisionSec";
import OurClientsSection from "../Components/HomePageComponents/OurClientsSection";

const HomePage = () => {
  return (
    <Box position="relative">
      <HeroSection />
      {/* Floating NavigationSection */}
      {/* <Stack width="100%" alignItems="center" marginTop={-6} marginBottom={4}>
        <Paper
          sx={{ width: "90%", bgcolor: "white", zIndex: "2", padding: "20px" }}
          elevation={2}
        >
          <NavigationSection />
        </Paper>
      </Stack> */}
      <Container maxWidth="xxl">
        <Stack
          maxWidth="xxl"
          marginTop={7}
          marginBottom={7}
          // display={{ xs: "none", sm: "block" }}
        >
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
