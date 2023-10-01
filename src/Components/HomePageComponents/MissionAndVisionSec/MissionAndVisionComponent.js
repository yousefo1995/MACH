import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const MissionAndVisionComponent = ({
  img,
  isImageToLeft,
  enTitle,
  arTitle,
  enPharagraph,
  arPharagraph,
}) => {
  return (
    <Container maxWidth="xxl" sx={{ paddingBottom: "48px" }}>
      <Stack
        flexDirection={{ sx: "column", lg: "row" }}
        justifyContent="center"
        alignItems={{ xs: "center", lg: "flex-start" }}
        marginBottom={2}
        maxHeight={{ lg: "373px" }}
      >
        <Stack
          width={{ xs: "80%", lg: "46%" }}
          paddingLeft={!isImageToLeft ? 1.5 : 4}
          paddingTop={{ xs: 2, lg: 5 }}
          justifyContent="space-evenly"
          color="secondary.main"
        >
          <Stack alignSelf="flex-start" paddingRight={{ xs: 0, xl: 14 }}>
            <Typography
              marginBottom={{ xs: 1, lg: 3 }}
              variant="h5"
              fontWeight="700"
              fontStyle="italic"
            >
              <span style={{ borderBottom: "2px solid" }}>{enTitle}</span>
            </Typography>
            <Typography variant="body1" width="90%">
              {enPharagraph}
            </Typography>
          </Stack>
          <Stack
            width={{ xs: "80%", lg: "46%" }}
            display={{ xs: "flex", lg: "none" }}
            alignSelf="center"
            my={2}
          >
            <img
              src={img}
              alt="mission and vission img"
              style={{
                maxHeight: "378px",
                objectFit: "cover",
                objectPosition: "center",
                clipPath:
                  "polygon(20% 0%, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)",
              }}
            />
          </Stack>
          <Stack
            alignSelf="flex-end"
            paddingRight={!isImageToLeft ? 4 : 1.5}
            paddingLeft={{ xs: 0, xl: 8 }}
          >
            <Typography
              marginBottom={{ xs: 1, lg: 3 }}
              variant="h5"
              fontWeight="700"
              fontStyle="italic"
              textAlign="right"
            >
              <span style={{ borderBottom: "2px solid" }}>{arTitle}</span>
            </Typography>
            <Typography variant="body1" width="100%" textAlign="right">
              {arPharagraph}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          width={{ xs: "80%", lg: "46%" }}
          order={!isImageToLeft ? { xs: -1, lg: 2 } : -1}
          display={{ xs: "none", lg: "flex" }}
        >
          <img
            src={img}
            alt="mission and vission img"
            style={{
              maxHeight: "378px",
              objectFit: "cover",
              objectPosition: "center",
              clipPath:
                "polygon(20% 0%, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)",
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default MissionAndVisionComponent;
