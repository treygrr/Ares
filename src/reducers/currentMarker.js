export default (selectedMarker = null, action) => {
    if (action.type === 'SELECT_MARKER') {
        selectedMarker = action.payload
        return selectedMarker;
    }
    return selectedMarker; 
};
