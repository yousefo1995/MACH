import { Stack, Typography } from "@mui/material";
import React from "react";
import ValueCircle from "./ValueCircle";

const values = [
  { deg: 270, enTitle: "Value Centricity", arTitle: "اﻻﻟﺘﺰام" },
  { deg: 342, enTitle: "Accountability", arTitle: "اﻟﻤﺴﺎءﻟﺔ" },
  { deg: 54, enTitle: "Ingenuity", arTitle: "اﻟﺒﺮاﻋﺔ" },
  { deg: 126, enTitle: "Trust", arTitle: "اﻟﺜﻘﺔ" },
  { deg: 198, enTitle: "Loyalty", arTitle: "اﻟﻮﻻء" },
];

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
          <ValueCircle
            key={index}
            enTitle={item.enTitle}
            arTitle={item.arTitle}
            deg={item.deg}
          />
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
              variant="h4"
              fontWeight="700"
              color="primary.main"
              align="center"
            >
              OUR VALUES
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
