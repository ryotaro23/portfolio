import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

// ... MyComponent内 ...

const images = [
  { url: 'https://source.unsplash.com/1600x900/?nature,water', title: 'Photo One', description: 'Lorem ipsum dolor sit amet consectetu adispcin elit. Quo, tenetur.' },
  { url: 'https://source.unsplash.com/1600x900/?nature,trees', title: 'Photo Two', description: 'Lorem ipsum dolor sit amet consectetu adispcin elit. Quo, tenetur.' },
  { url: 'https://source.unsplash.com/1600x900/?nature,flowers', title: 'Photo Three', description: 'Lorem ipsum dolor sit amet consectetu adispcin elit. Quo, tenetur.' },
  // ... 続けて画像の情報を追加 ...
];

// ...

export const Images = () =>{
    return(
  <Grid container spacing={2}>
    {images.map((image, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card>
          <CardMedia
            component="img"
            alt={image.title}
            height="140"
            image={image.url}
            title={image.title}
          />
          <CardContent>
            <Typography variant="h5" component="div">{image.title}</Typography>
            <Typography variant="body2" color="text.secondary">{image.description}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
    )
};

