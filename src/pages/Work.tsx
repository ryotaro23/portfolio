import React from 'react';
import { Box, Typography } from '@mui/material';

type TimelineItemProps = {
  inverted?: boolean;
  image: string;
  date: string;
  subheading: string;
  text: string;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  inverted = false,
  image,
  date,
  subheading,
  text,
}) => (
  <Box display="flex" 
  flexDirection={inverted ? 'row-reverse' : 'row'}
  justifyContent="center"
  padding='3%'
  color='white'>
    <Box
    display="flex" 
    component="img"
    src={image}
    alt="Timeline"
    justifyContent="center"
    sx={{
        width: {
            xs: 80,
            sm: 80,
            md: 100,
            lg: 200,
          },
        height: {
            xs: 80,
            sm: 80,
            md: 100,
            lg: 200,
          },
      borderRadius: '50%',
      boxShadow: 24,
      objectFit: 'cover',
      }}
    />
    <Box pl={2} pr={2} sx={{width:{
            xs: 250,
            sm: 300,
            md: 500,
            lg: 800,
    }}}>
      <Typography variant="h4" sx={{fontSize:{xs:10,md:20,}}}>{date}</Typography>
      <Typography variant="h5">{subheading}</Typography>
      <Typography>{text}</Typography>
    </Box>
  </Box>
);

type AboutProps = {
  title: string;
  subtitle: string;
  timelineItems: TimelineItemProps[];
};

const Work: React.FC<AboutProps> = ({ title, subtitle, timelineItems }) => (
  <Box p={2}>
    <Box>
      {timelineItems.map((item, index) => (
        <TimelineItem {...item} inverted={index % 2 !== 0} key={index} />
      ))}
    </Box>
  </Box>
);

export default Work;
