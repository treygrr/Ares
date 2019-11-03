import {combineReducers} from 'redux';
import gtcTrackReducer from './gtcTracksReducer';

export default combineReducers({
    posts: gtcTrackReducer
});