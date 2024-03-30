import React, { useRef, useState, useEffect } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";

function Contact() {
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const feedbackRef = useRef();

  useEffect(() => {
    emailjs.init("p-2OV8j1HX8OIuEFQ");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_48vqggk";
    const templateId = "template_4ztbr8h";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        feedback: feedbackRef.current.value,
      });
      alert("Email successfully sent. Check your inbox.");
      nameRef.current.value = "";
      emailRef.current.value = "";
      feedbackRef.current.value = "";
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ textAlign: "center", marginBottom: 2 }}>
            <Typography variant="h5" fontWeight="bold">
              Share Your Feedback Here
            </Typography>
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              inputRef={nameRef}
              label="Name"
              variant="outlined"
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  color:
                    localStorage.getItem("theme") === "dark" ? "#fff" : "#000",
                  "& fieldset": {
                    borderColor:
                      localStorage.getItem("theme") === "dark"
                        ? "#fff"
                        : "#000",
                  },
                  backgroundColor:
                    localStorage.getItem("theme") === "dark"
                      ? "#424242" // Dark mode background color
                      : "#fff", // Light mode background color
                },
              }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              inputRef={emailRef}
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  color:
                    localStorage.getItem("theme") === "dark" ? "#fff" : "#000",
                  "& fieldset": {
                    borderColor:
                      localStorage.getItem("theme") === "dark"
                        ? "#fff"
                        : "#000",
                  },
                  backgroundColor:
                    localStorage.getItem("theme") === "dark"
                      ? "#424242" // Dark mode background color
                      : "#fff", // Light mode background color
                },
              }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              inputRef={feedbackRef}
              label="Feedback"
              multiline={true} // Set multiline to true for text area
              rows={4} // Set the number of rows for the text area
              variant="outlined"
              fullWidth
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  color:
                    localStorage.getItem("theme") === "dark" ? "#fff" : "#000",
                  "& fieldset": {
                    borderColor:
                      localStorage.getItem("theme") === "dark"
                        ? "#fff"
                        : "#000",
                  },
                  backgroundColor:
                    localStorage.getItem("theme") === "dark"
                      ? "#424242" // Dark mode background color
                      : "#fff", // Light mode background color
                },
              }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            fullWidth
          >
            {loading ? "Sending..." : "Send Feedback"}
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Contact;
