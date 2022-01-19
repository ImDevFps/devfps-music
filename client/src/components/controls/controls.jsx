import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  addSongToLiked,
  removeSongFromLiked,
} from './../../redux/liked/liked.actions.js';
import { selectLikedSongs } from './../../redux/liked/liked.selectors';
import { toggleMiniPlayer } from './../../redux/player/player.actions';
import { selectPlayerHidden } from './../../redux/player/player.selector';
import MiniPlayer from './../mini-player/MiniPlayer';
import TimeLine from './../timeLine/timeLine';
import Volume from './../volume/volume';
import './controls.scss';

const Controls = ({
  song,
  musicRef,
  currentTime,
  setCurrentTime,
  duration,
  music,
  addSongToLiked,
  SkipSong,
  likedSongs,
  removeSongFromLiked,
  toggleMiniPlayer,
  hidden,
}) => {
  const [volume, setVolume] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);

  //checking if current track is in liked Songs or not
  const likedSongss = likedSongs.map(({ song }) => song.id);
  const isLiked = likedSongss.includes(song ? song.id : '');

  useEffect(() => {
    if (musicRef) {
      setCurrentTime(musicRef.currentTime);
    }
    if (music.current) {
      isPlaying ? music.current.play() : music.current.pause();
    }
    // we will update the time of player every 1000ms
    let setTimeInterval;
    if (isPlaying === true) {
      setTimeInterval = setInterval(() => {
        setCurrentTime(musicRef.currentTime);
      }, 1000);
    } else {
      clearInterval(setTimeInterval);
    }
    return () => clearInterval(setTimeInterval);
  }, [isPlaying, musicRef, setCurrentTime, music]);

  const volumeChange = (event, newVal) => {
    if (musicRef) {
      setVolume(newVal);
      musicRef.volume = newVal / 100;
    }
  };

  const timeChange = (event, newValue) => {
    musicRef.currentTime = newValue;
    setCurrentTime(newValue);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };
  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleForward = () => {
    SkipSong();
  };
  const handleBackward = () => {
    SkipSong(false);
  };

  return (
    <div className='controls'>
      <div className='img'>
        <div className='song-data'>
          <img src={song && song.img_src} alt='' onClick={toggleMiniPlayer} />

          <div className='music-info' onClick={toggleMiniPlayer}>
            <span className='title'>{song && song.title}</span>
            <span className='artist'>{song && song.artist}</span>
          </div>
          {isLiked ? (
            <FavoriteRoundedIcon
              onClick={() => removeSongFromLiked(song)}
              className='dislike'
            />
          ) : (
            <FavoriteBorderRoundedIcon
              onClick={() => addSongToLiked(song)}
              className='like'
            />
          )}
        </div>
      </div>
      <div className='middle-footer'>
        <div className='actions'>
          <SkipPreviousRoundedIcon
            className='song-prev'
            onClick={handleBackward}
          />

          {isPlaying === false ? (
            <PlayCircleFilledRoundedIcon
              className='song-actions'
              onClick={handlePlay}
            />
          ) : (
            <PauseCircleFilledRoundedIcon
              className='song-actions'
              onClick={handlePause}
            />
          )}
          <SkipNextRoundedIcon onClick={handleForward} className='song-next' />
        </div>
        <TimeLine
          currentTime={currentTime}
          timeChange={timeChange}
          duration={duration}
        />
      </div>

      <Volume volume={volume} volumeChange={volumeChange} musicRef={musicRef} />
      {hidden ? (
        ''
      ) : (
        <MiniPlayer
          currentTime={currentTime}
          timeChange={timeChange}
          duration={duration}
          song={song}
          music={musicRef}
          setCurrentTime={setCurrentTime}
          SkipSong={SkipSong}
          isPlaying={isPlaying}
          handleBackward={handleBackward}
          handleForward={handleForward}
          handlePause={handlePause}
          handlePlay={handlePlay}
          isLiked={isLiked}
        />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addSongToLiked: (song) => dispatch(addSongToLiked(song)),
  removeSongFromLiked: (song) => dispatch(removeSongFromLiked(song)),
  toggleMiniPlayer: () => dispatch(toggleMiniPlayer()),
});
const mapStateToProps = createStructuredSelector({
  likedSongs: selectLikedSongs,
  hidden: selectPlayerHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
