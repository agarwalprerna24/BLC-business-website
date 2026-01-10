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
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
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
              <img src="/images/blc_inverted.png" width={72} />
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Bhattacharjee Law Chambers – Advocates & Legal Consultants
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
                Civil & Commercial Litigation
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Corporate Services
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Arbitration
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Banking & Recovery
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Insolvency
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
                <MuiLink
                  href="https://maps.app.goo.gl/NvPeX1hN6toxa3NcA"
                  underline="none"
                  style={{ color: "unset" }}
                  target="_blank"
                >
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Bhattacharjee Law Chambers <br />
                    Flat No. 101, 1st Floor, Nirman Towers <br />
                    38 East Marredpally
                    <br />
                    Secunderabad – 500 026
                    <br />
                    Telangana, India
                    <br />
                  </Typography>
                </MuiLink>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconPhone size={20} style={{ flexShrink: 0 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +91 99499 36611
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconMail size={20} style={{ flexShrink: 0 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  dishit.bhattacharjee@gmail.com
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
