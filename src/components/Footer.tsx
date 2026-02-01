import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

function Footer() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (pathname === "/") {
      setOpen(true);
    }
  }, [pathname]);

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
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <img src="/images/blc_inverted.png" width={72} />
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Bhattacharjee Law Chambers – Advocates & Legal Consultants
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <MuiLink
                href="https://www.linkedin.com/company/battacharjee-law-chambers/"
                target="_blank"
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

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
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

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Us
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Grid container spacing={4}>
                <Grid>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                  >
                    <IconMapPin
                      size={20}
                      style={{ marginTop: 2, flexShrink: 0 }}
                    />
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
                </Grid>

                <Grid>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                  >
                    <IconMapPin
                      size={20}
                      style={{ marginTop: 2, flexShrink: 0 }}
                    />
                    <MuiLink
                      href="https://maps.app.goo.gl/CUJQ2DvjZnTH2PK68"
                      underline="none"
                      style={{ color: "unset" }}
                      target="_blank"
                    >
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        <span style={{ textDecoration: "underline" }}>
                          Transit Office (Delhi)
                        </span>{" "}
                        <br />
                        M-19A South Extension Part-II, <br />
                        LGF, <br />
                        New Delhi-110049
                      </Typography>
                    </MuiLink>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconPhone size={20} style={{ flexShrink: 0 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +91 99499 36611
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconMail size={20} style={{ flexShrink: 0 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  info@dbadvocate.com
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
              component={Button}
              onClick={() => setOpen(true)}
              sx={{
                color: "white",
                textDecoration: "none",
                textTransform: "none",
                opacity: 0.7,
                fontSize: "0.875rem",
                "&:hover": { opacity: 1, textDecoration: "underline" },
              }}
            >
              Disclaimer
            </MuiLink>
          </Box>
        </Box>
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Disclaimer</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText style={{ textAlign: "justify" }}>
            The Bar Council of India does not permit advertisement or
            solicitation by advocates or law firms. By accessing this website,
            you acknowledge that you are seeking information about the Chamber
            voluntarily and of your own accord, and that there has been no
            solicitation, invitation, or inducement by the firm or any of its
            members. The contents of this website are provided solely for
            general informational purposes and do not constitute legal advice,
            opinion, or recommendation. Accessing or using this website,
            including sending communications through email or contact forms,
            does not create an attorney–client relationship, which arises only
            upon formal engagement and written confirmation. <br /> While
            reasonable care is taken to ensure accuracy, the Chamber makes no
            representations or warranties, express or implied, regarding the
            completeness or reliability of the information provided, and accepts
            no liability for any loss or damage arising from reliance on such
            content. All materials and content on this website are the
            intellectual property of the Chamber and may not be reproduced or
            distributed without prior written permission. By continuing to use
            this website, you acknowledge and agree that you do so at your own
            discretion and risk.
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>I agree</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Footer;
