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
  IconCashBanknote,
  IconCurrencyDollar,
  IconUserSquare,
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
              description:
                "Representation of clients in civil and commercial disputes across all levels of courts and tribunals, from trial stages to appeal. Our work focuses on precise drafting, strategic case management, and achieving enforceable outcomes.",
            },
            {
              name: "Insolvency & Bankruptcy",
              icon: <IconCoin size={24} />,
              description:
                "Advisory and representation of creditors, corporate debtors, and stakeholders in proceedings under the Insolvency and Bankruptcy Code before the NCLT and appellate authorities. Our services include resolution processes, liquidation matters, and enforcement actions.",
            },
            {
              name: "Arbitration and Dispute Resolution",
              icon: <IconMessageCircleUser size={24} />,
              description:
                "We handle domestic and international arbitration matters, including enforcement and challenge of arbitral awards. Our team provides advisory support on arbitration agreements, institutional rules, and dispute strategy.",
            },

            {
              name: "General Corporate Advisory",
              icon: <IconUsers size={24} />,
              description:
                "End-to-end corporate advisory, including governance, compliance, and contractual documentation. Our work is tailored to support business objectives and risk management in varied commercial settings.",
            },
            {
              name: "Real Estate",
              icon: <IconHome size={24} />,
              description:
                "Advisory on real estate transactions including title due diligence, conveyancing, financing, and development documentation. We also manage property-related disputes and regulatory compliance matters.",
            },
            {
              name: "Employment & Labour Law",
              icon: <IconProng size={24} />,
              description:
                "Drafting, review, and advise on employment and consultancy contracts and workplace policies. Our practice includes counselling on statutory compliance and representation in labour disputes and related proceedings.",
            },
            {
              name: "Family Disputes",
              icon: <IconUsers size={24} />,
              description:
                "We handle matrimonial, guardianship, custody, and domestic relations matters with a balanced and sensitive approach. Our focus is on legally sound and pragmatic resolution of family law issues.",
            },
            {
              name: "Mergers & Acquisitions",
              icon: <IconGitMerge size={24} />,
              description:
                "We assist in the structuring, documentation, and regulatory coordination of mergers, acquisitions, and joint ventures. Our services include due diligence and negotiation support to facilitate seamless transactions.",
            },
            {
              name: "Service Jurisprudence",
              icon: <IconUserSquare size={24} />,
              description:
                "We advise and represent clients in service-related disputes covering appointments, promotions, disciplinary actions, and benefits. Our work spans service tribunals and High Court forums.",
            },
            {
              name: "Banking Law",
              icon: <IconCashBanknote size={24} />,
              description:
                "Advisory and Litigation for banks, financial institutions, and lending entities in recovery, enforcement, and regulatory matters. Our practice includes proceedings before DRTs, NCLT, and appellate tribunals, as well as advisory on lending and securitydocumentation.",
            },
            {
              name: "IPO & Capital Markets",
              icon: <IconCurrencyDollar size={24} />,
              description:
                "Legal and regulatory guidance on capital market transactions, including initial public offerings and related compliances. Our support extends to documentation review and coordination with regulatory authorities.",
            },
          ].map((client, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <HoverCard elevation={0}>
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
                      {client.description}
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
