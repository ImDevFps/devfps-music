import { createSelector } from 'reselect';

const selectPlayer = (state) => state.player;

export const selectSongToPlay = createSelector(
  [selectPlayer],
  (playing) => playing.songList
);

export const selectForceIdx = createSelector(
  [selectPlayer],
  (force) => force.idx
)

export const selectPlayerHidden = createSelector(
  [selectPlayer],
  (player) => player.hidden
);

