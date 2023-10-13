import React, { useEffect } from "react";
import { Typography, Container, Stack } from "@mui/material";
import logo from "../Components/images/LogoCropped.png";
import OurValues from "../Components/AboutUsPageComponents/OurValues";

const textData = {
  enTitle: "Who Are We?",
  enParagraph1:
    " Mishal Abdulmohsin Alhokair LTD. (MAHC) has been active in trading and IT services since 2018, with significant partners all over the kingdom.",
  enParagraph2:
    " With a team that has valuable experience deploying innovative ideas and intelligent strategies, we enable our clients to accelerate their business growth with excellent convenience and impressive tech solutions.",
  arTitle: "عن",
  arParagraph1:
    "ﺷــــــﺮﻛﺔ ﻣﺸﻌﻞ ﻋﺒـــﺪ اﻟﻤﺤﺴــــﻦ اﻟﺤــــﻜﻴﺮ اﻟﻤـــﺤﺪودة ، ﻫـــﻲ ﺷــــﺮﻛﺔ ﻧﺸﻄــــﺔ ﻓــــﻲ اﻟﺘﺠﺎرة وﺧـــــﺪﻣﺎت ﺗﻜﻨـــــــﻮﻟﻮﺟـــﻴﺎ اﻟﻤﻌـــــﻠﻮﻣﺎت ﻣﻨﺬ ﻋﺎم 2018، ﻣﺘﻌـــﺎوﻧﺔ ﻣﻊ ﺷــﺮﻛﺎء ﻣﻬــﻤﻴﻦ ﻓـــﻲ ﺟـــﻤﻴﻊ أﻧﺤـــﺎء اﻟﻤﻤـــﻠﻜﺔ. ",
  arParagraph2:
    "ﻣﻦ ﺧﻼل ﻓﺮﻳﻖ ﻳﺘﻤﺘﻊ ﺑﺨﺒﺮة راﺳﺨﺔ ﻓﻲ ﺗﻨﻔﻴﺬ اﻷﻓﻜﺎر اﻟﻤﺒﺘﻜﺮة وﺻﻨﺎﻋﺔ اﻻﺳﺘﺮاﺗﻴﺠﻴﺎت، ﻧﺴﺘﻄﻴﻊ ﺗﻤﻜﻴﻦ ﻋﻤﻼﺋﻨﺎ ﻣﻦ ﺗﺴﺮﻳﻊ ﻧﻤﻮ أﻋﻤﺎﻟﻬﻢ ﺑﺄﻋﻠﻰ ﻣﺴﺘﻮى ﻣﻦ اﻟﺮاﺣﺔ وﻋﻦ ﻃﺮﻳﻖ ﺣﻠﻮل ﺗﻘﻨﻴﺔ ذﻛﻴﺔ.",
};

const containerStyles = {
  background:
    "linear-gradient(90deg, rgba(204,204,204,1) 0%, rgba(238,238,238,1) 53%, rgba(251,251,251,0.8907578412224265) 90%)",
};

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack>
      <Container maxWidth="xxl" sx={containerStyles}>
        <Stack
          flexDirection={{ xs: "column-reverse", lg: "row" }}
          justifyContent={{ xs: "space-between", xl: "space-around" }}
          marginY={{ xs: 4, sm: 9 }}
        >
          <Stack
            color="primary.main"
            width={{ xs: "100%", lg: "45%" }}
            mx={2}
            justifyContent="space-evenly"
            alignItems={{ xs: "center", lg: "initial" }}
          >
            <Stack width={{ xs: "80%", lg: "100%" }}>
              <Typography
                variant="h1"
                mb={2}
                textAlign={{ xs: "center", lg: "initial" }}
              >
                {textData.enTitle}
              </Typography>
              <Typography
                variant="body1"
                textAlign={{ xs: "center", lg: "initial" }}
              >
                {textData.enParagraph1}
              </Typography>
              <Typography
                variant="body1"
                textAlign={{ xs: "center", lg: "initial" }}
              >
                {textData.enParagraph2}
              </Typography>
            </Stack>
            <Stack width={{ xs: "80%", lg: "100%" }}>
              <Stack
                flexDirection="row"
                mt={4}
                mb={1}
                alignItems="center"
                alignSelf={{ xs: "center", lg: "flex-end" }}
              >
                <img src={logo} alt="Company logo" width="140px" />
                <Typography variant="h1" gutterBottom pt={1} ml={0.5}>
                  {textData.arTitle}
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                dir="rtl"
                textAlign={{ xs: "center", lg: "initial" }}
              >
                {textData.arParagraph1}
              </Typography>
              <Typography
                variant="body1"
                dir="rtl"
                textAlign={{ xs: "center", lg: "initial" }}
              >
                {textData.arParagraph2}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            width={{ xs: "100%", lg: "30%" }}
            alignItems={{ xs: "center", lg: "flex-end" }}
            mt={4}
            mr={5}
            mb={{ xs: 8, lg: 0 }}
          >
            <OurValues />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default AboutUsPage;
