import SSR from '../apis/ssr';

let apiAuth = 'Basic X2RlbW9fOl9kZW1vXzAw';
let endpoint = '/gtctracks';
let pageURL = '1';
let sizeURL = '2000';
let expandURL = 'detail';

const getCurrentTime = () => {
    let current = new Date();
    let date = current.getFullYear() + '-' + (current.getMonth()+1) + '-' + current.getDate();
    let time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();

    return date + "T" + time + "Z";

    // The Z here is for Zulu? All hail Zulu the keeper of time zones.
}

export const fetch = () => {
    
    return async dispatch => {
        const response = await SSR.get(endpoint, {
            headers: {
                Authorization: apiAuth
            },
            params: {
               page: pageURL,
               size: sizeURL,
               updateSince: getCurrentTime(),
               expand: expandURL
            }
        });
        dispatch({ type: 'FETCH', payload: response.data.items });
        console.log('alkjasdfl;kjasf');
        console.log(response.data);
    };
};