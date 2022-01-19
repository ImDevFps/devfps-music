import React from 'react';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { addSong } from './../../redux/player/player.actions';

import './SearchItems.scss';
import { connect } from 'react-redux';

const SearchItems = ({ item, addSong }) => {
    const { img_src, title, artist } = item;
    const songToAdd = [item];
  return (
    <div className='main-card'>
      <Card className='music-card'>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={img_src}
            alt='cover'
            onClick={() => addSong(songToAdd)}
          />
          <CardContent>
            <Typography gutterBottom component='div' className='music-title'>
              {title}
            </Typography>
            <Typography variant='body2' color='#B3B3B3' className='artist'>
              {artist}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addSong: (songToAdd) => dispatch(addSong(songToAdd)),
});


export default connect(null, mapDispatchToProps)(SearchItems);
