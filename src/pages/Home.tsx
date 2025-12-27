import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  IconBuilding,
  IconFileText,
  IconArrowRight,
} from "@tabler/icons-react";
import Hero from "../components/Hero";
import About from "../components/AboutUs";
import ClientBanner from "../components/Practices";
import ContactUs from "../components/ContactUs";

function Home() {
  return (
    <Box>
      <Hero />

      <About />

      <ClientBanner />

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                border: "2px solid",
                borderColor: "primary.main",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 3,
                    color: "primary.main",
                  }}
                >
                  <IconBuilding size={48} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                  Our Firm
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  Learn more about our team of experienced partners, our values,
                  and the policies that guide our practice.
                </Typography>
                <Button
                  component={Link}
                  to="/company"
                  variant="contained"
                  endIcon={<IconArrowRight size={20} />}
                  sx={{
                    bgcolor: "primary.main",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  }}
                >
                  Explore Company
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                border: "2px solid",
                borderColor: "secondary.main",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 3,
                    color: "secondary.dark",
                  }}
                >
                  <IconFileText size={48} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                  Newsletters
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  Stay updated with our latest newsletters covering legal
                  developments, case analyses, and industry trends.
                </Typography>
                <Button
                  component={Link}
                  to="/newsletters"
                  variant="contained"
                  endIcon={<IconArrowRight size={20} />}
                  sx={{
                    bgcolor: "secondary.main",
                    color: "primary.dark",
                    "&:hover": {
                      bgcolor: "secondary.dark",
                      color: "white",
                    },
                  }}
                >
                  Read Newsletters
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <ContactUs />
    </Box>
  );
}

export default Home;
