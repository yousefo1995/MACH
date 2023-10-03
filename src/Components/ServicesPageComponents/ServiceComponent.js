import React from "react";
import { Stack, Typography } from "@mui/material";
import printIcon from "../images/ServiceImages/printIcon.png";

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
      mb={12}
    >
      <Stack width={{ xs: "100%", md: "35%" }} mb={{ xs: 3, md: 0 }}>
        <Typography variant="h6" fontWeight="700" color="secondary" mb={2}>
          {enTitle}
        </Typography>
        <Typography variant="body2" color="secondary">
          {enParagraph}
        </Typography>
      </Stack>
      <Stack alignItems="center">
        <img src={img} alt={imgName} style={{ width: "240px" }} />
      </Stack>
      <Stack
        width={{ xs: "100%", md: "35%" }}
        alignSelf={{ xs: "center", md: "flex-end" }}
        mt={{ xs: 3, md: 0 }}
      >
        <Typography
          variant="h6"
          fontWeight="700"
          color="secondary"
          mb={2}
          align="right"
        >
          {arTitle}
        </Typography>
        <Typography variant="body2" color="secondary" align="right">
          {arParagraph}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ServiceComponent;
