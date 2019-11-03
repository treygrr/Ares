export default (state = [], action) => {
    if (action.type === 'FETCH') {
        return action.payload;
    }

    return state; 
};