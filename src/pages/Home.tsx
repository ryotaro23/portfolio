import React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Images } from '../components/Images';
import { Portfolio } from '../components/Portfolio';

const StyledMain = styled('main')({
  margin: 'auto',
  boxShadow: '30px 0px 40px rgba(0,0,0,0.1), -30px 0px 40px rgba(0,0,0,0.2)',
  background: '#eee',
  height: 'auto',

});
const Landing = styled(Box)({
    display: 'flex',
    flexWrap: 'nowrap',
    height: '100vh',
    width: '100vw',
    background: '#eee',
    color: '#333',
    fontFamily: 'sans-serif',
    fontWeight: 100,
    });

const LandingText = styled(Box)({
  display: 'flex',
  flex: '0 1 40vw',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  paddingRight: '1rem',
  paddingLeft: '1rem',
});

const LandingImage = styled(Box)({
  background: `url(/artphoto.png) center/cover no-repeat`,
  height: '100vh',
  flex: '0 1 60vw',
  margin: 0,
});

const Portfoliotitle = styled(Typography)({
  textAlign: 'center',
  paddingTop: '5%',
  paddingBottom: '1%',  
  fontWeight: 'bold',
  fontSize: 50,
  color: '#333',
  fontFamily: 'sans-serif',

});
const PortfolioText = styled(Typography)({
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 30,
  color: '#222',
  fontFamily: 'sans-serif', 
});
const portfolioItems = [
    {
      title: 'Round Icons',
      category: 'Graphic Design',
      imageUrl: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502',
      hoverImageUrl: 'https://source.unsplash.com/1600x900/?nature,water',
      modalId: 'portfolioModal1',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Round Icons',
      category: 'Graphic Design',
      imageUrl: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502',
      hoverImageUrl: 'https://source.unsplash.com/1600x900/?nature,water',
      modalId: 'portfolioModal1',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Round Icons',
      category: 'Graphic Design',
      imageUrl: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502',
      hoverImageUrl: 'https://source.unsplash.com/1600x900/?nature,water',
      modalId: 'portfolioModal1',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Round Icons',
      category: 'Graphic Design',
      imageUrl: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502',
      hoverImageUrl: 'https://source.unsplash.com/1600x900/?nature,water',
      modalId: 'portfolioModal1',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Round Icons',
      category: 'Graphic Design',
      imageUrl: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502',
      hoverImageUrl: 'https://source.unsplash.com/1600x900/?nature,water',
      modalId: 'portfolioModal1',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Round Icons',
      category: 'Graphic Design',
      imageUrl: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502',
      hoverImageUrl: 'https://source.unsplash.com/1600x900/?nature,water',
      modalId: 'portfolioModal1',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Round Icons',
      category: 'Graphic Design',
      imageUrl: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502',
      hoverImageUrl: 'https://source.unsplash.com/1600x900/?nature,water',
      modalId: 'portfolioModal1',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Round Icons',
      category: 'Graphic Design',
      imageUrl: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502',
      hoverImageUrl: 'https://source.unsplash.com/1600x900/?nature,water',
      modalId: 'portfolioModal1',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Round Icons',
      category: 'Graphic Design',
      imageUrl: 'https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502',
      hoverImageUrl: 'https://source.unsplash.com/1600x900/?nature,water',
      modalId: 'portfolioModal1',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ];

const ImagesContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledFooter = styled('footer')({
  textAlign: 'center',
  padding: '2rem 1rem',
  margin: 'auto',
  color: '#333',
});

export const Home: React.FC = () => (
  <StyledMain>
    <Landing>
      <LandingText>
        <div>
          <Typography variant="h1">Acme Photography</Typography>
          <Typography variant="h2">Beautiful Natural Photography</Typography>
          <Button variant="outlined" href="#images" id="view-work">
            View Work
          </Button>
        </div>
      </LandingText>
      <LandingImage />
    </Landing>
    <Portfoliotitle variant="h2">Portfolio</Portfoliotitle>
    <PortfolioText variant="h4">Lorem ipsum dolor sit amet consectetur.</PortfolioText>
    <Box   sx={{
      paddingTop: {
        xs: 0,
        sm: 2,
        md: 5,
        lg: 8,
      },
    paddingLeft: {
      xs: 0, 
      sm: 5, 
      md: 20,
      lg: 25,
    },
    paddingRight: {
      xs: 0, 
      sm: 5, 
      md: 20, 
      lg: 25, 
    }
  }}>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
    {portfolioItems.map((item, index) => (
      <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
        <Portfolio 
          key={index}
          title={item.title}
          category={item.category}
          imageUrl={item.imageUrl}
          hoverImageUrl={item.hoverImageUrl}
          modalId={item.modalId}
          description={item.description}
        />
        </Grid>
      ))}
      </Grid>
      </Box>
    <StyledFooter>



      <Typography variant="h3">Get In Touch</Typography>
      <Typography>Email or call us to set up a consult</Typography>
      <Typography>Email: <strong>contact@acmephotos.test</strong></Typography>
      <Typography>Phone: <strong>(999) 999-9999</strong></Typography>
    </StyledFooter>
  </StyledMain>
);

export default Home;

