import { Box, Stack, Paper } from "@mui/material";
import React from "react";
import HeroSection from "../Components/HomePageComponents/HeroSection";
import NavigationSection from "../Components/HomePageComponents/NavigationSection";

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
    </Box>
  );
};

export default HomePage;
