import React from 'react';
import { Box, Tooltip, IconButton, Grid } from '@mui/material';
import { Email,LinkedIn, Twitter, GitHub,  Facebook,  } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';

type SocialLinkProps = {
  title: string;
  url: string;
  IconComponent: React.ElementType;
};

const SocialLink: React.FC<SocialLinkProps> = ({ title, url, IconComponent }) => (
  <Tooltip title={title} arrow>
    <IconButton href={url} target="_blank" rel="noopener noreferrer" color="primary"  
    sx={{ 
      width:{
        xs:'100px',
        sm:'100px',
        md:'150px',
        lg:'250px',
        }, 
        height:{
          xs:'100px',
          sm:'100px',
          md:'150px',
          lg:'250px',
          },
          }} >
      <IconComponent sx={{ fontSize:{
        xs:'100px',
        sm:'100px',
        md:'200px',
        lg:'200px',
        }
         }}/>
    </IconButton>
  </Tooltip>
);

const Contact: React.FC = () => (

  <Box component="footer" sx={{WebkitJustifyContent:'center', marginLeft:'auto',marginRight:'auto',width:'80%',marginTop:{xs:'100px',md:'300px'},marginBottom:{xs:'100px',md:'auto'}, height:'60vh' }}>
  <Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={2} sx={{display:{xs:'block',md:'flex',}}}>
    <SocialLink title="Email" url="mailto:kageshima23@gmail.com" IconComponent={Email} />
    <SocialLink title="LinkedIn" url="https://www.linkedin.com/in/ryotaro-kagesima-7b015925a/" IconComponent={LinkedIn} />
    <SocialLink title="Instagram" url="https://www.instagram.com/ryotaro.23/" IconComponent={InstagramIcon} />
    <SocialLink title="Twitter" url="https://twitter.com/0O7R0g2gGQ3Ing2" IconComponent={Twitter} />
    <SocialLink title="GitHub" url="https://github.com/ryotaro23" IconComponent={GitHub} />
    <SocialLink title="Facebook" url="https://www.facebook.com/profile.php?id=100063786579535" IconComponent={Facebook} />
    </Grid>
    </Grid>
  </Box>
);

export default Contact;
