import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("success");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClose = (e: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form = new FormData(e.target as any);
    form.append("access_key", "d52caeab-3a33-46ab-a8be-fdf6483222e0");
    form.append("from_name", "Bhattacharjee Law Chambers - InMail");
    form.append("subject", "You have a notification from your website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setOpen(true);
        setResult("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setOpen(true);
        setResult("error");
      }
    } catch (err) {
      setOpen(true);
      setResult("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url('/images/contact_us.png')",
          bgcolor: "primary.main",
          color: "white",
          py: { xs: 8, md: 10 },
          textAlign: "center",
          backgroundPosition: "bottom",
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
            Contact Us
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
            Have a legal question? Reach out to us and we'll get back to you
            promptly.
          </Typography>
        </Container>
      </Box>
      <Box id="contact" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
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
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            color="#555555"
            textAlign={"center"}
            mb={2}
            width={"80%"}
            mx={"auto"}
          >
            We welcome enquiries from clients, businesses, and law graduates.
            Applications for internships are also invited, interested parties
            can engage further by sending a mail to info@dbadvocate.com.
          </Typography>

          <Snackbar
            id="fucking snackbar"
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            onClose={handleClose}
            key={"top-center"}
            autoHideDuration={5000}
          >
            <Alert
              severity={result as "error" | "success"}
              sx={{
                width: "100%",
                border: `1px solid ${result === "error" ? "red" : "green"}`,
              }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClose={handleClose as any}
            >
              <Typography fontSize={"lg"}>
                {result === "error"
                  ? "Failed to submit form"
                  : "Form submitted successfully"}
              </Typography>
            </Alert>
          </Snackbar>
          <Paper elevation={2} sx={{ p: { xs: 3, md: 5 } }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={5}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      bgcolor: "primary.main",
                      py: 1.5,
                      fontWeight: 600,
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default ContactUs;
