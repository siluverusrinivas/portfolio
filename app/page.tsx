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
  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills: string[] = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Django",
    "HTML5",
    "CSS3",
    "Material UI",
    "Tailwind CSS",
    "Redux Toolkit",
    "Context API",
    "React Router",
    "JWT Authentication",
    "REST APIs",
    "MySQL",
    "PostgreSQL",
    "AWS (S3, EC2, IAM, Amplify)",
    "Git",
    "GitHub",
    "Jira",
    "Postman",
    "Figma",
    "Jest",
    "React Testing Library",
  ];

  const projects = [
    {
      title: "CBAM Certification Platform",
      role: "Full Stack Developer",
      points: [
        "Developed emission tracking platform for EU compliance using Next.js & Django",
        "Built reusable components and dynamic forms using Redux Toolkit",
        "Created backend APIs for emission calculation and workflows",
        "Implemented JWT authentication and role-based access",
        "Added Excel upload & multi-language support",
      ],
    },
    {
      title: "Subscription Management App",
      role: "Frontend Developer",
      points: [
        "Built responsive UI using React.js and Material UI",
        "Implemented JWT authentication and protected routes",
        "Integrated APIs for subscriptions and payments",
        "Developed dynamic UI (accordions, scrolling, plans)",
      ],
    },
    {
      title: "Digital Estates Platform",
      role: "Frontend Developer",
      points: [
        "Created reusable components for asset management",
        "Integrated APIs for real-time updates",
        "Improved UI performance and responsiveness",
      ],
    },
  ];

  return (
    <Box sx={{ background: "#f8fafc", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "#ffffff",
          color: "#000",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontWeight="bold">Srinivas</Typography>
          <Box>
            <Button color="inherit" onClick={() => scrollTo("projects")}>
              Projects
            </Button>
            <Button color="inherit" onClick={() => scrollTo("contact")}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        {/* HERO */}
        <Box textAlign="center" mt={10}>
          <Typography variant="h3" fontWeight="bold">
            Hi, I'm Srinivas 👋
          </Typography>
          <Typography mt={2} color="text.secondary">
            Frontend Developer (3+ yrs) | Full Stack Developer (1+ yr)
          </Typography>
          <Typography mt={2} color="text.secondary">
            Building scalable, high-performance web applications using React,
            Next.js & Django.
          </Typography>

          <Box mt={4}>
            <Button
              variant="contained"
              sx={{ mr: 2, borderRadius: 2 }}
              onClick={() => scrollTo("projects")}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              sx={{ borderRadius: 2 }}
              href="/Srinivas-Siluveru-Tweak.pdf"
              download
            >
              Download Resume
            </Button>
          </Box>
        </Box>

        {/* ABOUT */}
        <Box mt={12}>
          <Typography variant="h4" fontWeight="bold">
            About Me
          </Typography>
          <Typography mt={2} color="text.secondary">
            Frontend Developer with 3+ years of experience building scalable,
            high-performance web applications using React.js, Next.js, and modern
            JavaScript.
            <br />
            <br />
            Over the last 1+ year, working as a Full Stack Developer using Django
            and Python to build REST APIs, handle backend logic, and implement
            secure authentication using JWT.
            <br />
            <br />
            Strong expertise in API integration, state management (Redux Toolkit,
            Context API), performance optimization techniques like lazy loading
            and memoization, and building responsive UI using Material UI and
            Tailwind CSS.
            <br />
            <br />
            Hands-on experience with AWS services (S3, EC2, IAM, Amplify),
            database management (MySQL, PostgreSQL), and testing using Jest and
            React Testing Library.
            <br />
            <br />
            Experienced in working in Agile environments using Git, GitHub, Jira,
            and Postman, and collaborating effectively with cross-functional
            teams.
          </Typography>
        </Box>

        {/* SKILLS */}
        <Box mt={10}>
          <Typography variant="h4" fontWeight="bold">
            Skills
          </Typography>
          <Box mt={3} display="flex" gap={1} flexWrap="wrap">
            {skills.map((s) => (
              <Chip key={s} label={s} sx={{ background: "#e2e8f0" }} />
            ))}
          </Box>
        </Box>

        {/* PROJECTS */}
        <Box mt={12} id="projects">
          <Typography variant="h4" fontWeight="bold">
            Projects
          </Typography>

          {/* ✅ FIXED GRID */}
          <Grid container spacing={3} mt={2}>
            {projects.map((p, i) => (
              <Grid xs={12} md={4} key={i}>
                <Card
                  sx={{
                    background: "#ffffff",
                    height: "100%",
                    borderRadius: 3,
                    border: "1px solid #e2e8f0",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography fontWeight="bold" variant="h6">
                      {p.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      mt={1}
                    >
                      {p.role}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
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
          <Typography variant="h4" fontWeight="bold">
            Experience
          </Typography>
          <Typography mt={2}>
            Software Engineer – Tweak Analytics (Jan 2023 – Present)
          </Typography>
          <Typography mt={1} color="text.secondary">
            • Developed scalable React & Next.js apps
            <br />• Built APIs using Django & Python
            <br />• Implemented JWT authentication
            <br />• Improved performance using lazy loading & memoization
          </Typography>
        </Box>

        {/* CONTACT */}
        <Box mt={12} mb={6} textAlign="center" id="contact">
          <Typography variant="h4" fontWeight="bold">
            Contact
          </Typography>
          <Typography mt={2}>
            Email: siluverusrinivas0105@gmail.com
          </Typography>
          <Typography>Phone: +91 6303272752</Typography>
        </Box>
      </Container>
    </Box>
  );
}