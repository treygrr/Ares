import timeFunc from '../apis/Time'
export default (time = '', action) => {
    if (action.type === 'GET_LAST_CHECKED_TIME') {
        time = action.payload
        return time;
    }
    if (action.type === 'SET_TIME') {
        time = timeFunc();
        return time;
    }
    return time; 
};
