import { createSelector } from 'reselect';

const selectSongs = (state) => state.musics;

export const selectMusic = createSelector(
  [selectSongs],
  (musics) => musics.songs
);

export const selectTracks = (tracksUrlParam) =>
  createSelector([selectMusic],
    (tracks) =>
    tracks ? tracks[tracksUrlParam] : null
  );

export const selectMusicForPreview = createSelector(
  [selectMusic],
  (songs) =>
    songs ? Object.keys(songs).map((key) => songs[key]) : []
);
