import MUSIC_DATA from './music.data';

const INITIAL_STATE = {
  songs: MUSIC_DATA,
};

const musicReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default musicReducer;
