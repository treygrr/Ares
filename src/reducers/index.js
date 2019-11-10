import { combineReducers } from 'redux';
import gtcTrackReducer from './gtcTracksReducer';
import currentMarker from './currentMarker';
import getTime from './getTime';
import setTime from './getTime';
export default combineReducers({
    posts: gtcTrackReducer,
    currentMarker,
    getTime,
    setTime
});