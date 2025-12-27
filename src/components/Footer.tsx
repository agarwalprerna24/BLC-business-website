import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  IconScale,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.dark",
        color: "white",
        pt: 6,
        pb: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <IconScale size={32} />
              <Typography variant="h6" sx={{ ml: 1, fontWeight: 700 }}>
                BLC
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Bhattacharjee Law Chambers is a full-service law firm committed to
              providing exceptional legal services with integrity and
              excellence.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <MuiLink
                href="#"
                sx={{
                  color: "white",
                  opacity: 0.8,
                  "&:hover": { opacity: 1 },
                  transition: "opacity 0.3s",
                }}
              >
                <IconBrandLinkedin size={24} />
              </MuiLink>
              <MuiLink
                href="#"
                sx={{
                  color: "white",
                  opacity: 0.8,
                  "&:hover": { opacity: 1 },
                  transition: "opacity 0.3s",
                }}
              >
                <IconBrandTwitter size={24} />
              </MuiLink>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MuiLink
                component={Link}
                to="/"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": { opacity: 1, textDecoration: "underline" },
                }}
              >
                Home
              </MuiLink>
              <MuiLink
                component={Link}
                to="/expertise"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": { opacity: 1, textDecoration: "underline" },
                }}
              >
                Expertise
              </MuiLink>
              <MuiLink
                component={Link}
                to="/company"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": { opacity: 1, textDecoration: "underline" },
                }}
              >
                Company
              </MuiLink>
              <MuiLink
                component={Link}
                to="/newsletters"
                sx={{
                  color: "white",
                  textDecoration: "none",
                  opacity: 0.8,
                  "&:hover": { opacity: 1, textDecoration: "underline" },
                }}
              >
                Newsletters
              </MuiLink>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Practice Areas
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Corporate Law
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Intellectual Property
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Litigation
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Real Estate
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 2.5 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <IconMapPin size={20} style={{ marginTop: 2, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconPhone size={20} style={{ flexShrink: 0 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +91 33 1234 5678
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconMail size={20} style={{ flexShrink: 0 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  info@blc.in
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            &copy; {new Date().getFullYear()} Bhattacharjee Law Chambers. All
            rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <MuiLink
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                opacity: 0.7,
                fontSize: "0.875rem",
                "&:hover": { opacity: 1, textDecoration: "underline" },
              }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                opacity: 0.7,
                fontSize: "0.875rem",
                "&:hover": { opacity: 1, textDecoration: "underline" },
              }}
            >
              Terms of Service
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
