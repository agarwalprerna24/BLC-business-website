import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
} from "@mui/material";
import { IconUser, IconMail, IconPhone, IconAward } from "@tabler/icons-react";

const partners = [
  {
    name: "Adv. Rajesh Bhattacharjee",
    position: "Senior Partner",
    specialization: "Corporate Law & M&A",
    experience: "25+ years",
    education: "LL.M, Harvard Law School",
    email: "rajesh@blc.in",
    phone: "+91 98765 43210",
    description:
      "Rajesh brings over two decades of experience in corporate law, having advised numerous Fortune 500 companies on complex mergers and acquisitions. His expertise in cross-border transactions and corporate restructuring makes him a trusted advisor to businesses.",
  },
  {
    name: "Adv. Priya Bhattacharjee",
    position: "Managing Partner",
    specialization: "Litigation & Constitutional Law",
    experience: "20+ years",
    education: "LL.M, Oxford University",
    email: "priya@blc.in",
    phone: "+91 98765 43211",
    description:
      "Priya is a renowned litigator with an impressive track record in constitutional law and public interest litigation. She has argued several landmark cases before the Supreme Court and High Courts, championing justice and fundamental rights.",
  },
  {
    name: "Adv. Amit Kumar",
    position: "Partner",
    specialization: "Intellectual Property & Technology Law",
    experience: "15+ years",
    education: "LL.M, Stanford Law School",
    email: "amit@blc.in",
    phone: "+91 98765 43212",
    description:
      "Amit specializes in intellectual property law and technology-related legal matters. His expertise in patent law, trademark protection, and technology licensing has helped numerous startups and tech companies protect their innovations.",
  },
  {
    name: "Adv. Meera Sharma",
    position: "Partner",
    specialization: "Banking & Finance Law",
    experience: "18+ years",
    education: "LL.M, London School of Economics",
    email: "meera@blc.in",
    phone: "+91 98765 43213",
    description:
      "Meera has extensive experience in banking and finance law, advising major financial institutions on regulatory compliance, structured finance, and debt recovery. Her deep understanding of financial markets makes her an invaluable asset.",
  },
];

function Company() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url('/images/our_team.png')",
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
            Our Team
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
            Meet our distinguished team and learn about the values that guide
            our practice
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            {partners.map((partner, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: 6,
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}
                    >
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          bgcolor: "primary.main",
                          fontSize: "2rem",
                          fontWeight: 700,
                          mr: 3,
                        }}
                      >
                        {partner.name.split(" ")[1].charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 600, mb: 0.5 }}
                        >
                          {partner.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: "secondary.main",
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          {partner.position}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {partner.education}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ mb: 2 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <IconAward
                          size={20}
                          style={{ marginRight: 8 }}
                          color="#1a237e"
                        />
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Specialization:
                        </Typography>
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          {partner.specialization}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <IconUser
                          size={20}
                          style={{ marginRight: 8 }}
                          color="#1a237e"
                        />
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Experience:
                        </Typography>
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          {partner.experience}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7 }}>
                      {partner.description}
                    </Typography>

                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconMail size={18} style={{ marginRight: 8 }} />
                        <Typography variant="body2">{partner.email}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconPhone size={18} style={{ marginRight: 8 }} />
                        <Typography variant="body2">{partner.phone}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Company;
