import { Stack, Typography } from "@mui/material";
import React from "react";

const values = [
  { deg: 270, enTitle: "Value Centricity", arTitle: "اﻻﻟﺘﺰام" },
  { deg: 342, enTitle: "Accountability", arTitle: "اﻟﻤﺴﺎءﻟﺔ" },
  { deg: 54, enTitle: "Ingenuity", arTitle: "اﻟﺒﺮاﻋﺔ" },
  { deg: 126, enTitle: "Trust", arTitle: "اﻟﺜﻘﺔ" },
  { deg: 198, enTitle: "Loyalty", arTitle: "اﻟﻮﻻء" },
];

const radius = 196;
const mobileRadius = 122;

const OurValues = () => {
  return (
    <Stack alignItems="center" paddingRight={{ xs: 0, lg: 2 }}>
      <Stack
        width={{ xs: "220px", sm: "360px" }}
        height={{ xs: "220px", sm: "360px" }}
        border="10px solid"
        borderColor="#327C14"
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
        padding={2}
        position="relative"
      >
        {values.map((item, index) => (
          <Stack
            key={index}
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
                xs: `translate(${
                  mobileRadius * Math.cos((item.deg * Math.PI) / 180)
                }px, ${mobileRadius * Math.sin((item.deg * Math.PI) / 180)}px)`,
                sm: `translate(${
                  radius * Math.cos((item.deg * Math.PI) / 180)
                }px, ${radius * Math.sin((item.deg * Math.PI) / 180)}px)`,
              },
            }}
          >
            <Stack display={{ xs: "none", sm: "block" }}>
              <Typography
                variant="h6"
                align="center"
                fontWeight="700"
                color="#fff"
              >
                {item.enTitle}
              </Typography>
              <Typography
                variant="h6"
                align="center"
                fontWeight="700"
                color="#fff"
              >
                {item.arTitle}
              </Typography>
            </Stack>
            <Stack display={{ xs: "block", sm: "none" }}>
              <Typography
                variant="body2"
                align="center"
                fontWeight="700"
                color="#fff"
              >
                {item.enTitle}
              </Typography>
              <Typography
                variant="body2"
                align="center"
                fontWeight="700"
                color="#fff"
              >
                {item.arTitle}
              </Typography>
            </Stack>
          </Stack>
        ))}
        <Stack
          width={{ xs: "72px", sm: "150px" }}
          height={{ xs: "72px", sm: "150px" }}
          border="16px solid"
          borderColor="primary.main"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          padding={{ xs: 1, sm: 2 }}
        >
          <Stack display={{ xs: "none", sm: "block" }}>
            <Typography
              variant="h3"
              fontWeight="700"
              color="primary.main"
              align="center"
            >
              Our Values
            </Typography>
          </Stack>
          <Stack display={{ xs: "block", sm: "none" }}>
            <Typography
              variant="h6"
              fontWeight="700"
              color="primary.main"
              align="center"
            >
              Our Values
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OurValues;
