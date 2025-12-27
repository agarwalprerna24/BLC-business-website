import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import {
  IconBuilding,
  IconBulb,
  IconGavel,
  IconHome,
  IconShieldCheck,
  IconFileDescription,
  IconCurrencyDollar,
  IconUserCheck,
  IconBriefcase,
  IconWorld,
  IconTax,
  IconScale,
} from "@tabler/icons-react";

const expertiseAreas = [
  {
    icon: <IconBuilding size={48} />,
    title: "Corporate Law",
    description:
      "Comprehensive corporate legal services including mergers and acquisitions, corporate governance, compliance, and restructuring.",
    services: [
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Joint Ventures",
      "Corporate Compliance",
    ],
  },
  {
    icon: <IconBulb size={48} />,
    title: "Intellectual Property",
    description:
      "Protection and enforcement of intellectual property rights including patents, trademarks, copyrights, and trade secrets.",
    services: [
      "Patent Filing",
      "Trademark Registration",
      "Copyright Protection",
      "IP Litigation",
    ],
  },
  {
    icon: <IconGavel size={48} />,
    title: "Civil Litigation",
    description:
      "Expert representation in civil disputes across various courts, including commercial litigation, contract disputes, and property matters.",
    services: [
      "Commercial Disputes",
      "Contract Enforcement",
      "Property Disputes",
      "Injunction Matters",
    ],
  },
  {
    icon: <IconHome size={48} />,
    title: "Real Estate",
    description:
      "Complete legal support for property transactions, title verification, development projects, and real estate disputes.",
    services: [
      "Property Transactions",
      "Title Verification",
      "Development Projects",
      "Lease Agreements",
    ],
  },
  {
    icon: <IconShieldCheck size={48} />,
    title: "Criminal Defense",
    description:
      "Vigorous defense representation in criminal matters with a focus on protecting client rights and achieving favorable outcomes.",
    services: [
      "White Collar Crimes",
      "Fraud Defense",
      "Bail Applications",
      "Trial Representation",
    ],
  },
  {
    icon: <IconFileDescription size={48} />,
    title: "Banking & Finance",
    description:
      "Legal advisory for banking transactions, finance documentation, debt restructuring, and regulatory compliance.",
    services: [
      "Loan Documentation",
      "Debt Recovery",
      "Project Finance",
      "Banking Regulations",
    ],
  },
  {
    icon: <IconCurrencyDollar size={48} />,
    title: "Tax Law",
    description:
      "Tax planning, advisory, and dispute resolution services covering direct and indirect taxation matters.",
    services: [
      "Tax Planning",
      "GST Advisory",
      "Tax Litigation",
      "Transfer Pricing",
    ],
  },
  {
    icon: <IconUserCheck size={48} />,
    title: "Employment Law",
    description:
      "Guidance on employment contracts, workplace policies, labor disputes, and compliance with employment regulations.",
    services: [
      "Employment Contracts",
      "Labor Disputes",
      "Workplace Policies",
      "Employee Benefits",
    ],
  },
  {
    icon: <IconBriefcase size={48} />,
    title: "Alternative Dispute Resolution",
    description:
      "Mediation and arbitration services to resolve disputes efficiently outside traditional court proceedings.",
    services: [
      "Arbitration",
      "Mediation",
      "Conciliation",
      "Settlement Negotiations",
    ],
  },
  {
    icon: <IconWorld size={48} />,
    title: "International Trade",
    description:
      "Legal support for cross-border transactions, trade agreements, customs, and international commercial disputes.",
    services: [
      "Trade Agreements",
      "Export-Import Laws",
      "Customs Matters",
      "International Arbitration",
    ],
  },
  {
    icon: <IconTax size={48} />,
    title: "Regulatory Compliance",
    description:
      "Assistance with regulatory compliance across various sectors including SEBI, RBI, and industry-specific regulations.",
    services: [
      "SEBI Compliance",
      "RBI Regulations",
      "Sector Regulations",
      "Compliance Audits",
    ],
  },
  {
    icon: <IconScale size={48} />,
    title: "Constitutional Law",
    description:
      "Representation in matters involving constitutional rights, public interest litigation, and fundamental rights protection.",
    services: [
      "Public Interest Litigation",
      "Fundamental Rights",
      "Writ Petitions",
      "Constitutional Matters",
    ],
  },
];

function Expertise() {
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
            Our Expertise
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
            Comprehensive legal services across diverse practice areas,
            delivered with excellence and dedication
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={4}>
          {expertiseAreas.map((area, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                    borderColor: "primary.main",
                    "& .icon-box": {
                      bgcolor: "primary.main",
                      color: "white",
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    className="icon-box"
                    sx={{
                      display: "inline-flex",
                      p: 1.5,
                      bgcolor: "primary.light",
                      color: "primary.main",
                      borderRadius: 2,
                      mb: 2,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {area.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    {area.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 3, color: "text.secondary", lineHeight: 1.7 }}
                  >
                    {area.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {area.services.map((service, idx) => (
                      <Chip
                        key={idx}
                        label={service}
                        size="small"
                        sx={{
                          bgcolor: "grey.100",
                          fontSize: "0.75rem",
                          "&:hover": {
                            bgcolor: "secondary.light",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: "grey.50", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: "primary.main",
              }}
            >
              Need Legal Assistance?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: "1.1rem" }}>
              Our team of experienced advocates is ready to provide you with
              expert legal counsel tailored to your specific needs. Contact us
              today for a consultation.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Email: info@blc.in
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                |
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Phone: +91 33 1234 5678
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Expertise;
