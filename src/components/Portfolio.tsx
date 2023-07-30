import React, { useState } from 'react';
import { Card,  Typography, Modal, Box, CardMedia, Grid } from '@mui/material';
import Button from '@mui/material/Button';

interface PortfolioProps {
  title: string;
  category: string;
  imageUrl: string;
  hoverImageUrl: string;
  modalId: string;
  description: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({ title, description, imageUrl, hoverImageUrl }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
       <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
      <Card 
        sx={{ 
          width: { xs: 300, sm: 500 }, // Smaller width for small devices
          height: { xs: 200, sm: 400 }, // Smaller height for small devices
          mt: {xs:3,sm:12},
          mb: {xs:3,sm:12},
          mx: 'auto',
          cursor: 'pointer',
          position: 'relative',
          '&:hover .hoverMedia': {
            opacity: 1,
          },
          '&:hover .media': {
              opacity: 0,
              transition: 'opacity 0.3s ease-in-out',
          },
        }}
        onClick={handleOpen}
      >
        <CardMedia
          className="media"
          sx={{
            height: { xs: 200, sm: 400 }, // Smaller height for small devices
            width: '100%',
          }}
          image={imageUrl}
          title={title}
        />
        <CardMedia
          className="hoverMedia"
          sx={{
            height: { xs: 200, sm: 400 }, // Smaller height for small devices
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
          image={hoverImageUrl}
          title={title}
        />
      </Card>
      </Grid>
    </Grid>

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
                lg: '60%',  // Large devices (large desktops)
              },
              height: {
                xs: '90%',  // Extra small devices (mobile)
                sm: '90%',  // Small devices (tablets)
                md: '80%',  // Medium devices (desktops)
                lg: '70%',  // Large devices (large desktops)
              },
              p: 4,
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
            <Box sx={{ display: 'flex', justifyContent: 'center', p: '5% 0' }}>
              <img src={imageUrl} alt={title} style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
            </Box>
            <Typography id="modal-modal-description" variant="h5" >
              {description}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
