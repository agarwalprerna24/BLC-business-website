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
import {
  IconCalendar,
  IconUser,
  IconClock,
  IconArrowRight,
} from "@tabler/icons-react";

const newsletters = [
  {
    title: "New Data Protection Regulations: What Businesses Need to Know",
    date: "December 15, 2024",
    author: "Adv. Amit Kumar",
    category: "Technology Law",
    readTime: "8 min read",
    excerpt:
      "The recent amendments to data protection regulations have significant implications for businesses handling personal data. This newsletter explores the key changes and compliance requirements that organizations must address.",
    tags: ["Data Protection", "Compliance", "Privacy Law"],
  },
  {
    title: "Supreme Court Ruling on Corporate Governance Standards",
    date: "December 10, 2024",
    author: "Adv. Rajesh Bhattacharjee",
    category: "Corporate Law",
    readTime: "10 min read",
    excerpt:
      "A recent Supreme Court judgment has set new precedents for corporate governance standards in India. We analyze the implications of this landmark ruling for boards of directors and corporate entities.",
    tags: ["Corporate Governance", "Supreme Court", "Compliance"],
  },
  {
    title: "Intellectual Property Rights in the Digital Age",
    date: "December 5, 2024",
    author: "Adv. Amit Kumar",
    category: "IP Law",
    readTime: "7 min read",
    excerpt:
      "The digital revolution has created new challenges and opportunities for intellectual property protection. This article examines emerging trends in IP law and strategies for protecting digital assets.",
    tags: ["Intellectual Property", "Digital Rights", "Technology"],
  },
  {
    title: "Tax Reforms 2024: Impact on Businesses and Individuals",
    date: "November 28, 2024",
    author: "Adv. Meera Sharma",
    category: "Tax Law",
    readTime: "12 min read",
    excerpt:
      "The government has announced significant tax reforms that will affect both businesses and individual taxpayers. We provide a comprehensive overview of the changes and planning strategies.",
    tags: ["Tax Law", "Finance", "Compliance"],
  },
  {
    title: "Real Estate Transactions: Legal Due Diligence Checklist",
    date: "November 20, 2024",
    author: "Adv. Priya Bhattacharjee",
    category: "Real Estate",
    readTime: "9 min read",
    excerpt:
      "Proper legal due diligence is crucial for real estate transactions. This comprehensive checklist covers all essential aspects that buyers and investors should verify before completing a property deal.",
    tags: ["Real Estate", "Due Diligence", "Property Law"],
  },
  {
    title: "Employment Law Updates: Remote Work Policies",
    date: "November 15, 2024",
    author: "Adv. Meera Sharma",
    category: "Employment Law",
    readTime: "6 min read",
    excerpt:
      "The shift to remote work has raised new legal questions about employment contracts, workplace safety, and employee rights. We discuss the evolving legal framework governing remote work arrangements.",
    tags: ["Employment Law", "Remote Work", "Labor Rights"],
  },
  {
    title: "Banking Regulations: Recent Changes in Loan Documentation",
    date: "November 8, 2024",
    author: "Adv. Meera Sharma",
    category: "Banking & Finance",
    readTime: "11 min read",
    excerpt:
      "RBI has introduced new guidelines for loan documentation and disclosure requirements. Financial institutions and borrowers need to understand these changes to ensure compliance.",
    tags: ["Banking", "Finance", "Regulations"],
  },
  {
    title: "Arbitration vs Litigation: Choosing the Right Dispute Resolution",
    date: "November 1, 2024",
    author: "Adv. Rajesh Bhattacharjee",
    category: "Dispute Resolution",
    readTime: "8 min read",
    excerpt:
      "Businesses face critical decisions when disputes arise. This newsletter compares arbitration and litigation, helping you choose the most appropriate dispute resolution mechanism for your situation.",
    tags: ["Arbitration", "Litigation", "ADR"],
  },
  {
    title: "Constitutional Rights and Public Interest Litigation",
    date: "October 25, 2024",
    author: "Adv. Priya Bhattacharjee",
    category: "Constitutional Law",
    readTime: "10 min read",
    excerpt:
      "Public Interest Litigation has been a powerful tool for protecting constitutional rights. We examine recent PIL cases and their impact on fundamental rights protection in India.",
    tags: ["Constitutional Law", "PIL", "Rights"],
  },
];

function Newsletters() {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: { xs: 8, md: 10 },
          textAlign: "center",
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
                  <Chip
                    label={newsletter.category}
                    size="small"
                    sx={{
                      bgcolor: "primary.light",
                      color: "white",
                      fontWeight: 600,
                      mb: 2,
                      alignSelf: "flex-start",
                    }}
                  />

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
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <IconUser size={16} />
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", fontSize: "0.875rem" }}
                      >
                        {newsletter.author}
                      </Typography>
                    </Box>
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

      <Box sx={{ bgcolor: "grey.50", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: "center",
              p: { xs: 3, md: 5 },
              bgcolor: "white",
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "primary.main",
              }}
            >
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
              Get the latest legal insights, case updates, and industry news
              delivered directly to your inbox
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                maxWidth: 500,
                mx: "auto",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.dark",
                  px: 4,
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "secondary.dark",
                    color: "white",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Newsletters;
