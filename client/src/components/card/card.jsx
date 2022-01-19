import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { addSong, forcePlay } from '../../redux/player/player.actions.js';
import './card.scss';
import { withRouter } from 'react-router';

const MusicCard = ({ tracks, addSong, history, routeName, forcePlay }) => {
  const { img_src, title } = tracks[0];
  const songToAdd = [tracks[0]];
  return (
    <div className='main-card'>
      <Card className='music-card'>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={img_src}
            alt='cover'
            onClick={() => [addSong(songToAdd), forcePlay(0)]}
          />
          <CardContent>
            <Typography gutterBottom component='div' className='music-title'>
              {title}
            </Typography>
            <Typography
              variant='body2'
              color='#B3B3B3'
              className='artist'
              onClick={() => history.push(`/${routeName}`)}
            >
              {tracks[0].artist}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  forcePlay: () => dispatch(forcePlay(0)),
  addSong: (songToAdd) => dispatch(addSong(songToAdd)),
});

export default withRouter(connect(null, mapDispatchToProps)(MusicCard));
