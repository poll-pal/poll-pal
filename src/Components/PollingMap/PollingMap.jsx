/*
 *  Built with Google Maps from Google Map React - https://github.com/fullstackreact/google-maps-react#readme
 */


import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Listing} from 'google-maps-react';
import axios from 'axios';
require('dotenv').config();

export class PollingMap extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        pollingPlaces: [],
        someValue: '' 
      };
      const style = {
        width: '100%',
        height: '100%'
      }
    }
    fetchPlaces(mapProps, map) {
      const {google} = mapProps;
      const service = new google.maps.places.PlacesService(map);
      axios.get('/api/pollingPlaces/?address=7135+W+32nd+Ave+Wheat+Ridge,+CO')
        .then(response =>{
            console.log(response.data);
            this.setState({
                pollingPlaces: response.data
            });
        });
   }

   getPlaces(){
       return <Listing places={this.state.places} />;
   }

    render() {
        return (
        <Map google={this.props.google} 
             onReady={this.fetchPlaces}
             style={this.style}
             visible={true}
             zoom={14}>
            {this.getPlaces}
            {/* <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow> */}
        </Map>
        );
    }

  
}

export default GoogleApiWrapper({
    apiKey: (process.env.GOOGLE_API_KEY)
})(PollingMap);
