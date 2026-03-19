"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";

export default function Portfolio() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Django",
    "MUI",
    "Tailwind",
    "AWS",
  ];

  const projects = [
    {
      title: "CBAM Certification Platform",
      role: "Full Stack Developer",
      points: [
        "Developed emission tracking platform for EU compliance using Next.js & Django",
        "Built reusable components and dynamic forms using Redux Toolkit",
        "Created backend APIs for emission calculation and data workflows",
        "Implemented JWT authentication and role-based access",
        "Added Excel upload & multi-language support (7 languages)",
      ],
    },
    {
      title: "Subscription Management App",
      role: "Frontend Developer",
      points: [
        "Built responsive UI using React.js and Material UI",
        "Implemented JWT authentication and protected routes",
        "Integrated APIs for subscriptions and payment workflows",
        "Developed dynamic UI (accordions, scroll, plan selection)",
      ],
    },
    {
      title: "Digital Estates Platform",
      role: "Frontend Developer",
      points: [
        "Created reusable components for asset management",
        "Integrated APIs for real-time data updates",
        "Improved UI performance and responsiveness",
      ],
    },
  ];

  return (
    <Box sx={{ background: "#0f172a", color: "#fff", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <AppBar position="sticky" sx={{ background: "#020617" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontWeight="bold">Srinivas</Typography>
          <Box>
            <Button color="inherit" onClick={() => scrollTo("projects")}>Projects</Button>
            <Button color="inherit" onClick={() => scrollTo("contact")}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        {/* HERO */}
        <Box textAlign="center" mt={10}>
          <Typography variant="h3" fontWeight="bold">
            Hi, I'm Srinivas 👋
          </Typography>
          <Typography mt={2} color="gray">
            Frontend Developer (3+ yrs) | Full Stack Developer (1+ yr)
          </Typography>
          <Typography mt={2} color="gray">
            Building scalable, high-performance web applications using React, Next.js & Django.
          </Typography>

          <Box mt={4}>
            <Button variant="contained" sx={{ mr: 2 }} onClick={() => scrollTo("projects")}>View Projects</Button>
            <Button variant="outlined" href="/Srinivas-Siluveru-Tweak.pdf" download>Download Resume</Button>
          </Box>
        </Box>

        {/* ABOUT */}
        <Box mt={12}>
          <Typography variant="h4" fontWeight="bold">About Me</Typography>
          <Typography mt={2} color="gray">
            Frontend Developer with 3+ years of experience building scalable applications using React.js and Next.js.
            
            Recently working as a Full Stack Developer with 1+ year of experience using Django, building APIs and implementing secure authentication.
          </Typography>
        </Box>

        {/* SKILLS */}
        <Box mt={10}>
          <Typography variant="h4" fontWeight="bold">Skills</Typography>
          <Box mt={3} display="flex" gap={1} flexWrap="wrap">
            {skills.map((s) => (
              <Chip key={s} label={s} sx={{ background: "#1e293b", color: "#fff" }} />
            ))}
          </Box>
        </Box>

        {/* PROJECTS */}
        <Box mt={12} id="projects">
          <Typography variant="h4" fontWeight="bold">Projects</Typography>
          <Grid container spacing={3} mt={2}>
            {projects.map((p, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card
                  sx={{
                    background: "#020617",
                    color: "#fff",
                    height: "100%",
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography fontWeight="bold" variant="h6">{p.title}</Typography>
                    <Typography variant="body2" color="gray" mt={1}>{p.role}</Typography>
                    <Divider sx={{ my: 2, background: "#1e293b" }} />
                    {p.points.map((pt, idx) => (
                      <Typography key={idx} variant="body2" mt={1}>
                        • {pt}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* EXPERIENCE */}
        <Box mt={12}>
          <Typography variant="h4" fontWeight="bold">Experience</Typography>
          <Typography mt={2}>
            Software Engineer – Tweak Analytics (Jan 2023 – Present)
          </Typography>
          <Typography mt={1} color="gray">
            • Developed scalable React & Next.js apps
            <br />• Built APIs using Django & Python
            <br />• Implemented JWT authentication
            <br />• Improved performance using lazy loading & memoization
          </Typography>
        </Box>

        {/* CONTACT */}
        <Box mt={12} mb={6} textAlign="center" id="contact">
          <Typography variant="h4" fontWeight="bold">Contact</Typography>
          <Typography mt={2}>Email: siluverusrinivas0105@gmail.com</Typography>
          <Typography>Phone: +91 6303272752</Typography>
        </Box>
      </Container>
    </Box>
  );
}
