import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';

type AboutPageProps = {
  selfPortraits: string[],
  name: {
    kanji: string,
    romaji: string,
  },
  university: {
    japanese: string,
    english: string,
  },
  organization: string,
  description: string,
};

const AboutPage: React.FC<AboutPageProps> = ({
  selfPortraits,
  name,
  university,
  organization,
  description,
}) => {
  const [portraitIndex, setPortraitIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPortraitIndex((prevIndex) => (prevIndex + 1) % selfPortraits.length);
    }, 3000); // Change portrait every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [selfPortraits.length]);

  return (
    <Container
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        bgcolor: '#fff',
        height: '75vh',
      }}
    >
      <Box
        component="img"
        src={selfPortraits[portraitIndex]}
        alt="Self portrait"
        sx={{
          width: '60%',
            height: '60%',
          objectFit: 'cover',
          margin: '3rem',
          marginRight: 10,
         
        }}
      />
      <Box
        sx={{
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" gutterBottom>
          {name.kanji} 
        </Typography>
        <Typography variant="h3" gutterBottom>
          {name.romaji}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {university.japanese} 
        </Typography>
        <Typography variant="h4" gutterBottom>
         サイバーインフォマティクス専攻
        </Typography>
        <Typography variant="h5" gutterBottom>
          {university.english}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {organization}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;

