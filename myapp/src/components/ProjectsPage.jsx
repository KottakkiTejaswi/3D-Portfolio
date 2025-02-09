import React from "react";
import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { usePage } from './PageContext';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with React, Node.js, and MongoDB.",
    image: "https://picsum.photos/500/300?random=1"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "Mobile-first task management application with offline capabilities.",
    image: "https://picsum.photos/500/300?random=2"
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Real-time social media platform using WebSockets and React.",
    image: "https://picsum.photos/500/300?random=3"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Responsive portfolio website with dark mode and animations.",
    image: "https://picsum.photos/500/300?random=4"
  }
];

const ProjectsPage = () => {
  const { handlePageTurn } = usePage();
  return (
    <>
     <Box
                sx={{
                  p: { xs: 2, sm:0 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: { xs: 1, sm: 1, md: 2 },
                }} 
              >
        <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#555",
                    fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2rem" },
                  }}
                >
                  Projects
        </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 4,
        backgroundColor: "#f0f0f0",
      }}
    >
     
      <Container sx={{ maxWidth: 900 }}>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6}>
              <Card
                sx={{
                  height: 200,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 2,
                  boxShadow: 2,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <img src={project.image} alt={project.title} width={50} height={50} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {project.title}
                    </Typography>
                    {project.subtitle && (
                      <Typography variant="subtitle2" sx={{ color: "gray" }}>
                        {project.subtitle}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Typography variant="body2" sx={{ color: "#007bff", fontWeight: "bold" }}>
                  {project.category}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </Box>
    <span className='number-page'>3</span>
              <span className="nextprev-btn " data-page="turn-1" 
              onClick={() => handlePageTurn('next')}

              >
                <box-icon name='chevron-right'></box-icon>
        </span>
        
    </>
  );
};

export default ProjectsPage;
