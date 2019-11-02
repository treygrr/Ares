import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function MapSet() {
    return(
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
        />
    )
};

const WrappedMap = withScriptjs(withGoogleMap(MapSet));

class Maps extends React.Component {

    render() {
        return(
            <div style= {{ width: "100%", height: "100vh" }}>
                <WrappedMap 
                    googleMapURL= {`https://maps.googleapis.com/maps/api/js?key=AIzaSyCbq5Ppo2m86ozXkXCgHlLeZot9S8yxO44&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: "100%" }}/>}
                    containerElement={<div style={{ height: "100%" }}/>}
                    mapElement={<div style={{ height: "100%" }}/>}
                />
            </div>
        )
    }
};

export default Maps;