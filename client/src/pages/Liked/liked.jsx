import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LikedItems from './../../components/liked-items/liked-items';
import { selectLikedSongs } from './../../redux/liked/liked.selectors';
import './liked.scss';

const LikedPage = ({ songs }) => {
  return (
    <div className='liked-page'>
      <div className='liked-banner'>
        <div className='liked-logo'>
          <FavoriteRoundedIcon className='liked-page-like' />
        </div>
        <div>
          <span className='liked-playlist'>PLAYLIST</span>
          <span className='liked-likedSongs'>Liked Songs</span>
          <span className='liked-user'>ali.tf1374 - </span>
          <span className='liked-songs'>{ songs.length}</span>
        </div>
      </div>
      <div className='liked-songs-playlist'>
        <div className='liked-songs-playlist-header'>
          <div className='title'>
            <span className='title-id'>#</span>
            <span className='title-name'>title</span>
          </div>
          <div className='date-added'>date added</div>
          <div className='duration-parent'>
            <AccessTimeRoundedIcon className='duration' />
          </div>
        </div>
        {songs.map((song , idx) => (
          <LikedItems key={song.song.id} song={song.song} added={song.added} idx={idx+1}/>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  songs: selectLikedSongs,
});

export default connect(mapStateToProps)(LikedPage);
