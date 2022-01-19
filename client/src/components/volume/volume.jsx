import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import { Slider } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import './volume.scss';

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
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
  &:hover .MuiSlider-track{
    color: #29c953
  }
  &:hover .MuiSlider-thumb{
    opacity: 1
  }

  & .MuiSlider-rail {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    opacity: 0.5;
    &:hover{
        opacity: 0.5;
        color: grey !important;
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

const Volume = ({ musicRef, volume, volumeChange }) => {
  return (
    <div className='sound'>
      {
        volume < 50 ? <VolumeDownRoundedIcon className='vol'/> : <VolumeUpRoundedIcon className='vol'/>
      }
      
      <Box sx={{ width: 300 }}>
        <StyledSlider value={musicRef ? volume : 100} onChange={volumeChange} />
      </Box>

      
    </div>
  );
};

export default Volume;
