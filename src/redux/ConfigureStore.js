import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const middleware = applyMiddleware(logger);

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionReducer,
  },
}, middleware);

export default store;
