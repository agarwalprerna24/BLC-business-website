import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import newsletters from "../newsletters";

export default function NewsLetterContent() {
  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    console.log(id);
    console.log(newsletters[id as unknown as keyof typeof newsletters]);
    if (id && newsletters[id as unknown as keyof typeof newsletters]) {
      setData(newsletters[id as unknown as keyof typeof newsletters]);
    } else {
      setErr("Newsletter not found");
    }
  }, [id]);

  const Component = data?.component;

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

      {Component && <Component />}
    </Box>
  );
}
