import { Box, Typography, Container } from "@mui/material";

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
        </Container>
      </Box>
      <Box id="contact" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md"></Container>
      </Box>
    </Box>
  );
}

export default Mentor;
