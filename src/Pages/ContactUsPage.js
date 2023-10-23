import { Container, Stack } from "@mui/material";
import React, { useEffect } from "react";
import contactUsCover from "../Components/images/contachUsCover (1).jpg";
import ContactUsForm from "../Components/ContactUsPageComponents/ContactUsForm";

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 50);
  }, []);
  return (
    <Stack
      sx={{
        background:
          "linear-gradient(225deg, rgba(204,204,204,1) 0%, rgba(238,238,238,1) 27%, rgba(251,251,251,0.8907578412224265) 84%)",
      }}
    >
      <Container
        sx={{
          padding: { xs: 0, ml: 3 },
        }}
      >
        <Stack
          flexDirection={{ xs: "column", ml: "row" }}
          pt={{ xs: 0, ml: 10 }}
          pb={10}
          alignItems="center"
        >
          <Stack display={{ xs: "none", ml: "flex" }} width="55%">
            <img
              src={contactUsCover}
              alt=""
              style={{ maxHeight: "608px", objectFit: "cover" }}
            />
          </Stack>
          <Stack display={{ xs: "flex", ml: "none" }} width="100%">
            <img
              src={contactUsCover}
              alt=""
              style={{ maxHeight: "320px", objectFit: "cover" }}
            />
          </Stack>
          <Stack
            px={3.8}
            py={3}
            mt={{ xs: 3, ml: 0 }}
            width={{ xs: "74%", ml: "45%" }}
          >
            <ContactUsForm />
          </Stack>
        </Stack>
      </Container>

      {/* Location */}
      <Stack width="100%" alignItems="center">
        <Stack width="100%" maxWidth="xxl" pt={8} bgcolor="primary.main">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.8924997746058!2d46.658127099999994!3d24.7648747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee2c4fc185999%3A0x6ef67f252fdc0d2f!2sAl-Hokair%20Group%20Building!5e0!3m2!1sen!2ssa!4v1697817853847!5m2!1sen!2ssa"
            width="100%"
            height="264"
            style={{ border: "0", padding: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactUsPage;
