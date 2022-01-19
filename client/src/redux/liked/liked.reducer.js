import { LikedActionTypes } from './liked.types';
import { addSongToLiked, removeSongFromLiked } from './liked.utils';

const INITIAL_STATE = {
    likedSongs : []
}

const LikedSongsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LikedActionTypes.ADD_SONG_TO_LIKED:
            return {
                ...state,
                likedSongs: addSongToLiked(state.likedSongs, action.payload)
            }
        case LikedActionTypes.REMOVE_SONG_FROM_LIKED:
            return {
                ...state,
                likedSongs: removeSongFromLiked(state.likedSongs, action.payload)
            }    
        default:
            return state;
    }
}

export default LikedSongsReducer;