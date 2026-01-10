import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { IconMenu2 } from "@tabler/icons-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Mentor", path: "/mentor" },
  { label: "Team", path: "/company" },
  { label: "Newsletters", path: "/newsletters" },
  { label: "Contact Us", path: "/contact" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", pt: 1 }}>
      <List>
        {navItems.map((item) => (
          <>
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  textAlign: "left",
                  color:
                    location.pathname === item.path
                      ? "primary.main"
                      : "text.primary",
                  fontWeight: location.pathname === item.path ? 600 : 400,
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
            <Divider variant="middle" component="li" />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img src="/images/blc_logo.png" width={72} />
            <Box
              sx={{
                ml: 1.5,
                display: {
                  xs: "none", // Hidden on extra-small screens (0px and up)
                  md: "block", // Visible on small screens (600px and up)
                },
              }}
            >
              <Box
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  color: "primary.main",
                  lineHeight: 1.2,
                }}
              >
                Bhattacharjee Law Chambers
              </Box>
              <Box
                sx={{
                  fontSize: "0.75rem",
                  color: "text.secondary",
                  letterSpacing: "0.1em",
                  fontWeight: 500,
                }}
              >
                ADVOCATES & LEGAL CONSULTANTS
              </Box>
            </Box>
          </Box>

          {isMobile ? (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <IconMenu2 />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color:
                      location.pathname === item.path
                        ? "primary.main"
                        : "text.primary",
                    fontWeight: location.pathname === item.path ? 600 : 500,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: location.pathname === item.path ? "60%" : "0%",
                      height: "2px",
                      backgroundColor: "secondary.main",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "60%",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;
