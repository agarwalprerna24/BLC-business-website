import { Box, Typography, Container, Grid } from "@mui/material";

function Mentor() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url('/images/our_mentor.png')",
          bgcolor: "primary.main",
          color: "white",
          py: { xs: 8, md: 10 },
          textAlign: "center",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Our Mentor
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 800,
              mx: "auto",
              opacity: 0.95,
              fontWeight: 400,
            }}
          >
            Strategic guidance grounded in knowledge and integrity.
          </Typography>
        </Container>
      </Box>
      <Box id="contact" sx={{ py: { xs: 8, md: 10 }, px: { xs: 0, md: 10 } }}>
        <Container maxWidth={false}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 4,
              color: "primary.main",
            }}
          >
            Deepak Bhattacharjee
          </Typography>

          <Grid container sx={{ display: "inline-block" }}>
            <img
              src="/images/deepak_bhattacharjee.png"
              width="300"
              style={{
                float: "left",
                marginRight: "2rem",
                marginBottom: "2rem",
                borderRadius: "25px",
              }}
            />
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontSize: "1.1rem" }}
            >
              Deepak Bhattacharjee is a Senior Advocate with over four decades
              of distinguished experience in constitutional, administrative, and
              public law litigation. An alumnus of the University College of
              Law, Osmania University, where he graduated as a university
              topper, he also holds a Master’s degree in Constitutional Law.
              Enrolled with the Bar in 1981, he commenced independent practice
              in 1983 and has since built a practice of national standing,
              marked by legal depth, consistency, and institutional trust.{" "}
              <br />
              He has appeared as arguing counsel in over 16,000 cases, with 431
              judgments reported in leading law journals, reflecting
              authoritative and referable legal principles. He regularly appears
              before the Supreme Court of India, the High Court of Telangana and
              including other High Courts, the National Company Law Tribunal
              (NCLT), Debt Recovery Tribunals (DRT), and civil courts,
              representing companies, public institutions, individual clients,
              and leading law firms. His practice has included representation in
              several matters of national importance, including landmark cases
              such as Astrology is Science, the Obulapuram Mining Case, the
              Hepatitis B Vaccine Case, matters concerning powers under the
              Cantonment Act, and proceedings under the Army Act. He has been
              designated as Senior Advocate by the High Court and has acted as
              standing counsel to numerous universities, public sector
              undertakings, banks, financial institutions, and central
              government bodies. <br />
              Advocate Bhattacharjee’s contributions to the legal profession
              have been widely recognised through prestigious honours, including
              the Indian Icon Award 2022 (Best Legal Professional of the Year –
              India), the National Lifetime Achievement Award (2019), the Bharat
              Shanti Dooth Award (2020) conferred by a UNO-affiliated
              institution, the Nandini Sevaratna Award for excellence in
              advocacy, and the “Ambassador of Good Will” honour from Lions
              Clubs International. He has also served as a nominated member of
              the Bar Council, contributing significantly to professional
              governance and institutional development.
            </Typography>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Mentor;
