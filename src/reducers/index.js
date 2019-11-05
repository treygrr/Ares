import { combineReducers } from 'redux';
import gtcTrackReducer from './gtcTracksReducer';
import currentMarker from './currentMarker';
export default combineReducers({
    posts: gtcTrackReducer,
    currentMarker
});