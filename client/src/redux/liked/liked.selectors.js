import { createSelector } from 'reselect';

const selectLiked = state => state.likedSongsList;

export const selectLikedSongs = createSelector(
    [selectLiked],
    songs => songs.likedSongs
)
