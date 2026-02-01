import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  useTheme,
  Link as MuiLink,
} from "@mui/material";
import Slider from "react-slick";
import Hero from "../components/Hero";
import About from "../components/AboutUs";
import Practices from "../components/Practices";
import Policies from "../components/Policies";

const newsReports = [
  {
    name: "An Analysis on SARFAESI Act of 2002",
    platform: "Oct 31, 2022",
    image:
      "https://www.lawyered.in/uploads/blog/d6c267f570d945049f64db087ac017da.jpg",
    link: "https://www.lawyered.in/legal-disrupt/articles/analysis-sarfaesi-act-2002/",
  },
  {
    name: "SC backs mothers right to gift self acquired property to son",
    platform: "Aug 03, 2025",
    image:
      "https://static.toiimg.com/thumb/msid-123067237,imgsize-29260,width-400,height-225,resizemode-72/123067237.jpg",
    link: "https://timesofindia.indiatimes.com/city/hyderabad/sc-backs-mothers-right-to-gift-self-acquired-property-to-son/articleshow/123067238.cms",
  },
  {
    name: "Appellant Has Right To Withdraw Appeal Without Any Strings Attached, High Court Must Grant Leave When Requested: Telangana High Court",
    platform: "July 17, 2024",
    image:
      "https://www.livelaw.in/h-upload/2024/06/28/750x450_546606-justice-moushumi-bhattacharya-justice-mg-priyadarsini-telangana-hc.webp",
    link: "https://www.livelaw.in/high-court/telangana-high-court/the-appellant-has-right-to-withdraw-appeal-without-strings-attached-high-court-must-grant-leave-when-requested-263660",
  },
  {
    name: "Mutually Destructive Pleas No Ground To Reject Plaint Under Order 7 Rule 11 CPC: Telangana High Court",
    platform: "Nov 23, 2023",
    image:
      "https://www.livelaw.in/h-upload/2023/11/01/750x450_501194-justice-t-vinod-kumar-telangana-high-court.webp",
    link: "https://www.livelaw.in/high-court/telangana-high-court/telangana-high-court-ruling-plaint-rejection-inconsistent-pleas-order-7-rule-11-cpc-242823?infinitescroll=1",
  },
  {
    name: "Explainer: A primer on breach of contract, lawsuits",
    platform: "Dec 30, 2023",
    image:
      "https://img.etimg.com/thumb/msid-106388426,width-300,height-225,imgsize-8364,resizemode-75/explainer-a-primer-on-breach-of-contract-lawsuits.jpg",
    link: "https://economictimes.indiatimes.com/jobs/c-suite/explainer-a-primer-on-breach-of-contract-lawsuits/articleshow/106388355.cms",
  },
  {
    name: "Union Bank of India Vs. Canara Bank and Anr. – NCLT Hyderabad Bench",
    platform: "Aug 11, 2025",
    image:
      "https://img.freepik.com/free-photo/gavel-scales-justice-law-books_23-2151998158.jpg?semt=ais_user_personalization&w=740&q=80",
    link: "https://ibclaw.in/union-bank-of-india-vs-canara-bank-and-anr-nclt-hyderabad-bench/",
  },
  {
    name: "Namas Madhucon goes bankrupt, NCLT initiates insolvency process",
    platform: "Dec 10, 2023",
    image:
      "https://static.toiimg.com/thumb/msid-105871489,imgsize-643868,width-400,height-225,resizemode-72/105871489.jpg",
    link: "https://timesofindia.indiatimes.com/city/hyderabad/namas-madhucon-goes-bankrupt-nclt-initiates-insolvency-process/articleshow/105871489.cms",
  },
  {
    name: "DHCL debt crisis: NCLT kick starts insolvency process",
    platform: "Jul 20, 2017",
    image:
      "https://static.toiimg.com/thumb/msid-59674965,imgsize-52229,width-400,height-225,resizemode-72/59674965.jpg",
    link: "https://timesofindia.indiatimes.com/city/hyderabad/dchl-debt-crisis-nclt-kick-starts-insolvency-process/articleshow/59674957.cms",
  },
  {
    name: "₹1.4k crore loan default pushes firm into insolvency",
    platform: "May 8, 2025",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQHJlZO4kue2cg/feedshare-shrink_800/B56ZbI5OJ0H0Ao-/0/1747127166340?e=1770854400&v=beta&t=qeo52Zf9KBl6V2Bg3sP_gVkbqPXthBAy9aN_I03DvsY",
    link: "https://www.linkedin.com/posts/dishit-bhattacharjee-b5187780_it-was-a-pleasure-assisting-the-honorable-activity-7327982469062758400-Ax8o/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAABE2zK0Bc3ePGHNPQF2WjRGUFd7SOWmT3rQ",
  },
];

function Home() {
  const theme = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: theme.palette.primary.main,
          right: "10px",
        }}
        onClick={onClick}
      />
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <Box
        className={className}
        style={{
          ...style,
          display: "block",
          color: theme.palette.primary.main,
          left: "10px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <Hero />

      <About />

      <Practices />

      <Policies />

      <Box
        sx={{
          bgcolor: `${theme.palette.secondary.light}`,
          py: { xs: 8, md: 10 },
        }}
        style={{ textAlign: "center" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 700,
            mb: 8,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          News & Reports
        </Typography>
        <Box className="slider-container">
          <Slider {...settings}>
            {newsReports.map((item) => (
              <Card
                sx={{
                  maxWidth: 250,
                  height: 300,
                  position: "relative",
                }}
              >
                <CardHeader
                  slotProps={{
                    title: {
                      sx: {
                        color: "primary.main",
                        fontSize: "1rem",
                      },
                    },
                    subheader: {
                      sx: { fontSize: "0.8rem" },
                    },
                  }}
                  title={
                    <MuiLink underline="hover" href={item.link}>
                      {item.name}
                    </MuiLink>
                  }
                  subheader={item.platform}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt="Alt"
                  // style={{ position: "absolute", bottom: 0 }}
                />
              </Card>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
