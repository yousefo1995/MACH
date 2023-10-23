import { Card, CardMedia, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const GridImage = ({ arTitle, enTitle, img1, img2, isLeft }) => {
  return (
    <Stack alignItems="center" mb={2}>
      <Stack mb={2} width="90%">
        <Card
          elevation={10}
          sx={{
            bgcolor: "#F1F1F1",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            paddingY: "32px",
            flexDirection: "column",
            //instead of skeleton use minWidth 90%
            minWidth: {
              xs: "220px",
              sm: "500px",
              md: "650px",
              lg: "920px",
              xl: "1150px",
            },
            minHeight: "250px",
          }}
        >
          <Grid container>
            <Grid
              item
              sm={7}
              md={7}
              lg={7}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                alignItems="center"
                color="secondary.dark"
                sx={{
                  flexGrow: 1, // Take all available vertical space
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="700"
                  fontSize={{ xs: "1.5rem", lg: "2rem" }}
                  fontStyle="italic"
                  mb={1}
                  mt={1}
                  textAlign="center"
                >
                  {enTitle}
                </Typography>
                {/* <Typography
                  variant="h5"
                  fontWeight="700"
                  fontStyle="italic"
                  mb={1}
                >
                  {arTitle}
                </Typography> */}
              </Stack>
              <Stack
                pl={{ xs: 2, sm: isLeft ? 2 : 4 }}
                pr={isLeft ? { xs: 2, sm: 4 } : 2}
                pt={1}
                flexGrow={1}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    objectFit: "cover",
                    flexGrow: "1", // Adjust
                  }}
                  image={img1}
                  loading="lazy"
                  title={enTitle}
                />
              </Stack>
            </Grid>
            <Grid
              item
              sm={5}
              md={5}
              lg={5}
              order={{ xs: "0", sm: isLeft && -1 }}
              sx={{ display: "flex" }}
            >
              <Stack
                pl={2}
                pr={{ xs: 2, sm: isLeft ? 2 : 4 }}
                pt={2}
                alignSelf={isLeft && "flex-end"}
                width="100%"
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    objectFit: "cover",
                    maxHeight: { md: "340px", lg: "420px" },
                    minHeight: { lg: "463px" },
                  }}
                  image={img2}
                  title={enTitle}
                  loading="lazy"
                />
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Stack>
    </Stack>
  );
};

export default GridImage;
