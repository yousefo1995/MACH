import { Stack, Typography } from "@mui/material";
import React from "react";

const clientsIcons = [
  {
    name: "Alhakir",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-alhakir.webp?alt=media&token=0d4eada0-20b4-4a51-8d63-6581f08acfe8",
  },
  {
    name: "Almana Hospital",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-almanaHospitals.png?alt=media&token=8de0edaa-0018-42e1-aa10-f7cde14bbc12",
  },
  {
    name: "AMCO",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-AMCO.png?alt=media&token=46b117f7-64ec-4c4e-9530-5ccc82843192",
  },
  {
    name: "Faisaliah",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-faisaliah.jpg?alt=media&token=0c525d4d-d50d-4a3c-92ab-ae22ae211896",
  },
  {
    name: "Panda",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-Panda.png?alt=media&token=302a14dd-6932-4d91-8282-5829bc458f0f",
  },
  {
    name: "Petro Min",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-petroMin.jpg?alt=media&token=a3a4dc3d-8d85-4b7b-a513-4ae69f08f8d1",
  },
  {
    name: "Pure Gym",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-pureGym.png?alt=media&token=68b70e95-f7e3-4ec7-9e1a-9c934537815c",
  },
  {
    name: "Riyadh Pharma",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-RiyadhPharma.png?alt=media&token=7fa4452f-853d-4a20-b43a-817dbeaaf4e8",
  },
  {
    name: "SPL",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-SPL.jpg?alt=media&token=2a234bbe-98e8-468f-8072-b5d702e67c11",
  },
  {
    name: "Sporky",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-sporkys.png?alt=media&token=62fd250f-2d87-4830-90c2-62fbe512317a",
  },
  {
    name: "United Motors",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-unitedMotors.jpg?alt=media&token=c106206d-522a-4028-bc96-2b0e2cbbcf6c",
  },
  {
    name: "Al-Mamlaka Hospital",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-Al-mamlakHospital.jpeg?alt=media&token=809cf1c0-0c36-49d3-8d76-3e6e2725531b",
  },
  {
    name: "Padel-In",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-padel-In.png?alt=media&token=3ebf3ed1-2eb3-45bc-a562-c79ea7b44462",
  },
  {
    name: "Tamimi Markets",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-tamimiMarkets.png?alt=media&token=2323920c-c771-4728-9c90-a4d898572143",
  },
  {
    name: "Ministry Of Energy",
    url: "https://firebasestorage.googleapis.com/v0/b/mahc-f965e.appspot.com/o/OurClients%2Fclient-ministryOfEnergy.jpg?alt=media&token=36d428b5-00f6-42b8-bf5c-503f747ef0cd",
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
        color="primary"
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
