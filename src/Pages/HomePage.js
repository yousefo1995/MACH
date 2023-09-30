import { Box, Stack, Paper, Container } from "@mui/material";
import React from "react";
import HeroSection from "../Components/HomePageComponents/HeroSection";
import NavigationSection from "../Components/HomePageComponents/NavigationSection";
import MissionAndVisionSec from "../Components/HomePageComponents/MissionAndVisionSec";

const HomePage = () => {
  return (
    <Box>
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
      <Stack marginTop={7} marginBottom={7}>
        <NavigationSection />
      </Stack>
      <MissionAndVisionSec />
    </Box>
  );
};

export default HomePage;
