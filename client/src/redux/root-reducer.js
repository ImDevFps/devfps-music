import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import LikedSongsReducer from './liked/liked.reducer';
import musicReducer from './music/music.reducer';
import PlayerReducer from './player/player.reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['musics'],
  whitelist: ['player', 'likedSongsList'],
};

const rootReducer = combineReducers({
  musics: musicReducer,
  player: PlayerReducer,
  likedSongsList: LikedSongsReducer,
});

export default persistReducer(persistConfig, rootReducer);
