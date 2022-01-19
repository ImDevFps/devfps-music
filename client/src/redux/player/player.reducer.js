
import { PlayerActionTypes } from './player.type';


const INITIAL_STATE = {
  songList: '',
  idx: '',
  hidden: true
}


const PlayerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case PlayerActionTypes.ADD_SONG:
        return {
          ...state,
          songList: action.payload
        };
      case PlayerActionTypes.CLEAR_SONG:
        return {
          songList: ''
        }
      case PlayerActionTypes.FORCE:
        return {
          ...state,
          idx: action.payload
        }
      case PlayerActionTypes.CLEAR_IDX:
        return {
          ...state,
          idx: '',
        }
      case PlayerActionTypes.TOGGLE_MINI_PLAYER:
        return {
          ...state,
          hidden: !state.hidden
        }
      default:
        return state;
    }
}

export default PlayerReducer;