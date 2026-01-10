import { Container, Grid, Typography } from "@mui/material";

function About() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
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
            Bhattacharjee Law Chambers was founded in 1981 by Designated Senior
            Advocate Deepak Bhattacharjee, an Osmania University LLB and LLM
            gold medalist. The Chambers has established a reputation for
            excellence through over 16,000 cases among which 431 were reported.
            Today, under the leadership of Advocate Dishit Bhattacharjee, we
            serve corporations, financial institutions, startups, and
            individuals across Telangana and beyond.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Led by Advocate Dishit Bhattacharjee having years of distinguished
            practice, we specialize in dispute resolution before the High Court
            of Telangana, domestic and international arbitration, recovery
            proceedings, company and insolvency matters. Our practice seamlessly
            extends to general corporate advisory, family and employment
            disputes, real estate due diligence, and non-litigation resolutions.
            Serving as empanelled counsel to major financial institutions and
            companies, we combine decades of legal heritage with modern practice
            to deliver consistent results.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} p={2}>
          <img src="/images/courthouse.png" width="95%" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
