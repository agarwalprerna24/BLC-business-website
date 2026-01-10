import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  CardContent,
  useTheme,
  styled,
} from "@mui/material";
import {
  IconCoin,
  IconGavel,
  IconHome,
  IconMessageCircleUser,
  IconProng,
  IconUsers,
  IconGitMerge,
} from "@tabler/icons-react";

const HoverCard = styled(Card)(({ theme }) => ({
  height: "fit-content",
  border: "1px solid",
  borderColor: theme.palette.divider,
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[4],
    borderColor: theme.palette.primary.light,
  },

  /* Hidden child section */
  "& .extraContent": {
    maxHeight: 0,
    opacity: 0,
    overflow: "hidden",
    paddingTop: 0,
    transition: theme.transitions.create(
      ["max-height", "opacity", "padding-top"],
      {
        duration: 250,
        easing: theme.transitions.easing.easeOut,
      }
    ),
  },

  /* Expand the card to reveal the child */
  "&:hover .extraContent": {
    maxHeight: 200, // bigger than content height
    opacity: 1,
    paddingTop: theme.spacing(2),
  },
}));

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
        <Grid container spacing={4} style={{ justifyContent: "center" }}>
          {[
            {
              name: "Civil & Commercial Litigation",
              icon: <IconGavel size={24} />,
            },
            {
              name: "Insolvency & Bankruptcy",
              icon: <IconCoin size={24} />,
            },
            {
              name: "Arbitration and Dispute Resolution",
              icon: <IconMessageCircleUser size={24} />,
            },

            {
              name: "General Corporate Advisory",
              icon: <IconUsers size={24} />,
            },
            {
              name: "Real Estate",
              icon: <IconHome size={24} />,
            },
            {
              name: "Employment & Labour Law",
              icon: <IconProng size={24} />,
            },
            {
              name: "Family",
              icon: <IconUsers size={24} />,
            },
            {
              name: "Mergers & Acquisitions",
              icon: <IconGitMerge size={24} />,
            },
          ].map((client, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <HoverCard
                elevation={0}
                // sx={{
                //   height: "100%",
                //   border: "1px solid",
                //   borderColor: "divider",
                //   transition: "all 0.3s ease",
                //   "&:hover": {
                //     transform: "translateY(-4px)",
                //     boxShadow: 4,
                //     borderColor: "primary.light",
                //   },
                // }}
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
                  <Box className="extraContent">
                    <Typography variant="subtitle2" textAlign={"left"} p={1}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </Typography>
                  </Box>
                </CardContent>
              </HoverCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Practices;
