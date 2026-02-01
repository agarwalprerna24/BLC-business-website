import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import { IconCalendar, IconClock, IconArrowRight } from "@tabler/icons-react";

const newsletters = [
  {
    title: "New Data Protection Regulations: What Businesses Need to Know",
    date: "Feb, 2026",
    author: "Adv. Amit Kumar",
    // category: "Technology Law",
    readTime: "8 min read",
    excerpt:
      "The recent amendments to data protection regulations have significant implications for businesses handling personal data. This newsletter explores the key changes and compliance requirements that organizations must address.",
    tags: ["Data Protection", "Compliance", "Privacy Law"],
  },
];

function Newsletters() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url('/images/our_newsletters.png')",
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
            Legal Insights & Newsletters
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
            Stay informed with our latest legal analyses, case updates, and
            industry insights
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={4}>
          {newsletters.map((newsletter, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                    borderColor: "primary.main",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* <Chip
                    label={newsletter.category}
                    size="small"
                    sx={{
                      bgcolor: "primary.light",
                      color: "white",
                      fontWeight: 600,
                      mb: 2,
                      alignSelf: "flex-start",
                    }}
                  /> */}

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      lineHeight: 1.3,
                      minHeight: "3.6em",
                    }}
                  >
                    {newsletter.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: "text.secondary",
                      lineHeight: 1.7,
                      flexGrow: 1,
                    }}
                  >
                    {newsletter.excerpt}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {newsletter.tags.map((tag, idx) => (
                        <Chip
                          key={idx}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontSize: "0.7rem",
                            height: "24px",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      pt: 2,
                      borderTop: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    {/* <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <IconUser size={16} />
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", fontSize: "0.875rem" }}
                      >
                        {newsletter.author}
                      </Typography>
                    </Box> */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <IconCalendar size={16} />
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", fontSize: "0.875rem" }}
                        >
                          {newsletter.date}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <IconClock size={16} />
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", fontSize: "0.875rem" }}
                        >
                          {newsletter.readTime}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Button
                    variant="text"
                    endIcon={<IconArrowRight size={18} />}
                    sx={{
                      mt: 2,
                      justifyContent: "flex-start",
                      px: 0,
                      color: "secondary.main",
                      fontWeight: 600,
                      "&:hover": {
                        bgcolor: "transparent",
                        color: "secondary.dark",
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Newsletters;
