import React, { useEffect } from "react";
import { Typography, Container, Stack } from "@mui/material";
import logo from "../Components/images/LogoCropped.png";
import aboutUsBackround from "../Components/images/aboutUsBackground.jpg";
// import OurValues from "../Components/AboutUsPageComponents/OurValues";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack
      sx={{
        backgroundImage: `url(${aboutUsBackround})`,
        backgroundSize: "cover",
        minHeight: "85vh",
      }}
    >
      <Container
      // sx={{
      //   width: "100%",
      //   alignItems: "center",
      // }}
      >
        <Stack
          color="primary.main"
          alignItems="center"
          px={{ xs: 4, md: 22 }}
          my={8}
        >
          {/* <Paper elevation={3}> */}
          {/* <img src={logo} alt="Company logo" style={{ width: "200px" }} /> */}
          <Typography variant="h1" gutterBottom>
            Who Are We?
          </Typography>
          <Typography variant="body1" align="center">
            Mishal Abdulmohsin Alhokair LTD. (MAHC) has been active in trading
            and IT services since 2018, with significant partners all over the
            kingdom. With a team that has valuable experience deploying
            innovative ideas and intelligent strategies, we enable our clients
            to accelerate their business growth with excellent convenience and
            impressive tech solutions.
          </Typography>
          <Stack flexDirection="row" mt={4} alignItems="center">
            <img src={logo} alt="Company logo" style={{ width: "140px" }} />
            <Typography variant="h1" gutterBottom pt={1} ml={0.5}>
              عن{" "}
            </Typography>
          </Stack>
          <Typography variant="body1" align="center">
            (MAHC) شركة مشعل عبد المحسن الحكير المحدودة (ماحك) هي شركة نشطة في
            التجارة وخدمات تكنولوجيا المعلومات منذ عام 2018، مع شركاء كبار في
            جميع أنحاء المملكة. بفريق لديه خبرة قيمة في تنفيذ أفكار مبتكرة
            واستراتيجيات ذكية، نمكن عملائنا من تسريع نمو أعمالهم براحة ممتازة
            وحلول تكنولوجية رائعة.
          </Typography>
          {/* </Paper> */}

          <Stack mt={4}>
            <Typography variant="h1" gutterBottom>
              Our Values
            </Typography>
          </Stack>
        </Stack>
      </Container>

      {/* <OurValues /> */}
    </Stack>

    /*
    // bushra design
    <Stack flexDirection="row">
      <Stack
        width="40%"
        bgcolor="#CCCCCC"
        alignItems="center"
        // height="400px"
      >
        <Typography
          fontSize="42px"
          color="primary"
          fontWeight="700"
          gutterBottom
        >
          Who Are We?{" "}
        </Typography>
        <Paper elevation={11} sx={{ width: "80%" }}>
          <Typography variant="body1" padding={1}>
            Mishal Abdulmohsin Alhokair LTD. (MAHC) has been active in trading
            and IT services since 2018, with significant partners all over the
            kingdom. With a team that has valuable experience deploying
            innovative ideas and intelligent strategies, we enable our clients
            to accelerate their business growth with excellent convenience and
            impressive tech solu
          </Typography>
        </Paper>
      </Stack>
      <Stack width="60%">
        <img
          src={aboutUsImage}
          alt=""
          style={{
            width: "100%",
            // maxHeight: "460px",
            height: "500px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Stack>
    </Stack>
    */
  );
};

export default AboutUsPage;
