import { Stack, Typography } from "@mui/material";
import React from "react";

const clientsIcons = [
  {
    name: "Ministry Of Energy",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-ministryOfEnergy.jpg?alt=media&token=5358753b-97df-478f-9496-ee10a608747f",
  },
  {
    name: "Modon",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fmodon.png?alt=media&token=0f7900d6-3a38-48f7-8214-8dae493a2596",
  },
  {
    name: "Nahdi",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fnahdi.png?alt=media&token=6c0b64b3-5230-4468-a6f7-ad30b4719bb8",
  },
  {
    name: "Panda",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-Panda.png?alt=media&token=5a63e84d-c66f-407f-b5b1-f0c40a568c45",
  },
  {
    name: "Tamimi Markets",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-tamimiMarkets.png?alt=media&token=242de5d7-1dee-4911-a66f-51121e95de3f",
  },
  {
    name: "Alhakir",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-alhakir.webp?alt=media&token=df540b18-eed1-4fac-a2a7-b40d98874f98",
  },
  {
    name: "Almana Hospital",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-almanaHospitals.png?alt=media&token=27dd8e52-7c3e-43af-b82f-737d96e6d5d3",
  },
  {
    name: "AMCO",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-AMCO.png?alt=media&token=66288321-b95f-4eed-b049-60cdb77fafa1",
  },
  {
    name: "Faisaliah",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-faisaliah.jpg?alt=media&token=8b44c355-dca7-4f3b-bd71-45bfcd9a9846",
  },
  {
    name: "Petro Min",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-petroMin.jpg?alt=media&token=9b7a008f-96e4-4351-a1da-5842dbe61cb2",
  },
  {
    name: "Pure Gym",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-pureGym.png?alt=media&token=9c8a349b-88ab-4de5-a86b-485d87b889ff",
  },
  {
    name: "Riyadh Pharma",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-RiyadhPharma.png?alt=media&token=304e39f1-a345-453b-b085-b58cba6f1240",
  },
  {
    name: "SPL",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-SPL.jpg?alt=media&token=79e6367b-0035-4634-8213-ea2a40c78463",
  },
  {
    name: "Sporky",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-sporkys.png?alt=media&token=35fe4e43-b803-4631-96b1-b6ffa8383f83",
  },
  {
    name: "United Motors",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-unitedMotors.jpg?alt=media&token=fd2f7a7c-900e-49d6-81cf-1a2f64e693a2",
  },
  {
    name: "Al-Mamlaka Hospital",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fclient-Al-mamlakHospital.jpeg?alt=media&token=376aae31-ce14-4c4f-9468-ed800cd3cb07",
  },
  {
    name: "Padel-In",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-7c309.appspot.com/o/OurClients%2Fpadel-in.jpg?alt=media&token=16c803a3-c8a5-4bfc-9997-43a2430bec83",
  },
];

const OurClientsSection = () => {
  return (
    <Stack width="100%" alignItems="center" mt={2} mb={6}>
      <Typography
        variant="h1"
        fontSize="36px"
        fontWeight="700"
        mb={3}
        color="primary.main"
      >
        <span style={{ borderBottom: "4px solid" }}>Our Clients</span>
      </Typography>
      <Typography
        width="60%"
        textAlign="center"
        variant="body1"
        mb={1}
        color="primary.main"
      >
        MAHC is proud to collaborate with a diverse range of clients from
        various industries. Our commitment to excellence has fostered strong,
        lasting partnerships with organizations across sectors.
      </Typography>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        maxWidth="77%"
        justifyContent="space-evenly"
        mt={2}
      >
        {clientsIcons.map((item, index) => (
          <Stack
            key={index}
            mt={1}
            px={{ xs: 1, xl: 5 }}
            justifyContent="center"
          >
            <img
              src={item.url}
              alt={item.name}
              loading="lazy"
              style={{ maxWidth: "100px" }}
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default OurClientsSection;
