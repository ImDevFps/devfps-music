import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Slider, styled } from '@mui/material';
import moment from 'moment';
import 'moment-duration-format';
import React from 'react';
import { connect } from 'react-redux';
import { toggleMiniPlayer } from './../../redux/player/player.actions';
import {
  addSongToLiked,
  removeSongFromLiked,
} from './../../redux/liked/liked.actions.js';
import './MiniPlayer.styels.scss';

const StyledSlider = styled(Slider)(
  ({ theme }) => `
  color: ${theme.palette.mode === 'light' ? '#fff' : '#90caf9'};
  height: 4px;
  width: 100%;
  padding: 13px 0;
  display: inline-block;
  position: relative;
  cursor:unset;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0.85;
  &:hover .MuiSlider-track{
    color: white
  }
  &:hover .MuiSlider-thumb{
    opacity: 1;
  }

  & .MuiSlider-rail {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    opacity: 0.38;
  }
  

  & .MuiSlider-track {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
  }
  

  & .MuiSlider-thumb {
    opacity: 0;
    position: absolute;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 2px solid currentColor;
    background-color: #fff;

    :hover,
    &.Mui-focusVisible {
      box-shadow: none
    }

    &.Mui-active {
      box-shadow: none
    }
    :after{
        width:20px;
        height:20px;
    }
  }
`
);

const MiniPlayer = ({
  toggleMiniPlayer,
  currentTime,
  timeChange,
  duration,
  song,
  isPlaying,
  handleForward,
  handleBackward,
  handlePlay,
  handlePause,
  removeSongFromLiked,
  addSongToLiked,
  isLiked,
}) => {
  function formatDuration(duration) {
    return moment
      .duration(duration, 'seconds')
      .format('mm:ss', { trim: false });
  }
  return (
    <div className='mini-player'>
      <div className='arrow' onClick={toggleMiniPlayer}>
        <KeyboardArrowDownIcon />
        <span>{song.title}</span>
      </div>
      <div className='banner'>
        <img src={song.img_src} alt='' />
      </div>
      <div className='mini-player-controls'>
        <div className='song-info'>
          <span>{song.title}</span>
          <span>{song.artist}</span>
        </div>
        <div className='mini-player-timeline'>
          {currentTime ? (
            <StyledSlider
              value={currentTime}
              onChange={timeChange}
              max={duration}
            />
          ) : (
            <StyledSlider value={0} onChange={timeChange} max={duration} />
          )}
          <div className='mini-time-container'>
            <span className='mini-time'>{formatDuration(currentTime)}</span>
            <span className='mini-time'>{formatDuration(duration)}</span>
          </div>
        </div>
        <div className='mini-player-actions'>
          <div className='mini-liked'>
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
          <div className='mini-actions'>
            <SkipPreviousRoundedIcon
              className='mini-song-prev'
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
            <SkipNextRoundedIcon
              onClick={handleForward}
              className='mini-song-next'
            />
          </div>
          <div className='mini-download'>
            <FileDownloadIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addSongToLiked: (song) => dispatch(addSongToLiked(song)),
  removeSongFromLiked: (song) => dispatch(removeSongFromLiked(song)),
  toggleMiniPlayer: () => dispatch(toggleMiniPlayer()),
});

export default connect(null, mapDispatchToProps)(MiniPlayer);
