import { LikedActionTypes } from './liked.types';

var options = { month: 'long', year: 'numeric', day: 'numeric' };
var today = new Date();
const addDate = today.toLocaleDateString('en-US', options);

export const addSongToLiked = song => ({
    type: LikedActionTypes.ADD_SONG_TO_LIKED,
    payload: {song, added: addDate}
});

export const removeSongFromLiked = song => ({
    type: LikedActionTypes.REMOVE_SONG_FROM_LIKED,
    payload: {song, added: ''}
})