import React from 'react';
import { Marker} from "react-google-maps";
import { connect } from 'react-redux';
import { fetch, currentMarker} from '../actions';

class Markers extends React.Component {
    


    markerSettings() {
       
    }

    color(markerData) {
        if (this.props.selectedMarker !== null){
            console.log(this.props.selectedMarker);
            if (markerData.trackId === this.props.selectedMarker.trackId) {
                return 'red';
            }
            return 'white';
        }
    }

    render() {
        const svg = "M10,5A10,10,0,1,1,0,15,10,10,0,0,1,10,5Zm0,0A10,10,0,1,1,0,15,10,10,0,0,1,10,5Zm0,4a6,6,0,1,1-6,6A6,6,0,0,1,10,9Zm0,0a6,6,0,1,1-6,6A6,6,0,0,1,10,9ZM9.981,0.008l3,4h-6Z"
        return this.props.posts.map(marker => {
            return (
                <Marker
                key={marker.trackId}
                icon={{
                    path: svg,
                    scale: 1,
                    rotation: marker.kinematics.course,
                    opacity: .75,
                    strokeColor: this.color(marker),
                    fillColor: 'white'
                }}
                position={{ lat: marker.position.latitude, lng: marker.position.longitude }}
                >
                </Marker>
            )
        });
    }
}
const mapStateToProps = (state) => {
    return { 
      posts: state.posts,
      selectedMarker: state.currentMarker
    };
}
export default connect(mapStateToProps, { fetch, currentMarker })(Markers);