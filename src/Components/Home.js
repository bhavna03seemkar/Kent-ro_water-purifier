import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Main from "./Main";
import Contact from "./Contact";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function MediaCard() {
  return (
    <>
      <Main sx={{ padding: "20px" }} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="stretch"
        maxWidth="90%"
        sx={{
          margin: "auto",
          marginTop: 10, // Adjusted marginTop to prevent overlap with app bar
          mb: 2,
          padding: 2,
          textAlign: "center",
        }}
      >
        <Grid container spacing={2} direction={{ xs: "row", md: "row" }}>
          {/* Grid for the image */}
          <Grid item xs={12} md={6} sx={{ marginBottom: { xs: 2, md: 2 } }}>
            <Paper
              elevation={5}
              sx={{
                p: 5,
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                color: "#ffffff",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <img
                  src="/Images/kent_ro.jpg"
                  alt="Kent-Ro Water Purifier"
                  style={{
                    width: "80%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    margin: "0 auto",
                    borderRadius: "20px",
                    boxShadow: "0 2px 4px rgba(0, 0, 4, 0.2)",
                  }}
                />
              </Box>
            </Paper>
          </Grid>

          {/* Grid for "Our Services" */}
          <Grid item xs={12} md={6} sx={{ marginBottom: { xs: 0, md: 2 } }}>
            <Paper
              elevation={5}
              sx={{
                p: 5,
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                color: "#ffffff",
              }}
            >
              <Typography
                variant="h4"
                mb={3}
                fontWeight="bold"
                align="center"
                fontFamily={"quicksand"}
              >
                Bhawana Appliances
              </Typography>
              <Typography
                variant="h5"
                fontFamily={"quicksand"}
                align="center"
                mb={3}
                fontWeight={"bold"}
              >
                Your Trusted Kent RO Service Center
              </Typography>
              <Typography
                variant="h5"
                fontFamily={"quicksand"}
                align="left"
                mb={4}
                padding={3}
              >
                <MiscellaneousServicesIcon /> From meticulous Kent RO
                installations to swift and efficient repairs and maintenance,{" "}
                <br />
                <br /> <MiscellaneousServicesIcon /> Bhawana Appliances covers
                every aspect of your Kent RO system's lifecycle. <br />
                <br />
                <MiscellaneousServicesIcon /> We pride ourselves on providing
                genuine Kent spare parts to ensure optimal performance and
                longevity of your water purifier.
                <br />
                <br />
                <MiscellaneousServicesIcon /> At Bhawana Appliances, we don't
                just fix machines; we build relationships based on trust,
                reliability, and exceptional service.
              </Typography>
              {/* Your other content here */}
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="stretch"
        maxWidth="90%"
        sx={{
          margin: "auto",
          marginTop: 10, // Adjusted marginTop to prevent overlap with app bar
          mb: 2,
          padding: 2,
          textAlign: "center",
        }}
      >
        <Grid item xs={12} md={6} sx={{ marginBottom: { xs: 2, md: 2 } }}>
          <Paper
            elevation={5}
            sx={{
              p: 5,
              height: "100%",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              color: "#ffffff",
            }}
          >
            <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
              {/* Location */}
              <Typography
                variant="h4"
                mb={3}
                fontWeight="bold"
                align="center"
                fontFamily={"quicksand"}
              >
                Contact Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{ fontSize: 50, color: "primary" }}
                />
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "quicksand", marginLeft: "10px" }}
                >
                  Devendra Nagar Sector 1, Near City Center Mall, Raipur,
                  Chhattisgarh
                </Typography>
              </Box>

              {/* Phone Contact */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <PhoneOutlinedIcon sx={{ fontSize: 50, color: "primary" }} />
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "quicksand", marginLeft: "10px" }}
                >
                  +91 9111648095, +91 9109185811
                </Typography>
              </Box>

              {/* Email */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <EmailOutlinedIcon sx={{ fontSize: 50, color: "primary" }} />
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "quicksand", marginLeft: "10px" }}
                >
                  bhawanaappliances@gmail.com
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Box>
      <Contact />
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
          color: "#ffffff", // Text color
          padding: "20px",
          textAlign: "center",
          boxShadow: "0px -1px 5px 0px rgba(0,0,0,0.1)", // Add a subtle shadow
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Bhawana Appliances. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
