import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Divider,
  Paper,
} from "@mui/material";
import {
  IconBuilding,
  IconFileText,
  IconArrowRight,
  IconHeart,
  IconLock,
  IconFileCheck,
  IconUsers,
  IconScale,
  IconShieldCheck,
} from "@tabler/icons-react";

const policies = [
  {
    icon: <IconShieldCheck size={32} />,
    title: "Client Confidentiality",
    description:
      "We maintain the strictest confidentiality standards. All client information is protected under attorney-client privilege and our robust data security measures ensure complete privacy.",
  },
  {
    icon: <IconScale size={32} />,
    title: "Professional Ethics",
    description:
      "Our practice is guided by the highest ethical standards set by the Bar Council. We are committed to integrity, honesty, and transparency in all our dealings.",
  },
  {
    icon: <IconUsers size={32} />,
    title: "Diversity & Inclusion",
    description:
      "We believe in creating an inclusive workplace that values diversity. Our firm is committed to equal opportunities and fostering a culture of respect and collaboration.",
  },
  {
    icon: <IconFileCheck size={32} />,
    title: "Quality Assurance",
    description:
      "Every matter is handled with meticulous attention to detail. We have established quality control processes to ensure the highest standards of legal service delivery.",
  },
  {
    icon: <IconLock size={32} />,
    title: "Data Protection",
    description:
      "We comply with all data protection regulations and employ advanced security measures to safeguard client information. Regular audits ensure continuous compliance.",
  },
  {
    icon: <IconHeart size={32} />,
    title: "Pro Bono Work",
    description:
      "We are committed to giving back to society. Our firm regularly undertakes pro bono cases and provides legal aid to underprivileged sections of society.",
  },
];

function Policies() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 700,
            mb: 2,
            color: "primary.main",
            textAlign: "center",
          }}
        >
          Our Policies & Values
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "text.secondary",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          The principles and policies that define our practice and guide our
          commitment to excellence
        </Typography>

        <Grid container spacing={3}>
          {policies.map((policy, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                    borderColor: "secondary.main",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Box
                    sx={{
                      color: "primary.main",
                      mr: 2,
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    {policy.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {policy.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.7 }}
                    >
                      {policy.description}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 8 }} />

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
  );
}

export default Policies;
