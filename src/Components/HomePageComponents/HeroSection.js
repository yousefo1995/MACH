import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import bgImage from "../images/HeroBg.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Stack position="relative">
      <Paper elevation={0}>
        <img
          src={bgImage}
          alt=""
          width="100%"
          style={{ maxHeight: "520px", objectFit: "cover" }}
        />
        <Stack position="absolute" gap={1} top="26%" left="4%" width="42%">
          <Stack maxWidth="380px">
            <Typography
              fontStyle="italic"
              fontWeight="700"
              color="primary" // change the color to #111111 or choose different color ========================
              variant="h1"
            >
              To lead the way to a better industry.
            </Typography>
          </Stack>
          <Divider
            sx={{
              borderTopWidth: "4px",
              borderTopColor: "primary.main",
              borderRadius: "80px",
              maxWidth: "220px",
            }}
          />
          <Stack maxWidth="240px">
            <Typography color="#fff" align="right">
              قيادة الطريق إلى صناعة افضل ، من خلال تطبيق هذا الهدف على كل مستوى
              من مستويات موُسستنا{" "}
            </Typography>
          </Stack>
          <Stack alignSelf="self-start">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/contactUs")}
            >
              <Typography variant="button" color="#fff">
                contact us
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default HeroSection;
