import React from "react";
import { Stack, Typography } from "@mui/material";

const ServiceComponent = ({
  img,
  imgName,
  enTitle,
  enParagraph,
  arTitle,
  arParagraph,
}) => {
  return (
    <Stack
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "center", md: "flex-start" }}
      mb={8}
    >
      <Stack width={{ xs: "100%", md: "35%" }} mb={{ xs: 3, md: 0 }}>
        <Typography variant="h6" fontWeight="700" color="primary.main" mb={2}>
          {enTitle}
        </Typography>
        <Typography variant="body2" color="secondary.dark">
          {enParagraph}
        </Typography>
      </Stack>
      <Stack alignItems="center">
        <img src={img} alt={imgName} width="240px" />
      </Stack>
      <Stack
        width={{ xs: "100%", md: "35%" }}
        alignSelf={{ xs: "center", md: "flex-end" }}
        mt={{ xs: 3, md: 0 }}
        pb={{ xs: 0, md: 2 }}
      >
        <Typography
          variant="h5"
          fontWeight="700"
          color="primary.main"
          mb={2}
          align="right"
          fontFamily="Rubik, sans-serif"
        >
          {arTitle}
        </Typography>
        <Typography
          variant="body1"
          color="secondary.dark"
          dir="rtl"
          // fontFamily="Rubik, sans-serif"
        >
          {arParagraph}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ServiceComponent;
