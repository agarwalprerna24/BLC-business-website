import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";
import Hero from "../components/Hero";
import About from "../components/AboutUs";
import Practices from "../components/Practices";
import Policies from "../components/Policies";

const newsReports = [
  {
    name: "ABC",
    platform: "Lorem Ipsum",
    image:
      "https://thumbs.dreamstime.com/b/business-accounting-team-meeting-room-office-using-pen-pointing-paperwork-finance-concept-business-accounting-team-meeting-154771088.jpg",
    link: "https://www.dreamstime.com/photos-images/business.html",
  },
  {
    name: "ABC",
    platform: "Lorem Ipsum",
    image:
      "https://burst.shopifycdn.com/photos/business-women-working.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    link: "https://www.shopify.com/stock-photos/business",
  },
  {
    name: "ABC",
    platform: "Lorem Ipsum",
    image:
      "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D",
    link: "https://unsplash.com/s/photos/business",
  },
  {
    name: "ABC",
    platform: "Lorem Ipsum",
    image:
      "https://cdn.pixabay.com/photo/2015/03/19/08/26/analysis-680572_640.jpg",
    link: "https://pixabay.com/images/search/business/",
  },
];

function Home() {
  const theme = useTheme();

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    pauseOnHover: true,
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
        <Box className="slide-container">
          <Slider {...settings}>
            {newsReports.map((item) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader title={item.name} subheader={item.platform} />
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt="Paella dish"
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
