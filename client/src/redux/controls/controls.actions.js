import { ControlsActionTypes } from './controls.types';

export const playMusic = () => ({
    type: ControlsActionTypes.IS_PLAYING
});

export const SkipSong = () => ({
    type:ControlsActionTypes.SKIP_SONG
})
