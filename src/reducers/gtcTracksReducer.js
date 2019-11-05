export default (state = [], action) => {
    if (action.type === 'FETCH') {
        return action.payload.items;
    }

    return state; 
};
