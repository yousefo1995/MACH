import { Stack, Typography } from "@mui/material";
import React from "react";

const ValueCircle = ({ enTitle, arTitle, deg }) => {
  const radius = 196;
  const mobileRadius = 122;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      width={{ xs: "88px", sm: "135px" }}
      height={{ xs: "88px", sm: "135px" }}
      bgcolor="primary.main"
      border="2px solid #327C14"
      borderRadius="50%"
      position="absolute"
      padding={1}
      sx={{
        transform: {
          xs: `translate(${mobileRadius * Math.cos((deg * Math.PI) / 180)}px, ${
            mobileRadius * Math.sin((deg * Math.PI) / 180)
          }px)`,
          sm: `translate(${radius * Math.cos((deg * Math.PI) / 180)}px, ${
            radius * Math.sin((deg * Math.PI) / 180)
          }px)`,
        },
      }}
    >
      <Stack display={{ xs: "none", sm: "block" }}>
        <Typography variant="h6" align="center" fontWeight="700" color="#fff">
          {enTitle}
        </Typography>
        <Typography variant="h6" align="center" fontWeight="700" color="#fff">
          {arTitle}
        </Typography>
      </Stack>
      <Stack display={{ xs: "block", sm: "none" }}>
        <Typography
          variant="body2"
          align="center"
          fontWeight="700"
          color="#fff"
        >
          {enTitle}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          fontWeight="700"
          color="#fff"
        >
          {arTitle}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ValueCircle;
