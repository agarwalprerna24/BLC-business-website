import { Container, Grid, Typography, Box, Paper } from "@mui/material";
import {
  IconBriefcase,
  IconShield,
  IconUsers,
  IconTrendingUp,
  IconCheck,
} from "@tabler/icons-react";

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 3,
              color: "primary.main",
            }}
          >
            About Bhattacharjee Law Chambers
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Established with a vision to provide comprehensive legal solutions,
            Bhattacharjee Law Chambers has grown to become one of the most
            trusted law firms in the region.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Our team of experienced advocates and legal consultants brings
            decades of combined expertise across diverse practice areas,
            ensuring that our clients receive the highest quality legal
            representation and strategic counsel.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              "Over 25 years of combined legal experience",
              "Successfully resolved 500+ cases",
              "Client satisfaction rate of 98%",
              "Expertise across multiple practice areas",
            ].map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
              >
                <Box
                  sx={{
                    bgcolor: "secondary.main",
                    borderRadius: "50%",
                    p: 0.5,
                    display: "flex",
                  }}
                >
                  <IconCheck size={18} color="white" />
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={3}>
            {[
              {
                icon: <IconShield size={40} />,
                title: "Trusted Expertise",
                description: "Decades of experience in complex legal matters",
              },
              {
                icon: <IconUsers size={40} />,
                title: "Client-Focused",
                description: "Personalized approach to every case",
              },
              {
                icon: <IconTrendingUp size={40} />,
                title: "Proven Results",
                description: "Track record of successful outcomes",
              },
              {
                icon: <IconBriefcase size={40} />,
                title: "Full-Service",
                description: "Comprehensive legal solutions under one roof",
              },
            ].map((item, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
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
                      boxShadow: 3,
                      borderColor: "secondary.main",
                    },
                  }}
                >
                  <Box sx={{ color: "primary.main", mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
