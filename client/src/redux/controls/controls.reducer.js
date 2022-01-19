
import { ControlsActionTypes } from './controls.types';
const INITIAL_STATE = {
    isPlaying: false
}

const controlReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ControlsActionTypes.IS_PLAYING:
            return {
                isPlaying: !state.isPlaying
            }
    
        default:
            return state;
    }
};

export default controlReducer;