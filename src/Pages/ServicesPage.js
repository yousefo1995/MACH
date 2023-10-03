import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import printIcon from "../Components/images/ServiceImages/printIcon.png";
import supportIcon from "../Components/images/ServiceImages/supportIcon.png";
import maintenanceIcon from "../Components/images/ServiceImages/maintenanceIcon.png";

const ServicesPage = () => {
  return (
    <Container>
      <Stack flexDirection="row" justifyContent="space-between" mt={12} mb={18}>
        <Typography variant="h1" fontWeight="700" color="primary">
          <span style={{ borderBottom: "5px solid" }}>Services</span>
        </Typography>
        <Typography variant="h1" fontWeight="700" color="primary">
          <span style={{ borderBottom: "5px solid" }}>خدماتنا</span>
        </Typography>
      </Stack>
      <Stack flexDirection="row" justifyContent="space-between" mb={12}>
        <Stack width="35%">
          <Typography variant="h6" fontWeight="700" color="secondary" mb={2}>
            Manage Print Services (MPS)
          </Typography>
          <Typography variant="body2" color="secondary">
            The program enables our clients to outsource the management of their
            office printing and imaging devices. The goal of our MPS program is
            to drive down costs and maximize efficiency within our clients’
            organizations.{" "}
          </Typography>
        </Stack>
        <Stack>
          <img src={printIcon} alt="" style={{ width: "240px" }} />
        </Stack>
        <Stack width="35%" alignSelf="flex-end">
          <Typography
            variant="h6"
            fontWeight="700"
            color="secondary"
            mb={2}
            align="right"
          >
            (MPS) إدارة خدمات الطباعة{" "}
          </Typography>
          <Typography variant="body2" color="secondary" align="right">
            يتيح البرنامج لعملائنا الاستعانة بمصادر خارجية لإدارة أجهزة الطباعة
            الخاص بنا هو MPS والتصوير المكتبية الخاصة بهم. الهدف من برنامج خفض
            التكاليف وزيادة الكفاءة داخل مؤسسات عملائنا.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ServicesPage;
