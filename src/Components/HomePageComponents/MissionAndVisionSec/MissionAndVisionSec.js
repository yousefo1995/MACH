import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

import missionImg from "../../images/mission2.jpg";
import visionImg from "../../images/vision2.jpg";
import MissionAndVisionComponent from "./MissionAndVisionComponent";
const MissionAndVisionSecData = [
  {
    img: missionImg,
    enTitle: "Mission",
    enParagraph:
      "To provide unmatched products, services, and solutions that meet the needs of our clients through solid and long relationships that encourage a sense of distinguishing.",
    arTitle: "مهمتنا",
    arParagraph:
      "تقديم منتجات وخدمات وحلول لا مثيل لها، تلبي احتياجات عملائنا، والتي تجمعنا بينهم علاقات متينة وطويلة الأمد تشجع على الشعور بالتميز والانفرادية.",
    isImageToLeft: false,
  },
  {
    img: visionImg,
    enTitle: "Vision",
    enParagraph:
      "To lead the way to a better industry. By carrying out this vision at every level of our organization.",
    arTitle: "رؤيتنا",
    arParagraph:
      "قيادة الطريق إلى صناعة أفضل، من خلال تطبيق هذا الهدف على كل مستوى من مستويات مؤسستنا.",
    isImageToLeft: true,
  },
];

const MissionAndVisionSec = () => {
  return (
    <Stack>
      {MissionAndVisionSecData.map((data, index) => (
        <MissionAndVisionComponent
          key={index}
          img={data.img}
          enTitle={data.enTitle}
          enParagraph={data.enParagraph}
          arTitle={data.arTitle}
          arParagraph={data.arParagraph}
          isImageToLeft={data.isImageToLeft}
        />
      ))}
    </Stack>
  );
};

export default MissionAndVisionSec;
