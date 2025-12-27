import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconAward,
  IconShieldCheck,
  IconUsers,
  IconFileCheck,
  IconLock,
  IconHeart,
  IconScale,
} from "@tabler/icons-react";

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

const policies = [
  {
    icon: <IconShieldCheck size={32} />,
    title: "Client Confidentiality",
    description:
      "We maintain the strictest confidentiality standards. All client information is protected under attorney-client privilege and our robust data security measures ensure complete privacy.",
  },
  {
    icon: <IconScale size={32} />,
    title: "Professional Ethics",
    description:
      "Our practice is guided by the highest ethical standards set by the Bar Council. We are committed to integrity, honesty, and transparency in all our dealings.",
  },
  {
    icon: <IconUsers size={32} />,
    title: "Diversity & Inclusion",
    description:
      "We believe in creating an inclusive workplace that values diversity. Our firm is committed to equal opportunities and fostering a culture of respect and collaboration.",
  },
  {
    icon: <IconFileCheck size={32} />,
    title: "Quality Assurance",
    description:
      "Every matter is handled with meticulous attention to detail. We have established quality control processes to ensure the highest standards of legal service delivery.",
  },
  {
    icon: <IconLock size={32} />,
    title: "Data Protection",
    description:
      "We comply with all data protection regulations and employ advanced security measures to safeguard client information. Regular audits ensure continuous compliance.",
  },
  {
    icon: <IconHeart size={32} />,
    title: "Pro Bono Work",
    description:
      "We are committed to giving back to society. Our firm regularly undertakes pro bono cases and provides legal aid to underprivileged sections of society.",
  },
];

function Company() {
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
            Our Firm
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
            Meet our distinguished partners and learn about the values that
            guide our practice
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 2,
              color: "primary.main",
              textAlign: "center",
            }}
          >
            Our Partners
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Our partners bring decades of combined expertise and are recognized
            leaders in their respective fields
          </Typography>

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

        <Divider sx={{ my: 8 }} />

        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 2,
              color: "primary.main",
              textAlign: "center",
            }}
          >
            Our Policies & Values
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
            }}
          >
            The principles and policies that define our practice and guide our
            commitment to excellence
          </Typography>

          <Grid container spacing={3}>
            {policies.map((policy, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 4,
                      borderColor: "secondary.main",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <Box
                      sx={{
                        color: "primary.main",
                        mr: 2,
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    >
                      {policy.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {policy.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", lineHeight: 1.7 }}
                      >
                        {policy.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box sx={{ bgcolor: "grey.50", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: "primary.main",
              textAlign: "center",
            }}
          >
            Our Commitment
          </Typography>
          <Paper
            elevation={0}
            sx={{ p: 4, border: "2px solid", borderColor: "primary.main" }}
          >
            <Typography
              variant="body1"
              sx={{ mb: 2, lineHeight: 1.8, fontSize: "1.05rem" }}
            >
              At Bhattacharjee Law Chambers, we are committed to:
            </Typography>
            <List>
              {[
                "Providing exceptional legal services with integrity and professionalism",
                "Maintaining the highest ethical standards in all our practices",
                "Continuous learning and staying updated with legal developments",
                "Building long-term relationships based on trust and results",
                "Contributing positively to society through pro bono work",
                "Creating an inclusive and respectful workplace environment",
              ].map((commitment, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: "secondary.main",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={commitment}
                    primaryTypographyProps={{
                      fontSize: "1rem",
                      lineHeight: 1.7,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default Company;
