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
            sx={{
              mb: 2,
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "justify",
            }}
          >
            Bhattacharjee Law Chambers traces its origins to 1981, when
            Designated Senior Advocate Deepak Bhattacharjee established Deepak
            Bhattacharjee &amp; Associates, laying the foundation for a practice
            rooted in courtroom advocacy, and institutional trust. An alumnus of
            the University College of Law, Osmania University, and a gold
            medallist in both LL.B. and LL.M., he developed a distinguished
            litigation career, having appeared in over 16,000 cases, with 431
            reported judgments contributing to the development of legal
            precedent.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "justify",
            }}
          >
            Building upon this legacy, Bhattacharjee Law Chambers was
            subsequently founded under the leadership of Advocate Dishit
            Bhattacharjee, with a focus on delivering structured, contemporary
            legal solutions while preserving the Chamber’s longstanding
            standards of rigor and integrity. The Chamber represents
            corporations, financial institutions, start-ups, and individual
            clients across Telangana and other jurisdictions, and specialises in
            dispute resolution before the High Court of Telangana, domestic and
            international arbitration, recovery proceedings, company and
            insolvency matters. The practice also extends to corporate advisory,
            employment and family disputes, real estate due diligence, and non-
            litigation resolutions, combining decades of legal heritage with a
            modern, solution- oriented approach.
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
