import React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Portfolio } from '../components/Portfolio';
import AboutPage from './AboutPage';

const StyledMain = styled('main')({
  margin: 'auto',
  background: '#fff',
  height: 'auto',

});
const Landing = styled(Box)({
    display: 'flex',
    flexWrap: 'nowrap',
    height: '100vh',
    width: '100vw',
    background: '#fff',
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
  background: `url(/welcome.png) center/cover no-repeat`,
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
  backgroundColor: '#fff',
});

export const Home: React.FC = () => (
  <StyledMain>
    <Landing>
      <LandingText>
        <div>
          <Typography variant="h1">Wellbeing×Computing</Typography>
          <Typography variant="h4">Creating Digital Solutions for Better Wellbeing</Typography>
          <Button variant="outlined" href="https://www.jn.sfc.keio.ac.jp/" id="view-work">
            View My Laboratry
          </Button>
        </div>
      </LandingText>
      <LandingImage />
    </Landing>
    <Portfoliotitle variant="h2" id="section1">Portfolio</Portfoliotitle>
    <PortfolioText variant="h4">Excellence in Action</PortfolioText>
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
  }}
  color={'#fff'}>
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
      
      <Portfoliotitle variant="h2" id="section2">ABOUT</Portfoliotitle>
    <PortfolioText variant="h4">Get to Know Me</PortfolioText>
  <AboutPage
      selfPortraits={[
        '/selfphoto1.jpg',
        '/selfphoto2.jpg',
      ]}
      name={{
        kanji: '影嶋亮太朗',
        romaji: 'Ryotaro Kageshima',
      }}
      university={{
        japanese: '慶應義塾大学院政策メディア研究科',
        english: 'Keio University Graduate School of Media and Governance',
      }}
      organization="POSSE一期生" 
      description={'大学院では「ウェルビーイングのためのコンピューティング」「ユビキタスコンピューティング」「デジタルウェルビーイング」に関して研究しています。プログラミングではこれまでHTML,CSS,Javascript,Typescript,React,PHP,Doker,SQL(MySQL)laravel,C++,C#,python,djangoなどを用いて活動してきました。過去にプログラミングのハッカソンの企画・運営をしたり、参加者として優勝した経験もあります。他にも3か月に及ぶチーム開発も経験しました。人格の勉強もしており、傾聴の大切さやインサイドアウトなど「7つの習慣」をベースに学習しています。ちなみに学部時代は「超伝導」に関する研究を行っており、C++をもちいたシミュレーションと平行して試料を作成し、ボルテックスラチェッド効果の測定を行っておりました。'}  
      />
     




      
    <StyledFooter>
      <Typography variant="h3">Get In Touch</Typography>
      <Typography>Email or call us to set up a consult</Typography>
      <Typography>Email: <strong>contact@acmephotos.test</strong></Typography>
      <Typography>Phone: <strong>(999) 999-9999</strong></Typography>
    </StyledFooter>
  </StyledMain>
);

export default Home;

