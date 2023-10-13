import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ServiceComponent from "../Components/ServicesPageComponents/ServiceComponent";
import printIcon from "../Components/images/ServiceImages/printIcon.png";
import supportIcon from "../Components/images/ServiceImages/supportIcon.png";
import maintenanceIcon from "../Components/images/ServiceImages/maintenanceIcon.png";

const servicesData = [
  {
    img: printIcon,
    imgName: "printIcon",
    enTitle: "Manage Print Services (MPS)",
    enParagraph:
      "The program enables our clients to outsource the management of their office printing and imaging devices. The goal of our MPS program is to drive down costs and maximize efficiency within our clients’ organizations.",
    arTitle: "(MPS) إدارة خدمات الطباعة",
    arParagraph:
      "يتيح البرنامج لعملائنا الاستعانة بمصادر خارجية لإدارة أجهزة الطباعة  والتصوير المكتبية الخاصة بهم.الهدف من برنامج  (MPS) الخاص بنا هو خفض التكاليف وزيادة الكفاءة داخل مؤسسات عملائنا.",
  },
  {
    img: supportIcon,
    imgName: "supportIcon",
    enTitle: "IT Helpdesk Support",
    enParagraph:
      "With the development of technology, the cost of driving it has become very high, so we provide cost-effective support to SMEs to run their business professionally by providing the qualified resources.",
    arTitle: "الدعم الفني التقني المستمر",
    arParagraph:
      "مع تطور التكنولوجيا، أصبحت تكلفتها عالية جدًا، لذلك نحن نقدم دعمًا فعالاً من حيث التكلفة للشركات الصغيرة والمتوسطة لإدارة أعمالها بشكل احترافي من خلال توفير الموارد الأنسب لها.",
  },
  {
    img: maintenanceIcon,
    imgName: "maintenanceIcon",
    enTitle: "Annual Maintenance Contracts",
    enParagraph:
      "After installing our solutions, we make annual contracts with our clients to keep caring about business running.",
    arTitle: "عقود الصيانة السنوية",
    arParagraph:
      "بعد التزويد بحلولنا، نقوم بإبرام عقود سنوية مع عملائنا لمواصلة الاهتمام وصيانة أعمالهم.",
  },
];

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Stack flexDirection="row" justifyContent="space-between" mt={12} mb={12}>
        <Typography variant="h1" fontWeight="700" color="primary">
          <span style={{ borderBottom: "5px solid" }}>Services</span>
        </Typography>
        <Typography variant="h1" fontWeight="700" color="primary">
          <span style={{ borderBottom: "5px solid" }}>خدماتنا</span>
        </Typography>
      </Stack>

      {servicesData.map((service, index) => (
        <ServiceComponent
          key={index}
          img={service.img}
          imgName={service.imgName}
          enTitle={service.enTitle}
          enParagraph={service.enParagraph}
          arTitle={service.arTitle}
          arParagraph={service.arParagraph}
        />
      ))}
    </Container>
  );
};

export default ServicesPage;
