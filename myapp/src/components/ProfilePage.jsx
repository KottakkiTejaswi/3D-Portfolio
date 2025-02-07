import React from 'react';
import { Box, Typography, Avatar, IconButton, Button } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import mee from '../mee.jpg';

function ProfilePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'column' },
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
        gap: { xs: 2, md: 4 },
        textAlign: { xs: 'center', md: 'center' },
      }}
    >
      {/* Profile Image */}
      <Avatar
        alt="Tejaswi Kottakki"
        src={mee}
        sx={{
          width: { xs: 100, sm: 90, md: 150},
          height: { xs: 100, sm: 90, md: 150 },
          border: '3px solid #00abf0',
        }}
      />

      {/* Profile Info */}
      <Box sx={{ maxWidth: { xs: '100%', md: '100%', sm: '100%'} }}>
        <Typography variant="h4" sx={{ color: '#007acc', fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
          Tejaswi Kottakki
        </Typography>
        <Typography variant="h6" sx={{ color: '#555', mb: 2 , fontSize: { xs: '1rem', sm: '1.1rem', md: '1.4rem' }, fontWeight: 'bold' }}>
          Software Development Engineer
        </Typography>

        {/* Social Media Icons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'center' }, mb: 2 }}>
          <IconButton href="#" sx={{ color: '#00abf0' }}>
            <Email />
          </IconButton>
          <IconButton href="#" sx={{ color: '#0a66c2' }}>
            <LinkedIn />
          </IconButton>
          <IconButton href="#" sx={{ color: '#171515' }}>
            <GitHub />
          </IconButton>
        </Box>

        {/* Bio */}
        <Typography sx={{ ffontSize: { xs: '1rem', sm: '1rem', md: '1rem' }, lineHeight: 1.6, mb: 3 }}>
          I’m Tejaswi Kottakki, a Software Development Engineer with a degree in Computer Science.
          Currently navigating the corporate world, I’m learning and contributing to impactful projects.
          I’m passionate about building projects that allow me to explore creativity, bring my ideas to life,
          and deepen my skills.
        </Typography>

        {/* Download Resume Button */}
        <Button
          variant="contained"
          href="#"
          sx={{
            backgroundColor: '#007acc',
            '&:hover': { backgroundColor: '#005f99' },
            fontWeight: 'bold',
            textTransform: 'none',
            mb:'4'
          }}
        >
          Download Resume
        </Button>
      </Box>
    </Box>
  );
}

export default ProfilePage;
