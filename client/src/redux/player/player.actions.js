import { PlayerActionTypes } from './player.type';

export const addSong = song => ({
    type: PlayerActionTypes.ADD_SONG,
    payload: song
});

export const clearSong = () => ({
  type: PlayerActionTypes.CLEAR_SONG,
});

export const forcePlay = idx => ({
  type: PlayerActionTypes.FORCE,
  payload: idx
})

export const clearIdx = () => ({
  type: PlayerActionTypes.CLEAR_IDX
})

export const toggleMiniPlayer = () => ({
   type: PlayerActionTypes.TOGGLE_MINI_PLAYER
})

