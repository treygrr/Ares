import SSR from '../apis/ssr';
import time from '../apis/Time'
let apiAuth = 'Basic X2RlbW9fOl9kZW1vXzAw';
let endpoint = '/gtctracks';
let pageURL = '1';
let sizeURL = '2000';
let expandURL = 'detail';


export const fetch = () => {
    return async dispatch => {
        const response = await SSR.get(endpoint, {
            headers: {
                Authorization: apiAuth
            },
            params: {
               page: pageURL,
               size: sizeURL,
               updateSince: time(),
               expand: expandURL
            }
        });
        dispatch({ type: 'FETCH', payload: response.data });
    };
};

export const currentMarker = (data) => {
    return { type: 'SELECT_MARKER', payload: data };
}

export const getTime = () => {
    return { 
        type: 'GET_LAST_CHECKED_TIME'
     };
}

export const setTime = (time) => {
    return { 
        type: 'SET_TIME', payload: time
     };
}