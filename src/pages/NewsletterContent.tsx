import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function NewsLetterContent() {
  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setData(null);
    setErr(null);

    // Important: keep the path "pattern" stable; bundlers need to see it.
    import(`../newsletters/${id}.ts`)
      .then((mod) => {
        if (!cancelled) setData(mod.default);
      })
      .catch((e) => {
        if (!cancelled) setErr(e instanceof Error ? e.message : String(e));
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (!data || err) return null;

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url('/images/our_newsletters.png')",
          bgcolor: "primary.main",
          color: "white",
          py: { xs: 8, md: 10 },
          textAlign: "center",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Newsletter
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: 800,
              mx: "auto",
              opacity: 0.95,
              fontWeight: 400,
            }}
          >
            {data.title}
          </Typography>
        </Container>
      </Box>

      {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {data.content.map((item: any) => (
        <Container
          maxWidth={false}
          sx={{ px: { xs: 8, md: 10 }, my: { xs: 6, md: 8 } }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 700,
              mb: 1,
              color: "primary.main",
            }}
          >
            {item.header}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 1,
              fontSize: "1.1rem",
              lineHeight: 1.8,
              textAlign: "justify",
            }}
          >
            {item.data.map((paragraph: string) => (
              <p>{paragraph}</p>
            ))}
          </Typography>
        </Container>
      ))}
    </Box>
  );
}
