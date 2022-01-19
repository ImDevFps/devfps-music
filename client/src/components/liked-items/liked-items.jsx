import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import moment from 'moment';
import 'moment-duration-format';
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { removeSongFromLiked } from './../../redux/liked/liked.actions.js';
import { selectLikedSongs } from './../../redux/liked/liked.selectors';
import {
  addSong,
  clearSong,
  forcePlay,
  toggleMiniPlayer
} from './../../redux/player/player.actions';
import './liked-items.scss';

const LikedItems = ({
  song,
  added,
  removeSongFromLiked,
  idx,
  songs,
  addSong,
}) => {
  console.log(songs);
  const songsToAdd = songs.map((song) => song.song);
  const audio = useRef(null);
  const [duration, setDuration] = useState(0);

  function formatDuration(duration) {
    return moment
      .duration(duration, 'seconds')
      .format('mm:ss', { trim: false });
  }

  return (
    <div className='liked-songs-playlist-block'>
      <audio
        id='audioTag'
        src={song.src}
        ref={audio}
        onLoadedMetadata={() => setDuration(audio.current.duration)}
      ></audio>
      <div className='title'>
        <span className='title-id'>{idx}</span>
        <img
          src={song.img_src}
          alt='item'
          onClick={() => addSong(songsToAdd, idx - 1)}
        />
        <div className='name-artist'>
          <span className='title-name'>{song.title}</span>
          <span className='title-artist'>{song.artist}</span>
        </div>
      </div>
      <div className='date-added'>{added}</div>

      <div className='duration'>
        <FavoriteRoundedIcon
          onClick={() => removeSongFromLiked(song)}
          className='like'
        />
        <span>{formatDuration(duration)}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  songs: selectLikedSongs,
});

const mapDispatchToProps = (dispatch) => ({
  removeSongFromLiked: (song) => dispatch(removeSongFromLiked(song)),
  addSong: (songsToAdd, idx) =>
    Promise.all([
      dispatch(clearSong()),
      dispatch(forcePlay(idx)),
      dispatch(addSong(songsToAdd)),
      dispatch(toggleMiniPlayer(true)),
    ]),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikedItems);
