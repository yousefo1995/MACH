import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const MissionAndVisionSec = () => {
  return (
    <Container maxWidth="xxl" sx={{ paddingBottom: "48px" }}>
      {/* mission */}
      <Stack flexDirection="row" justifyContent="center" marginBottom={2}>
        <Stack
          width="46%"
          paddingLeft={1.5}
          paddingTop={5}
          color="secondary.main"
        >
          <Stack alignSelf="flex-start" paddingRight={14}>
            <Typography
              marginBottom={3}
              variant="h5"
              fontWeight="700"
              fontStyle="italic"
            >
              <span style={{ borderBottom: "2px solid" }}>Mission</span>
            </Typography>
            <Typography variant="body1" width="90%">
              To provide unmatched products, services, and solutions that meet
              the needs of our clients through solid and long relationships that
              encourage a sense of distinguishing.
            </Typography>
          </Stack>
          <Stack
            alignSelf="flex-end"
            paddingTop={4}
            paddingRight={4}
            paddingLeft={8}
          >
            <Typography
              marginBottom={3}
              variant="h5"
              fontWeight="700"
              fontStyle="italic"
              textAlign="right"
            >
              <span style={{ borderBottom: "2px solid" }}>مهمتنا</span>
            </Typography>
            <Typography variant="body1" width="100%" textAlign="right">
              تقديم منتجات وخدمات وحلول لا مثيل لها، تلبي احتياجات عملائنا،
              والتي تجمعنا بينهم علاقات متينة وطويلة الأمد تشجع على الشعور
              بالتميز والانفرادية.
            </Typography>
          </Stack>
        </Stack>
        <Stack width="46%">
          <img
            src="https://fastly.picsum.photos/id/433/540/376.jpg?hmac=uK_wmiWVFFCd8hbtdNWsX6N_DdMZjRPBo5j_Ddkx114"
            alt=""
          />
        </Stack>
      </Stack>
      {/* vision */}

      <Stack>
        <Stack flexDirection="row" justifyContent="center">
          <Stack width="46%">
            <img
              src="https://fastly.picsum.photos/id/433/540/376.jpg?hmac=uK_wmiWVFFCd8hbtdNWsX6N_DdMZjRPBo5j_Ddkx114"
              alt=""
            />
          </Stack>
          <Stack
            width="46%"
            paddingLeft={1.5}
            paddingTop={5}
            color="secondary.main"
          >
            <Stack alignSelf="flex-start" paddingRight={14}>
              <Typography
                marginBottom={3}
                variant="h5"
                fontWeight="700"
                fontStyle="italic"
              >
                <span style={{ borderBottom: "2px solid" }}>Vision</span>
              </Typography>
              <Typography variant="body1" width="90%">
                To lead the way to a better industry. By carrying out this
                vision at every level of our organization.
              </Typography>
            </Stack>
            <Stack
              alignSelf="flex-end"
              paddingTop={4}
              paddingRight={4}
              paddingLeft={8}
            >
              <Typography
                marginBottom={3}
                variant="h5"
                fontWeight="700"
                fontStyle="italic"
                textAlign="right"
              >
                <span style={{ borderBottom: "2px solid" }}>رؤيتنا</span>
              </Typography>
              <Typography variant="body1" width="100%" textAlign="right">
                قيادة الطريق إلى صناعة أفضل، من خلال تطبيق هذا الهدف على كل
                مستوى من مستويات مؤسستنا.
              </Typography>
            </Stack>
          </Stack>
        </Stack>{" "}
      </Stack>
    </Container>
  );
};

export default MissionAndVisionSec;
