import React from "react";
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import Main from "./Main";
import MiscellaneousServices from "@mui/icons-material/MiscellaneousServices";

function About() {
  return (
    <Box>
      <Main sx={{ padding: "20px" }} />
      <Box p={4} marginTop="100px" marginLeft={5} marginRight={5}>
        <Typography
          marginLeft={5}
          marginRight={5}
          variant="h5"
          mb={4}
          sx={{
            textAlign: "justify",
            fontFamily: "quicksand",
            // fontWeight: "bold",
            padding: "10px",

            // fontSize: "24px",
          }}
        >
          <Typography variant="h4">Welcome to Bhawana Appliances,</Typography>
          Where excellence meets reliability in water purification solutions!
          Nestled in the heart of Raipur, Chhattisgarh,
          <br /> Bhawana Appliances stands as a beacon of trust and quality in
          the realm of Kent RO water purifier services. Excellence!
        </Typography>
        <Typography
          marginLeft={5}
          marginRight={5}
          variant="h5"
          mb={4}
          sx={{
            textAlign: "justify",
            fontFamily: "quicksand",
            // fontWeight: "bold",
            // fontSize: "24px",
            padding: "10px",
          }}
        >
          Our team of highly skilled technicians is dedicated to providing
          top-notch service and support for your Kent RO water purifiers.
          <br />
          Step into the realm of unparalleled water purity with Bhawana
          Appliances, your ultimate destination for Kent RO solutions in Raipur,
          Chhattisgarh!
        </Typography>
        <Grid container spacing={5}>
          {/* Column for "Our Services" */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={5}
              sx={{
                p: 5,
                mb: 2,
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
                Our Services
              </Typography>
              <List>
                {[
                  "Kent RO Installation",
                  "Kent RO Repair and Maintenance",
                  "Genuine Kent Spare Parts",
                  "Annual Maintenance Contracts (AMC)",
                  "Water Quality Testing",
                ].map((service, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      textAlign: "center",
                      borderRadius: "20px",
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      boxShadow: "0px -1px 5px 0px rgba(0,0,0,0.1)",
                      marginBottom: "10px",
                    }}
                  >
                    <ListItemText
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <MiscellaneousServices sx={{ marginRight: "5px" }} />
                        {service}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          {/* Column for "Why Choose Us?" */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={5}
              sx={{
                p: 5,
                mb: 5,
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
                Why Choose Us?
              </Typography>
              <List>
                {[
                  "Certified Kent RO Experts",
                  "Prompt and Reliable Service",
                  "Customer Satisfaction Guaranteed",
                  "Competitive Pricing",
                  "Convenient Location",
                ].map((reason, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      textAlign: "center",
                      borderRadius: "20px",
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      boxShadow: "0px -1px 5px 0px rgba(0,0,0,0.1)",
                      marginBottom: "10px",
                    }}
                  >
                    <ListItemText
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <MiscellaneousServices sx={{ marginRight: "5px" }} />{" "}
                        {reason}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
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
    </Box>
  );
}

export default About;
