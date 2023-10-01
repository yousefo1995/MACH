import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const clientsIcons = [
  { name: "", url: "", width: "300px" },
  { name: "", url: "", width: "400px" },
  { name: "", url: "", width: "350px" },
  { name: "", url: "", width: "320px" },
  { name: "", url: "", width: "250px" },
  { name: "", url: "", width: "400px" },
  { name: "", url: "", width: "360px" },
  { name: "", url: "", width: "370px" },
  { name: "", url: "", width: "310px" },
  { name: "", url: "", width: "305px" },
  { name: "", url: "", width: "280px" },
];

const OurClientsSection = () => {
  return (
    <Stack width="100%" alignItems="center" mt={2} mb={6}>
      <Typography
        variant="h1"
        fontSize="36px"
        fontWeight="700"
        mb={2}
        color="primary"
      >
        <span style={{ borderBottom: "4px solid" }}>Our Clients</span>
      </Typography>
      <Typography
        width="60%"
        textAlign="center"
        variant="body1"
        mb={1}
        color="primary"
      >
        MAHC is proud to collaborate with a diverse range of clients from
        various industries. Our commitment to excellence has fostered strong,
        lasting partnerships with organizations across sectors.
      </Typography>
      <Stack flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
        {clientsIcons.map((item) => (
          <Box
            width={item.width}
            height="80px"
            border="1px solid #524A4E"
            my={0.5}
          >
            {" "}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default OurClientsSection;
