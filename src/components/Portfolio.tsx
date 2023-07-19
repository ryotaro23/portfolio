import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography, Modal, Box,CardMedia, } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { textAlign } from '@mui/system';


interface PortfolioProps {
  title: string;
  category: string;
  imageUrl: string;
  hoverImageUrl: string;
  modalId: string;
  description: string;
}

interface PortfolioModalProps {
    open: boolean;
    handleClose: () => void;
    imageUrl: string;
    title: string;
    description: string;
  }

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 12,
        marginBottom: 12,
        marginRight: 16,
        marginLeft: 16,
        cursor: 'pointer',
        position: 'relative',
        '&:hover $hoverMedia': {
          opacity: 1,
        },
        '&:hover $media': {
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
          },
      },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
  },
  media: {
    height: 300,
  },
  hoverMedia: {
    height: 300,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  },

});

export const Portfolio: React.FC<PortfolioProps> = ({ title, description,imageUrl,hoverImageUrl }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card className={classes.root} onClick={handleOpen}>
      <CardMedia
          className={classes.media}
          image={imageUrl}
          title={title}
        />
        <CardMedia
          className={classes.hoverMedia}
          image={hoverImageUrl}
          title={title}
        />
      </Card>

   <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClick={handleClose}
    >
      <Box 
        sx={{ 
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'auto'
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <Box 
          sx={{ 
            width: {
                xs: '90%',  // Extra small devices (mobile)
                sm: '80%',  // Small devices (tablets)
                md: '70%',  // Medium devices (desktops)
                lg: '70%',  // Large devices (large desktops)
              },
              height: {
                xs: '90%',  // Extra small devices (mobile)
                sm: '90%',  // Small devices (tablets)
                md: '90%',  // Medium devices (desktops)
                lg: '90%',  // Large devices (large desktops)
              },
            padding: 4,
            position: 'relative',
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 24,
            overflow: 'auto',
          }}
          onClick={(event) => event.stopPropagation()}
        >
          <Button 
            onClick={handleClose} 
            variant="outlined"
            sx={{ 
              position: 'absolute',
              right: 8,
              top: 8,
            fontWeight: 'bold',
            fontSize: 30,
            
            }}
          >
            ✖
          </Button>
          <Typography id="modal-modal-title" variant="h3" >
            {title}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={imageUrl} alt={title} style={{ paddingTop:'5%',width: '60%', height: '60%',paddingBottom:'5%'}} />
          </div>
          <Typography id="modal-modal-description" variant="h5"  >
            {description}
          </Typography>
        </Box>
      </Box>
    </Modal>
    </div>
  );
}


