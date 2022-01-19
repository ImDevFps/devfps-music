import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import './ArtistCard.scss';
import { withRouter } from 'react-router';

const ArtistCard = ({ singer, history }) => {
  const { artist, img, routeName } = singer;
  return (
    <div className='main-card-artist'>
      <Card className='music-card-artist'>
        <CardActionArea onClick={() => history.push(`/${routeName}`)}>
          <CardMedia
            component='img'
            width={150}
            height={165}
            image={img}
            alt='cover'
          />
          <CardContent>
            <Typography variant='body2' color='#B3B3B3' className='artist-res'>
              {artist}
            </Typography>
            <Typography variant='body2' color='#B3B3B3' className='artist'>
              Artist
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default withRouter(ArtistCard);
