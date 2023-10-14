import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Stack
      height="50vH"
      justifyContent="center"
      alignItems="center"
      marginTop={16}
      marginBottom={10}
    >
      <Stack width={{ xs: "100%", sm: "70%" }}>
        <Box
          marginTop={2}
          padding={8}
          border="10px solid"
          borderRadius={2}
          borderColor="primary.main"
        >
          <Typography variant="h3" color="error" marginBottom={3}>
            404 Error
          </Typography>
          <Typography variant="h2" mb={2} color="primary.main">
            Oops! The page you're looking for doesn't exist.
          </Typography>
          <Typography variant="body1" color="primary.main">
            The requested URL was not found on our server.{" "}
            <Link to="/">Go to the homepage</Link>
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default NotFoundPage;
