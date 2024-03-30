import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
// import FormatBoldIcon from "@mui/icons-material/FormatBold";
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon here

const drawerWidth = 240;
const navItems = [
  { text: "Home", link: "/" },
  { text: "About Us", link: "/about" },
  // { text: "Contact", link: "/contact" },
];

// Rest of the code remains the same...

const theme = createTheme({
  palette: {
    mode: "light", // Default theme mode
    primary: {
      main: "#2196f3", // Light mode background color
    },
    background: {
      default: "#f0f0f0", // Light mode background color
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1e88e5", // Dark mode background color
    },
    background: {
      default: "#121212", // Dark mode background color
    },
  },
});

function Main(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState(theme);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === theme ? darkTheme : theme));
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: currentTheme.palette.mode === "light" ? "#fff" : "#212121",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Adjusted background color for light and dark mode
        color: currentTheme.palette.mode === "light" ? "#000" : "#fff",
        // Adjusted text color for light and dark mode
      }}
    >
      <Box
        sx={{
          // display: "flex",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          my: 2,
          mx: "3",
          padding: "20px",
        }}
      >
        {/* <FormatBoldIcon
          sx={{
            fontSize: "5rem",
            display: "block",
            mx: "3",
            my: 2,
          }} */}
        {/* /> */}
        <Typography
          variant="h6"
          component="span"
          sx={{
            fontWeight: "bold",
            my: 5,
            fontSize: "2rem",
            fontFamily: "Quicksand",
            textAlign: "center",
          }}
        >
          Bhawana <br /> Appliances
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <Button
              component={Link}
              to={item.link}
              sx={{
                width: "100%",
                textAlign: "center",
                my: 2,
                background:
                  currentTheme.palette.mode === "light" ? "#fff" : "#212121", // Adjusted background color for light and dark mode
                color: currentTheme.palette.mode === "light" ? "#000" : "#fff", // Adjusted text color for light and dark mode
              }}
            >
              <ListItemText primary={item.text} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={currentTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ height: "90px" }}>
          <Toolbar sx={{ height: "100%", pr: "30px" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Bhawana Appliances
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }, mr: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.link}
                  sx={{
                    color: "#fff",
                    fontSize: "1.5rem",
                    mr: 2,
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
            <Button onClick={toggleTheme} sx={{ color: "#fff" }}>
              <Brightness4Icon /> {/* Mode change icon */}
            </Button>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </ThemeProvider>
  );
}

export default Main;
