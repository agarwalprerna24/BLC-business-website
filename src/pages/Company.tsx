import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Link as MuiLink,
  CardContent,
  CardHeader,
  useTheme,
  styled,
} from "@mui/material";
import { IconMail, IconBrandLinkedin } from "@tabler/icons-react";

const HoverCard = styled(Card)(({ theme }) => ({
  width: "min-content",
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

  "&. MuiCardMedia-root": {
    width: "auto",
  },

  "& .img": {
    width: "auto",
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

function Company() {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url('/images/our_team_2.png')",
          bgcolor: "primary.main",
          color: "white",
          py: { xs: 16, md: 18 },
          textAlign: "center",
          backgroundPosition: "top left",
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

      <Container maxWidth={false} sx={{ p: { xs: 8, md: 10 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 1,
                color: "primary.main",
              }}
            >
              Dishit Bhattacharjee
            </Typography>
            <Typography
              variant="h5"
              sx={{
                // fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 500,
                mb: 3,
                color: "primary.main",
              }}
            >
              Founder
              <MuiLink
                href="https://www.linkedin.com/company/battacharjee-law-chambers/about/?viewAsMember=true"
                target="_blank"
                sx={{
                  opacity: 0.8,
                  "&:hover": { opacity: 1 },
                  transition: "opacity 0.3s",
                  mx: "0.25rem",
                  verticalAlign: "text-top",
                }}
              >
                <IconBrandLinkedin
                  size={24}
                  style={{ verticalAlign: "text-top" }}
                />
              </MuiLink>
              <MuiLink
                href="mailto:dishitbhattacharjee@gmail.com"
                target="_blank"
                sx={{
                  opacity: 0.8,
                  "&:hover": { opacity: 1 },
                  transition: "opacity 0.3s",
                  // mx: "0.25rem",
                  verticalAlign: "text-top",
                }}
              >
                <IconMail size={24} style={{ verticalAlign: "text-top" }} />
              </MuiLink>
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Dishit Bhattacharjee is an advocate with over thirteen years of
              distinguished post- qualification experience in litigation,
              dispute resolution, and corporate advisory practice. An alumnus of
              the University College of Law, Osmania University, Hyderabad, he
              provides expert counsel to a diverse clientele on intricate
              commercial, corporate, banking, arbitration, and civil matters.
              His practice is characterized by strategic clarity, rigorous
              drafting, and commercially sound legal solutions.
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Mr. Bhattacharjee frequently appears before the High Court of
              Telangana and possesses extensive experience representing clients
              before the National Company Law Tribunal (NCLT), Debt Recovery
              Tribunals (DRT), Commercial Courts, Civil Courts, and Family
              Courts. His litigation practice encompasses high-value commercial
              disputes, insolvency and restructuring proceedings, banking and
              recovery actions, arbitration-related litigation, and
              constitutional remedies. His extensive and varied exposure across
              trial courts, subordinate courts, and specialized tribunals has
              endowed him with a comprehensive understanding of litigation at
              every adjudicatory level.
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              In addition to his court practice, Mr. Bhattacharjee maintains a
              robust corporate and commercial advisory practice. He routinely
              drafts, negotiates, and reviews complex legal documentation,
              including investment and shareholder arrangements, joint ventures,
              employment contracts, loan and security documentation, debt
              restructuring agreements, real estate conveyancing instruments,
              and technology and commercial contracts. He also provides counsel
              on regulatory compliances, statutory registrations, and
              transaction structuring across various sectors. Advocate
              Bhattacharjee has significant experience in domestic and
              international arbitration, including involvement in high-value,
              multi-jurisdictional disputes administered by leading
              international arbitral institutions. He has assisted prominent law
              firms in complex, multi- million-dollar proceedings and has
              advised companies in connection with Initial Public Offerings
              (IPOs) and related regulatory compliances.
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              A substantial component of his practice involves acting for banks,
              financial institutions, and asset reconstruction companies as
              lender-side legal counsel. He advises on due diligence, security
              creation, enforcement documentation, and insolvency proceedings.
              He also leads dedicated real estate practice, providing title due
              diligence, legal scrutiny reports, and transactional advisory for
              acquisitions, financings, and development projects. Mr.
              Bhattacharjee additionally handles sensitive and complex family
              law matters, including divorce, custody, maintenance, and allied
              proceedings, combining legal precision with discretion. He leads a
              structured legal team comprising associates, junior advocates, and
              court clerks, organized through court-specific teams to ensure
              efficiency and seamless execution. Recognized for his meticulous
              approach, strategic insight, and strong courtroom presence, Dishit
              Bhattacharjee is trusted by both institutional and individual
              clients for matters requiring legal depth, commercial acumen, and
              decisive representation.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} p={2}>
            <img
              src="/images/dishit.png"
              width="95%"
              style={{ borderRadius: "25px" }}
            />
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          bgcolor: `${theme.palette.secondary.light}`,
          py: { xs: 8, md: 10 },
        }}
        style={{ textAlign: "center" }}
      >
        <Container maxWidth={false} sx={{ p: { xs: 8, md: 10 } }}>
          <Box sx={{ mb: 8 }}>
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent={"center"}
              my={10}
            >
              <Grid
                // size={{ xs: 12, md: 6 }}
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <HoverCard>
                  <CardHeader
                    title="Prasoon Das"
                    subheader="Senior Associate"
                  />
                  <img
                    src="/images/prasoon_das.png"
                    height={400}
                    width={"auto"}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="#"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconBrandLinkedin
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                      <Grid>
                        <MuiLink
                          href="mailto:prasoon@dbadvocate.com"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            // mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconMail
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                    </Grid>
                    <Box className="extraContent">
                      <Typography variant="subtitle2" textAlign={"left"} p={1}>
                        Prasoon Das is a Senior Associate with primary
                        responsibility for dispute resolution and litigation
                        before civil courts, High Courts, and tribunals. He also
                        oversees corporate and commercial advisory work,
                        including document and contract management.
                      </Typography>
                    </Box>
                  </CardContent>
                </HoverCard>
              </Grid>
              <Grid
                // size={{ xs: 12, md: 6 }}
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <HoverCard>
                  <CardHeader
                    title="Vishwajit Khyatam"
                    subheader="Senior Associate"
                  />
                  <img
                    src="/images/vishwajit_khyatam.png"
                    height={400}
                    width={"auto"}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="#"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconBrandLinkedin
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                      <Grid>
                        <MuiLink
                          href="mailto:vishwajitkyatham@gmail.com"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            // mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconMail
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                    </Grid>
                    <Box className="extraContent">
                      <Typography variant="subtitle2" textAlign={"left"} p={1}>
                        Vishwajit Khyatam is a Senior Associate with primary
                        responsibility for criminal litigation and trial work.
                        He regularly appears before Magistrate Courts, Sessions
                        Courts, and the High Court, handling matters relating to
                        economic offences, white-collar crimes, bail
                        proceedings, and criminal trials.
                      </Typography>
                    </Box>
                  </CardContent>
                </HoverCard>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent={"center"}
            >
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <HoverCard>
                  <CardHeader
                    title="Sanjana Proddatoori"
                    subheader="Associate"
                  />
                  <img src="/images/sanjana.png" height={350} width={"auto"} />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="#"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconBrandLinkedin
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                      <Grid>
                        <MuiLink
                          href="mailto:sanjana@dbadvocate.com"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            // mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconMail
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                    </Grid>
                    <Box className="extraContent">
                      <Typography variant="subtitle2" textAlign={"left"} p={1}>
                        Sanjana is an Associate with experience in corporate
                        litigation and family law. She primarily handles matters
                        under the IBC before NCLT and also advises on family law
                        disputes, including arbitration matters. She regularly
                        appears before civil courts and is involved in legal
                        advisory and drafting of business agreements.
                      </Typography>
                    </Box>
                  </CardContent>
                </HoverCard>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent={"center"}
              my={10}
            >
              <Grid
                // size={{ xs: 12, md: 6 }}
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <HoverCard>
                  <CardHeader
                    title="Ashutosh Singh"
                    subheader="Junior Associate"
                  />
                  <img src="/images/ashutosh.png" height={300} width={"auto"} />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="#"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconBrandLinkedin
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                      <Grid>
                        <MuiLink
                          href="mailto:ashutosh@dbadvocate.com"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            // mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconMail
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                    </Grid>
                    <Box className="extraContent">
                      <Typography variant="subtitle2" textAlign={"left"} p={1}>
                        Ashutosh Singh is a Junior Associate with focused
                        experience in matters before the Debt Recovery Tribunal
                        (DRT) and the High Court. He is involved in legal
                        research and drafting of petitions, affidavits, replies,
                        and written submissions, providing structured and
                        effective support in litigation matters.
                      </Typography>
                    </Box>
                  </CardContent>
                </HoverCard>
              </Grid>
              <Grid
                // size={{ xs: 12, md: 6 }}
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <HoverCard>
                  <CardHeader
                    title="Rudraksh Toshniwal"
                    subheader="Junior Associate"
                  />
                  <img src="/images/rudraksh.png" height={300} width={"auto"} />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="#"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconBrandLinkedin
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                      <Grid>
                        <MuiLink
                          href="mailto:rudraksh@dbadvocate.com"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            // mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconMail
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                    </Grid>
                    <Box className="extraContent">
                      <Typography variant="subtitle2" textAlign={"left"} p={1}>
                        Rudraksh is an Associate engaged in High Court practice
                        and criminal litigation. His work includes assisting in
                        criminal proceedings, bail matters, and writ petitions,
                        along with legal research and drafting of pleadings and
                        applications at various stages of proceedings.
                      </Typography>
                    </Box>
                  </CardContent>
                </HoverCard>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent={"center"}
              my={10}
            >
              <Grid
                // size={{ xs: 12, md: 6 }}
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <HoverCard>
                  <CardHeader
                    title="Somnath Sutradhar"
                    subheader="Office Manager"
                  />
                  <img src="/images/sagar.png" height={300} width={"auto"} />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="#"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconBrandLinkedin
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                      <Grid>
                        <MuiLink
                          href="mailto:sagar17@y7mail.com"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            // mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconMail
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                    </Grid>
                  </CardContent>
                </HoverCard>
              </Grid>
              <Grid
                // size={{ xs: 12, md: 6 }}
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <HoverCard>
                  <CardHeader
                    title="K. Amarender Reddy"
                    subheader="Office Clerk (High Court and NCLT)"
                  />
                  <img
                    src="/images/amarender.png"
                    height={300}
                    width={"auto"}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="#"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconBrandLinkedin
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                      <Grid>
                        <MuiLink
                          href="mailto:komtireddyamar78@gmail.com"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            // mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconMail
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                    </Grid>
                  </CardContent>
                </HoverCard>
              </Grid>
              <Grid
                // size={{ xs: 12, md: 6 }}
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <HoverCard>
                  <CardHeader
                    title="Siripaka Shankar"
                    subheader="Office Clerk (Civil Courts)"
                  />
                  <img src="/images/siripaka.png" height={300} width={"auto"} />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="#"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconBrandLinkedin
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                      <Grid>
                        <MuiLink
                          href="mailto:siripakashankar@gmail.com"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            // mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconMail
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                    </Grid>
                  </CardContent>
                </HoverCard>
              </Grid>
              <Grid
                // size={{ xs: 12, md: 6 }}
                sx={{ justifyContent: "center", display: "flex" }}
              >
                <HoverCard>
                  <CardHeader
                    title="Murthy Kotamarthi"
                    subheader="Office Clerk (DRT)"
                  />
                  <img src="/images/murthy.png" height={300} width={"auto"} />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="#"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconBrandLinkedin
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                      <Grid>
                        <MuiLink
                          href="mailto:siripakashankar@gmail.com"
                          target="_blank"
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            // mx: "0.25rem",
                            verticalAlign: "text-top",
                          }}
                        >
                          <IconMail
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </MuiLink>
                      </Grid>
                    </Grid>
                  </CardContent>
                </HoverCard>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Company;
