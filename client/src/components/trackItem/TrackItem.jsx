import moment from 'moment';
import 'moment-duration-format';
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import {
  addSong,
  clearSong,
  forcePlay,
  toggleMiniPlayer
} from './../../redux/player/player.actions';
import './trackItem.scss';
import { createStructuredSelector } from 'reselect';
import { selectMusicForPreview } from '../../redux/music/music.selector.js';

const TrackItem = ({ song, idx, addSong, songs }) => {
  const { img_src, title } = song;
  const tracks = songs.find(tr => tr.artist === song.artist);
  const audio = useRef(null);
  const [duration, setDuration] = useState(0);

  function formatDuration(duration) {
    return moment
      .duration(duration, 'seconds')
      .format('mm:ss', { trim: false });
  }
  return (
    <div className='track-item'>
      <audio
        id='audioTag'
        src={song.src}
        ref={audio}
        onLoadedMetadata={() => setDuration(audio.current.duration)}
      ></audio>
      <div className='track-item-song' onClick={() => addSong(tracks.tracks, idx - 1)}>
        <span className='track-item-id'>{idx}</span>
        <img src={img_src} alt={title} />
        <span className='track-item-title'>{title}</span>
      </div>
      <div className='track-item-time'>{formatDuration(duration)}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  songs: selectMusicForPreview
})

const mapDispatchToProps = (dispatch) => ({
  addSong: (songs, idx) =>
    Promise.all([
      dispatch(clearSong()),
      dispatch(forcePlay(idx)),
      dispatch(addSong(songs)),
      dispatch(toggleMiniPlayer(true))
    ]),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackItem);
