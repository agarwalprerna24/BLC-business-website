import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/images/hero_2.png')",
        backgroundSize: "cover",
        // background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
        color: "white",
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 10 },
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
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
                fontWeight: 700,
                mb: 1,
                lineHeight: 1.2,
              }}
            >
              Precision is our first argument.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                opacity: 0.95,
                fontWeight: 400,
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              Your premier partner for dispute resolution, strategic corporate
              advisory and compliance.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="medium"
                component={Link}
                to="/contact"
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
                size="medium"
                component={Link}
                to="/company"
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
                Our Team
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
