import React, { Component } from "react"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

import { connect } from 'react-redux';
import { fetch, currentMarker } from '../actions';
import { compose } from "recompose";

import MarkerCollection from './MarkerCollection'



class Maps extends Component {
  getCords(data) {
    if (data !== null) {
      return { lat: data.position.latitude, lng: data.position.longitude };
    }
    
    console.log(data);
    return { lat: 33.5, lng: -118.417931 };
  }

  render() {
   

    const Map = compose(withScriptjs, withGoogleMap)(val => {
      return (
        <GoogleMap
          defaultZoom={13}
          center={this.getCords(this.props.selectedMarker)}
        >
          <MarkerCollection data={this.props.posts}></MarkerCollection>
        </GoogleMap>
      )
    });
    return (
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}

const mapStateToProps = (state) => {
    return { 
        posts: state.posts,
        selectedMarker: state.currentMarker
    };
}

export default connect(mapStateToProps, { fetch, currentMarker })(Maps);