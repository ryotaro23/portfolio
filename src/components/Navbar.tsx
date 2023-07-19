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
  fontsize: 20,
});

const Title = styled(Typography)({
  flexGrow: 1,
  color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'sans-serif',
    '@media (min-width:600px)': {
        fontSize: 30,
    },
    '&:hover': {
      color: '#1ee2e7',
    },
});

const Subtitle = styled(Typography)({
    flexGrow: 1,
    color: '#fff',
        fontSize: 20,
        fontFamily: 'sans-serif',
        '@media (min-width:600px)': {
            fontSize: 20,
        },
        '&:hover': {
          color: '#1ee2e7',
        },
        paddingLeft: '10rem',
    });


export function Navbar() {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Title variant="h6">
            Ryotaro Kageshima
            <Subtitle>影嶋亮太朗</Subtitle> 
        </Title>
        <Box display={{ xs: 'none', md: 'block' }}>
        <ScrollLink 
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
          <MenuButton color="inherit" href="#portfolio">
            Portfolio
          </MenuButton>
          </ScrollLink>
          <ScrollLink 
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
          <MenuButton color="inherit" href="#about">
            About
          </MenuButton>
          </ScrollLink>
          <ScrollLink 
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
          <MenuButton color="inherit" href="#services">
            Work
          </MenuButton>
          </ScrollLink>
          <ScrollLink 
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
          <MenuButton color="inherit" href="#contact">
            Contact
          </MenuButton>
          </ScrollLink>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
