import * as React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#222',
    color: '#fff',
    boxShadow: 'none',
    borderBottom: '1px solid #1ee2e7',
    padding: '1rem',
    '@media (min-width:600px)': {
        padding: '1rem',
    },
});

const MenuButton = styled(Button)({
  color: '#fff',
  marginRight: '1rem',
  '&:hover': {
    color: '#1ee2e7',
  },
});

const Title = styled(Typography)({
  flexGrow: 1,
  color: '#1ee2e7',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'sans-serif',
    '@media (min-width:600px)': {
        fontSize: 30,
    },
});

const Subtitle = styled(Typography)({
    flexGrow: 1,
    color: '#1ee2e7',
        fontSize: 20,
        fontFamily: 'sans-serif',
        '@media (min-width:600px)': {
            fontSize: 20,
        },
        paddingLeft: '10rem',
    });


export function Navbar() {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Title variant="h6">
            Komei Urushibata
            <Subtitle>漆畑昂明</Subtitle> 
        </Title>
        <Box display={{ xs: 'none', md: 'block' }}>

          <MenuButton color="inherit" href="#portfolio">
            Portfolio
          </MenuButton>
          <MenuButton color="inherit" href="#services">
            Work
          </MenuButton>
          <MenuButton color="inherit" href="#about">
            About
          </MenuButton>
          <MenuButton color="inherit" href="#contact">
            Contact
          </MenuButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
