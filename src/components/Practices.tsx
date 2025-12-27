import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  CardContent,
  useTheme,
  Button,
} from "@mui/material";
import {
  IconArrowRight,
  IconCoin,
  IconGavel,
  IconHome,
  IconMessageCircleUser,
  IconProng,
  IconUsers,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Practices() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: `${theme.palette.secondary.light}`,
        py: { xs: 8, md: 10 },
      }}
      style={{ textAlign: "center" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 700,
            mb: 2,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          Our Expertise
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "text.secondary",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Trusted by leading corporations, startups, and individuals across
          diverse sectors
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: "Corporate Law",
              icon: <IconCoin size={24} />,
            },
            {
              name: "Real Estate",
              icon: <IconHome size={24} />,
            },
            {
              name: "Criminal Defense",
              icon: <IconUsers size={24} />,
            },
            {
              name: "Civil Litigation",
              icon: <IconGavel size={24} />,
            },
            {
              name: "Employment Law",
              icon: <IconProng size={24} />,
            },
            {
              name: "Regulatory Compliance",
              icon: <IconMessageCircleUser size={24} />,
            },
          ].map((client, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                    borderColor: "primary.light",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Grid container>
                    <Grid size={{ xs: 3 }}>
                      <Avatar
                        sx={{
                          width: 56,
                          height: 56,
                          bgcolor: "primary.main",
                          mb: 2,
                          fontSize: "1.5rem",
                          fontWeight: 700,
                        }}
                      >
                        {client.icon}
                      </Avatar>
                    </Grid>
                    <Grid
                      size={{ xs: 9 }}
                      style={{ alignContent: "center", textAlign: "left" }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {client.name}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Button
        component={Link}
        to="/expertise"
        variant="contained"
        endIcon={<IconArrowRight size={20} />}
        sx={{
          my: "16px",
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        Practice & Expertise
      </Button>
    </Box>
  );
}

export default Practices;
