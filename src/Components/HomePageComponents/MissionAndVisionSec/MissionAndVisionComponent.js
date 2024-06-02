import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const MissionAndVisionComponent = ({
  img,
  isImageToLeft,
  enTitle,
  arTitle,
  enParagraph,
  arParagraph,
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
          paddingTop={{ xs: 2, lg: 0, xl: 5 }}
          minHeight={!isImageToLeft ? "330px" : "250px"}
          justifyContent={!isImageToLeft ? "space-evenly" : "space-between"}
          color="primary.main"
        >
          <Stack
            alignSelf="flex-start"
            paddingRight={{ xs: 0, xl: 14 }}
            marginBottom={{ xs: 0, lg: 4 }}
          >
            <Typography
              marginBottom={{ xs: 1, lg: 3 }}
              variant="h5"
              fontWeight="700"
              fontStyle="italic"
              color="primary.main"
            >
              <span style={{ borderBottom: "2px solid" }}>{enTitle}</span>
            </Typography>
            <Typography variant="body1" width="93%">
              {enParagraph}
            </Typography>
          </Stack>
          <Stack
            width={{ xs: "80%", lg: "46%" }}
            display={{ xs: "flex", lg: "none" }}
            alignSelf="center"
            my={4}
          >
            <img
              src={img}
              alt="mission and vision img"
              loading="lazy"
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
              fontFamily="Rubik, sans-serif"
              color="primary.main"
            >
              <span style={{ borderBottom: "2px solid" }}>{arTitle}</span>
            </Typography>
            <Typography
              variant="body1"
              width="100%"
              dir="rtl"
              fontFamily="Rubik, sans-serif"
            >
              {arParagraph}
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
            alt="mission and vision img"
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
