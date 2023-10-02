import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

import missionImage from "../../images/mission2.jpg";
import visionImage from "../../images/vision2.jpg";
import MissionAndVisionComponent from "./MissionAndVisionComponent";

const MissionAndVisionSec = () => {
  return (
    <Stack>
      {/* mission 2 */}
      <MissionAndVisionComponent
        img={missionImage}
        enTitle="Mission"
        enPharagraph="To provide unmatched products, services, and solutions that meet
the needs of our clients through solid and long relationships that
encourage a sense of distinguishing."
        arTitle="مهمتنا"
        arPharagraph="تقديم منتجات وخدمات وحلول لا مثيل لها، تلبي احتياجات عملائنا، والتي تجمعنا بينهم علاقات متينة وطويلة الأمد تشجع على الشعور بالتميز والانفرادية.
      "
      />

      {/* vision */}
      <MissionAndVisionComponent
        img={visionImage}
        enTitle="Vision"
        enPharagraph="To lead the way to a better industry. By carrying out this vision at every level of our organization."
        arTitle="رؤيتنا"
        arPharagraph="قيادة الطريق إلى صناعة أفضل، من خلال تطبيق هذا الهدف على كل
      مستوى من مستويات مؤسستنا."
        isImageToLeft={true}
      />
    </Stack>
  );
};

export default MissionAndVisionSec;
