import React, { useRef, useState } from "react";

import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  TextField,
  Stack,
  Typography,
} from "@mui/material";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import emailjs from "@emailjs/browser";

const inputStyles = { marginTop: "0 !important", paddingLeft: "4px" };

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [error, setError] = useState({ noName: false, noEmail: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.user_name || !formData.user_email) {
      if (!formData.user_name) {
        setError({ ...error, noName: true });
        if (!formData.user_email) {
          setError({
            noName: true,
            noEmail: "true",
          });
        }
      } else {
        setError({
          ...error,
          noEmail: "true",
        });
      }
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    if (validateForm()) {
      setIsSubmitting(true);
      console.log("inside validation");

      emailjs
        .sendForm(
          "service_o7q1v9v",
          "template_upvs5ho",
          formRef.current,
          "8Y-8N1w3dj98OeXZJ"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSent(true);
            setIsSubmitting(false);
            setFormData({
              user_name: "",
              user_email: "",
              user_phone: "",
              message: "",
            });
          },
          (error) => {
            console.log(error.text);
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <Stack>
      <Typography
        mb={1}
        variant="h1"
        color="secondary.main"
        textAlign={{ xs: "center", ml: "initial" }}
      >
        GET IN TOUCH
      </Typography>
      <Typography
        variant="body1"
        fontWeight="normal"
        mb={0.5}
        textAlign={{ xs: "center", ml: "initial" }}
      >
        We'd love to hear from you! Please feel free to get in touch with us
        using the contact form below.
      </Typography>

      <form ref={formRef} onSubmit={sendEmail}>
        <FormControl sx={{ width: "100%" }}>
          <Stack my={1.5}>
            <FormLabel>Name *</FormLabel>
            <Input
              placeholder="Your name"
              type="text"
              sx={inputStyles}
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
            />
            {error.noName && (
              <FormHelperText>
                <Stack flexDirection="row" alignItems="center">
                  <InfoOutlined />
                  Please enter your Name
                </Stack>
              </FormHelperText>
            )}
          </Stack>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <Stack my={1.5}>
            <FormLabel>Email *</FormLabel>

            <Input
              placeholder="Your Email"
              type="email"
              sx={inputStyles}
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
            />
            {error.noEmail && (
              <FormHelperText>
                <Stack flexDirection="row" alignItems="center">
                  <InfoOutlined />
                  Please enter your Email
                </Stack>
              </FormHelperText>
            )}
          </Stack>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <Stack my={1.5}>
            <FormLabel>Phone Number </FormLabel>
            <Input
              placeholder="Your Phone Number"
              type="tel"
              sx={inputStyles}
              name="user_phone"
              value={formData.user_phone}
              onChange={handleChange}
            />
          </Stack>
        </FormControl>
        <Stack my={1.5} gap={0.5}>
          <FormLabel>Message</FormLabel>
          <TextField
            id="standard-multiline-static"
            multiline
            placeholder="Your Message..."
            rows={4}
            variant="standard"
            name="message"
            onChange={handleChange}
            value={formData.message}
          />
        </Stack>
        <Stack width={{ xs: "100%", ml: "50%" }} my={1.5}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            type="submit"
            disabled={isSubmitting}
          >
            SEND MESSAGE
          </Button>
        </Stack>
        {isSent && (
          <FormHelperText>
            <Stack flexDirection="row" alignItems="center" color="success.main">
              <CheckCircleOutlineIcon />
              Message Sent Successfully!{" "}
            </Stack>
          </FormHelperText>
        )}
      </form>
    </Stack>
  );
};

export default ContactUsForm;
