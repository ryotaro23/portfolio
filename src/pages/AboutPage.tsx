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
    <Box
      sx={{
        width: '100%',
        maxWidth: {xs:'350px',md:'1400px'},
        display: {xs:'block', md:'flex',},
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: {xs:'50vh',md:'75vh'},
        margin: 'auto',
      }}
    >
      <Box
        component="img"
        src={selfPortraits[portraitIndex]}
        alt="Self portrait"
        sx={{
          width: '60%',
          height: '80%',
          objectFit: 'cover',
          margin: {xs:'3rem'},
          marginRight:{xs:3, md:10,},
         
        }}
      />
      <Box
        sx={{
          width: {xs:'100%', md:'100%',},
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" gutterBottom sx={{fontSize:{xs:20,md:60}}}>
          {name.kanji} 
        </Typography>
        <Typography variant="h3" gutterBottom sx={{fontSize:{xs:20,md:50}}}>
          {name.romaji}
        </Typography>
        <Typography variant="h4" gutterBottom sx={{fontSize:{xs:20,md:40}}}>
          {university.japanese} 
        </Typography>
        <Typography variant="h4" gutterBottom sx={{fontSize:{xs:20,md:40}}}>
         サイバーインフォマティクス専攻
        </Typography>
        <Typography variant="h5" gutterBottom sx={{fontSize:{xs:10,md:25}}}>
          {university.english}
        </Typography>
        <Typography variant="h5" gutterBottom sx={{fontSize:{xs:10,md:30}}}>
          {organization}
        </Typography>
        <Typography variant="body1"sx={{width:'100%',fontSize:{xs:2,md:18}}}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;

