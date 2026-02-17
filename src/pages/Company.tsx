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
  Button,
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
          py: { xs: 10, md: 12 },
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

        <Grid container style={{ display: "inline-block" }}>
          <img
            src="/images/dishit.png"
            width="300"
            style={{ borderRadius: "25px", float: "left", marginRight: "2rem" }}
          />
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "justify",
            }}
          >
            Dishit Bhattacharjee is an advocate with over thirteen years of
            distinguished experience in litigation, dispute resolution, and
            corporate advisory practice. An alumnus of the University College of
            Law, Osmania University, Hyderabad, he advises a diverse clientele
            comprising corporations, financial institutions, start-ups, and
            individual clients on commercial, corporate, banking, arbitration,
            and civil matters, with a practice defined by strategic clarity and
            commercially sound legal resolutions. He frequently appears before
            the High Court of Telangana and has extensive experience
            representing clients before the National Company Law Tribunal
            (NCLT), Debt Recovery Tribunals (DRT), Commercial Courts, Civil
            Courts, and Family Courts. His litigation portfolio spans high-value
            commercial disputes, recovery proceedings, insolvency and
            restructuring matters, arbitration, and constitutional remedies, and
            his practice also spans across trial courts and specialised
            tribunals across jurisdictions. <br />
            Mr. Bhattacharjee also maintains a robust corporate and commercial
            advisory practice, negotiating, and reviewing complex legal
            documentation including investment and shareholder arrangements,
            joint ventures, employment contracts, loan and security
            documentation, debt restructuring agreements, and technology and
            commercial contracts, while also advising on regulatory compliances
            and transactions. His work further extends to domestic and
            international arbitration, non-litigation dispute resolution,
            employment and family disputes, and real estate due diligence,
            combining longstanding legal heritage with a modern,
            solution-oriented approach. He also advises banks, financial
            institutions, and asset reconstruction companies on and heads this
            Chamber. He is regarded for his strategic insight and advocacy.
          </Typography>
        </Grid>
      </Container>

      <Box
        sx={{
          bgcolor: `${theme.palette.secondary.light}`,
          py: { xs: 6, md: 8 },
        }}
        style={{ textAlign: "center" }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 8, md: 10 } }}>
          <Box sx={{ mb: 8 }}>
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent={"center"}
              mb={10}
            >
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <HoverCard>
                  <CardHeader
                    title="Prasoon Das"
                    subheader="Senior Associate"
                  />
                  <img
                    src="/images/prasoon_das.png"
                    height={300}
                    width={"auto"}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="https://www.linkedin.com/in/prasoon-das-prf/"
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
                        including contract management, strategic legal advisory,
                        and compliance-related matters.
                      </Typography>
                    </Box>
                  </CardContent>
                </HoverCard>
              </Grid>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <HoverCard>
                  <CardHeader
                    title="Vishwajit Khyatam"
                    subheader="Senior Associate"
                  />
                  <img
                    src="/images/vishwajit_khyatam.png"
                    height={300}
                    width={"auto"}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        {/* <MuiLink
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
                        </MuiLink> */}
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
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <HoverCard>
                  <CardHeader
                    title="Sanjana Proddatoori"
                    subheader="Associate"
                  />
                  <img src="/images/sanjana.png" height={275} width={"auto"} />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="https://www.linkedin.com/in/sanjana-proddatoori/"
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
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <HoverCard>
                  <CardHeader
                    title="P. Rajeshwari"
                    subheader="Associate (DRT)"
                  />
                  <img
                    src="/images/rajeshwari.png"
                    height={275}
                    width={"auto"}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <Button
                          href="#"
                          target="_blank"
                          disabled
                          style={{ color: "transparent" }}
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            mx: "0.25rem",
                            verticalAlign: "text-top",
                            background: "transparent",
                          }}
                        >
                          <IconBrandLinkedin
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </Button>
                      </Grid>

                      <Grid>
                        <Button
                          href="#"
                          target="_blank"
                          disabled
                          style={{ color: "transparent" }}
                          sx={{
                            opacity: 0.8,
                            "&:hover": { opacity: 1 },
                            transition: "opacity 0.3s",
                            // mx: "0.25rem",
                            verticalAlign: "text-top",
                            background: "transparent",
                          }}
                        >
                          <IconMail
                            size={24}
                            style={{ verticalAlign: "text-top" }}
                          />
                        </Button>
                      </Grid>
                    </Grid>
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
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <HoverCard>
                  <CardHeader
                    title="Ashutosh Singh"
                    subheader="Junior Associate"
                  />
                  <img src="/images/ashutosh.png" height={250} width={"auto"} />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="https://www.linkedin.com/in/ashutosh-singh-2b11491b0/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app"
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
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <HoverCard>
                  <CardHeader
                    title="Rudraksh Toshniwal"
                    subheader="Junior Associate"
                  />
                  <img
                    src="/images/rudhraksh.png"
                    height={250}
                    width={"auto"}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="https://www.linkedin.com/in/rudraksh-toshniwal-8b6367315/"
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
                        Rudraksh is a Junior Associate engaged in High Court
                        practice and criminal litigation. His work includes
                        assisting in criminal proceedings, bail matters, and
                        writ petitions, along with legal research and drafting
                        of pleadings and applications at various stages of
                        proceedings.
                      </Typography>
                    </Box>
                  </CardContent>
                </HoverCard>
              </Grid>
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <HoverCard>
                  <CardHeader
                    title="Samarthan Reddy"
                    subheader="Junior Associate"
                  />
                  <img
                    src="/images/samarthan.png"
                    height={250}
                    width={"auto"}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid>
                        <MuiLink
                          href="https://www.linkedin.com/in/samarthan-reddy027784373?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app )"
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
                          href="mailto:samarthanreddy@dbadvocate.com"
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
                        Samarthan Reddy is a Junior Associate with experience in
                        civil court litigation and commercial disputes. He
                        regularly assists in civil proceedings, interim
                        applications, and trial matters, and is involved in
                        legal research and drafting of petitions, applications,
                        and pleadings, supporting effective representation
                        across forums.
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
                  <img src="/images/sagar.png" height={240} width={"auto"} />
                  <CardContent>
                    <Grid container>
                      {/* <Grid>
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
                      </Grid> */}
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
                    subheader="Office Clerk (High Court & NCLT)"
                    slotProps={{
                      subheader: {
                        style: { whiteSpace: "nowrap" },
                      },
                    }}
                  />
                  <img
                    src="/images/amarender.png"
                    height={240}
                    width={"auto"}
                  />
                  <CardContent>
                    <Grid container>
                      {/* <Grid>
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
                      </Grid> */}
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
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <HoverCard>
                  <CardHeader
                    title="Siripaka Shankar"
                    subheader="Office Clerk (Civil Courts)"
                  />
                  <img src="/images/siripaka.png" height={240} width={"auto"} />
                  <CardContent>
                    <Grid container>
                      {/* <Grid>
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
                      </Grid> */}
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
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <HoverCard>
                  <CardHeader
                    title="Murthy Kotamarthi"
                    subheader="Office Clerk (DRT)"
                  />
                  <img src="/images/murthy.png" height={240} width={"auto"} />
                  <CardContent>
                    <Grid container>
                      {/* <Grid>
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
                      </Grid> */}
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

            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent={"center"}
              my={10}
            >
              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <HoverCard>
                  <CardHeader title="Raju" subheader="Support Staff" />
                  <img src="/images/raju.png" height={220} width={"auto"} />
                </HoverCard>
              </Grid>

              <Grid sx={{ justifyContent: "center", display: "flex" }}>
                <HoverCard>
                  <CardHeader title="Shiva" subheader="Support Staff" />
                  <img src="/images/shiva.png" height={220} width={"auto"} />
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
