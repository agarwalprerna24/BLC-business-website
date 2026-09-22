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
import { Link } from "react-router-dom";
import {
  IconCalendar,
  IconClock,
  IconArrowRight,
  IconExternalLink,
} from "@tabler/icons-react";

type Newsletter = {
  id: number;
  title: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  // When present, the newsletter is a downloadable PDF: the card opens this
  // URL in a new tab instead of navigating to an in-app article page.
  pdfUrl?: string;
};

const newsletters: Newsletter[] = [
  {
    id: 7,
    title: "Quarterly Newsletter | Issue I",
    date: "May–Aug, 2026",
    author: "Bhattacharjee Law Chambers",
    readTime: "Quarterly digest",
    excerpt:
      "Our inaugural quarterly newsletter brings together the most significant legal developments across India and Telangana between May and August 2026. Issue I distils the quarter's key rulings and reforms across seven sections — Insolvency and Restructuring, Arbitration, Corporate, Commercial and Regulatory, Tax and GST, Labour and Employment, Consumer Protection, and Telangana.",
    tags: ["Quarterly Digest", "India & Telangana", "Legal Updates"],
    pdfUrl: "/newsletters/BLC_Quarterly_Newsletter_I.pdf",
  },
  {
    id: 6,
    title: "IBC Amendment 2026 | 2026 | ISSUE #6",
    date: "May, 2026",
    author: "Dishit Bhattacharjee",
    readTime: "9 min read",
    excerpt:
      "The insolvency framework has entered another important phase of reform. With most provisions of the Insolvency and Bankruptcy Code (Amendment) Act, 2026 brought into force from 26 May 2026, and the IBBI introducing valuation related amendments, the legal architecture now reflects a more commercially responsive approach to distress resolution, liquidation, and value preservation.",
    tags: ["IBC", "Insolvency", "Reform"],
  },
  {
    id: 5,
    title: "Dowry Death: Soon Before Her Death | 2026 | ISSUE #5",
    date: "May, 2026",
    author: "Dishit Bhattacharjee",
    readTime: "7 min read",
    excerpt:
      'Few phrases in criminal law have caused as much sustained judicial scrutiny in dowry death cases as the expression "soon before her death". The phrase appears simple, but its legal role is exacting. It is the point at which allegation, evidentiary burden, and statutory presumption converge. In many prosecutions, the success or failure of the case turns on whether the evidence establishes this requirement with the degree of proximity and credibility the law demands.',
    tags: ["Criminal Law", "Dowry Death", "Evidence"],
  },
  {
    id: 4,
    title: "Corporate Laws Amendment Bill 2026 | 2026 | ISSUE #4",
    date: "May, 2026",
    author: "Dishit Bhattacharjee",
    readTime: "8 min read",
    excerpt:
      "The Corporate Laws (Amendment) Bill, 2026 is an important marker in the continuing evolution of India's corporate regulatory framework. It is significant not only for the amendments it proposes, but also for the regulatory philosophy it reflects. The Bill seeks to reduce avoidable procedural burden, recalibrate the enforcement response to technical defaults, and align corporate regulation more closely with contemporary business realities, while shifting regulatory attention toward areas where accountability has greater systemic significance.",
    tags: ["Corporate Law", "Compliance", "Governance"],
  },
  {
    id: 3,
    title: "APR | 2026 | ISSUE #3",
    date: "Apr, 2026",
    author: "Dishit Bhattacharjee",
    readTime: "10 min read",
    excerpt:
      "The evolving jurisprudence under the Insolvency and Bankruptcy Code, 2016 continues to refine the contours of liability, particularly in relation to personal guarantors to corporate debtors. A recent ruling of the NCLT Hyderabad Bench offers a clear exposition on the co-extensive nature of guarantor liability, limitation, and the interplay of the IBC with the Indian Contract Act.",
    tags: ["IBC", "Personal Guarantees", "Insolvency"],
  },
  {
    id: 2,
    title: "MAR | 2026 | ISSUE #2",
    date: "Mar, 2026",
    author: "Dishit Bhattacharjee",
    readTime: "8 min read",
    excerpt:
      "For many years, labour compliance in India meant navigating a maze. Twenty-nine central labour laws operated independently. Definitions differed across statutes. Registers overlapped. Multiple authorities required filings on different timelines. Even disciplined and well-intentioned employers could find themselves liable for noncompliance.",
    tags: ["Labour Law", "Compliance", "Employer Obligations"],
  },
  {
    id: 1,
    title: "FEB | 2026 | ISSUE #1",
    date: "Feb, 2026",
    author: "Dishit Bhattacharjee",
    readTime: "8 min read",
    excerpt:
      "The Supreme Court has reiterated that an arbitral award cannot be set aside merely because another interpretation of the contract is possible. The Apex Court in Jan De Nul Dredging India Pvt. Ltd. v. Tuticorin Port Trust (2026 INSC 34) emphasised that once an arbitral tribunal adopts a plausible and reasoned interpretation of contractual clauses, courts exercising powers under Sections 34 and 37 of the Arbitration and Conciliation Act, 1996 cannot re-appreciate evidence or substitute their own views.",
    tags: ["Arbitration", "Judicial Interference", "Contract Interpretation"],
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
          {newsletters.map((newsletter, index) => {
            const isPdf = Boolean(newsletter.pdfUrl);
            // For PDF newsletters the card links out to the file in a new tab;
            // otherwise it navigates to the in-app article route.
            const linkProps = isPdf
              ? {
                  component: "a" as const,
                  href: newsletter.pdfUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {
                  component: Link,
                  to: `/newsletters/${newsletter.id}`,
                };
            return (
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        lineHeight: 1.3,
                        textDecoration: "none",
                        color: "primary.main",
                      }}
                      {...linkProps}
                    >
                      {newsletter.title}
                    </Typography>
                    {isPdf && (
                      <Chip
                        label="PDF"
                        size="small"
                        color="secondary"
                        sx={{
                          fontSize: "0.65rem",
                          height: "20px",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </Box>

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
                    endIcon={
                      isPdf ? (
                        <IconExternalLink size={18} />
                      ) : (
                        <IconArrowRight size={18} />
                      )
                    }
                    {...linkProps}
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
                    {isPdf ? "Open PDF" : "Read More"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Newsletters;
