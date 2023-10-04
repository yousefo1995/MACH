import React, { useEffect } from "react";
import { Typography, Container, Stack } from "@mui/material";
import logo from "../Components/images/LogoCropped.png";
import aboutUsBackround from "../Components/images/aboutUsBackground.jpg";
import OurValues from "../Components/AboutUsPageComponents/OurValues";

const textData = {
  enTitle: "Who Are We?",
  enParagraph:
    " Mishal Abdulmohsin Alhokair LTD. (MAHC) has been active in trading and IT services since 2018, with significant partners all over the kingdom. With a team that has valuable experience deploying innovative ideas and intelligent strategies, we enable our clients to accelerate their business growth with excellent convenience and impressive tech solutions.",
  arTitle: "عن",
  arParagraph1:
    "ﺷــــــﺮﻛﺔ ﻣﺸﻌﻞ ﻋﺒـــﺪ اﻟﻤﺤﺴــــﻦ اﻟﺤــــﻜﻴﺮ اﻟﻤـــﺤﺪودة ، ﻫـــﻲ ﺷــــﺮﻛﺔ ﻧﺸﻄــــﺔ ﻓــــﻲ اﻟﺘﺠﺎرة وﺧـــــﺪﻣﺎت ﺗﻜﻨـــــــﻮﻟﻮﺟـــﻴﺎ اﻟﻤﻌـــــﻠﻮﻣﺎت ﻣﻨﺬ ﻋﺎم2018، ﻣﺘﻌـــﺎوﻧﺔ ﻣﻊ ﺷــﺮﻛﺎء ﻣﻬــﻤﻴﻦ ﻓـــﻲ ﺟـــﻤﻴﻊ أﻧﺤـــﺎء اﻟﻤﻤـــﻠﻜﺔ. ",
  arParagraph2:
    "ﻣﻦ ﺧﻼل ﻓﺮﻳﻖ ﻳﺘﻤﺘﻊ ﺑﺨﺒﺮة راﺳﺨﺔ ﻓﻲ ﺗﻨﻔﻴﺬ اﻷﻓﻜﺎر اﻟﻤﺒﺘﻜﺮة وﺻﻨﺎﻋﺔ اﻻﺳﺘﺮاﺗﻴﺠﻴﺎت، ﻧﺴﺘﻄﻴﻊ ﺗﻤﻜﻴﻦ ﻋﻤﻼﺋﻨﺎ ﻣﻦ ﺗﺴﺮﻳﻊ ﻧﻤﻮ أﻋﻤﺎﻟﻬﻢ ﺑﺄﻋﻠﻰ ﻣﺴﺘﻮى ﻣﻦ اﻟﺮاﺣﺔ وﻋﻦ ﻃﺮﻳﻖ ﺣﻠﻮل ﺗﻘﻨﻴﺔ ذﻛﻴﺔ.",
};

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack>
      <Container
        maxWidth="xl"
        // sx={{
        //   width: "100%",
        //   alignItems: "center",
        // }}
      >
        <Stack
          flexDirection={{ xs: "column-reverse", lg: "row" }}
          justifyContent="space-between"
          marginY={{ xs: 4, sm: 9 }}
        >
          <Stack
            color="primary.main"
            // alignItems="center"
            width={{ xs: "100%", lg: "45%" }}
            // px={{ xs: 4, md: 22 }}
            mx={2}
            justifyContent="space-evenly"
          >
            <Stack>
              <Typography variant="h1" mb={2}>
                {textData.enTitle}
              </Typography>
              <Typography variant="body1">{textData.enParagraph}</Typography>
            </Stack>
            <Stack>
              <Stack
                flexDirection="row"
                mt={4}
                mb={1}
                alignItems="center"
                alignSelf="flex-end"
              >
                <img src={logo} alt="Company logo" style={{ width: "140px" }} />
                <Typography variant="h1" gutterBottom pt={1} ml={0.5}>
                  {textData.arTitle}
                </Typography>
              </Stack>
              <Typography variant="body1" dir="rtl" align="right">
                {textData.arParagraph1}
              </Typography>
              <Typography variant="body1" dir="rtl" align="right">
                {textData.arParagraph2}
              </Typography>
            </Stack>
            {/* </Paper> */}
          </Stack>
          <Stack
            width={{ xs: "100%", lg: "50%" }}
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
