import { Box, Container, Grid, Typography, Button, Link } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/images/hero_2.png')",
        // background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
        color: "white",
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 14 },
        position: "relative",
        overflow: "hidden",
        backgroundPosition: "0px 0px",
        animation: "animatedBackground 20s linear infinite alternate",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 50%, rgba(184, 134, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(184, 134, 11, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "lighten",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Excellence in Legal Practice
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.95,
                fontWeight: 400,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
              }}
            >
              Your trusted partner in navigating complex legal challenges with
              integrity, expertise, and unwavering commitment to justice.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                href="#contact"
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.dark",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "secondary.light",
                  },
                }}
              >
                Get Consultation
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/expertise"
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "secondary.main",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Our Expertise
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconScale size={280} strokeWidth={1} opacity={0.15} />
            </Box> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
