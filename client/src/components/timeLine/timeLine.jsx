import { Slider, styled } from '@mui/material';
import moment from 'moment';
import 'moment-duration-format';
import React from 'react';
import './timeLine.scss';

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
    color: #29c953
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
    &:hover{
        color: grey !important;
        opacity: 0.75;
    }
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

const TimeLine = ({ currentTime, timeChange, duration }) => {
  function formatDuration(duration) {
    return moment
      .duration(duration, 'seconds')
      .format('mm:ss', { trim: false });
  }

  return (
    <div>
      <div className='timeline'>
        <span className='time'>{formatDuration(currentTime)}</span>
        {currentTime ? (
          <StyledSlider
            value={currentTime}
            onChange={timeChange}
            max={duration}
          />
        ) : (
          <StyledSlider value={0} onChange={timeChange} max={duration} />
        )}

        <span className='time'>{formatDuration(duration)}</span>
      </div>
    </div>
  );
};

export default TimeLine;
