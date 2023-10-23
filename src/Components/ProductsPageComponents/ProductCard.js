import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const ProductCard = ({ name, img, enName, arName }) => {
  return (
    <Paper elevation={10} sx={{ width: "280px", bgcolor: "primary.main" }}>
      <Stack alignItems="center" pb={2} color="#fff">
        <img
          src={img}
          alt={name}
          width="100%"
          height="280px"
          style={{ objectFit: "cover" }}
        />
        <Typography my={2} variant="h2" textAlign="center">
          {enName}
        </Typography>
        <Typography variant="h2" textAlign="center">
          {arName}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default ProductCard;
