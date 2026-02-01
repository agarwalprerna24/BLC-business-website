import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Mentor from "./pages/Mentor";
import Company from "./pages/Company";
import Newsletters from "./pages/Newsletters";
import ScrollToTop from "./components/ScrollToTop";
import NewsLetterContent from "./pages/NewsletterContent";

const theme = createTheme({
  palette: {
    primary: {
      main: "#002366",
      light: "#4C6593",
      dark: "#001C51",
    },
    secondary: {
      main: "#CCCCCC",
      light: "#FFFFFF",
      dark: "#B5B5B5",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/expertise" element={<Expertise />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentor" element={<Mentor />} />
              <Route path="/company" element={<Company />} />
              <Route path="/newsletters" element={<Newsletters />} />
              <Route path="/newsletters/:id" element={<NewsLetterContent />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
