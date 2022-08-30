import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import { useMemo } from 'react';
import '../../stylesheets/map.css';
import React from 'react';
import keys from '../../private/keys';

export default function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: keys.googleMapsApiKey,
    });
    if (!isLoaded) return <div>Loading...</div>
    return <Map />;

    function Map() {
        const center = useMemo(() => ({ lat: 40.7831, lng: -73.9712 }), []);
        const [markers, setMarkers] = React.useState([
            {lat: 40.7831, lng: -73.9712}, {lat: 41, lng: -75}, {lat: 42, lng: -74.5}
        ]);
        const [selected, setSelected] = React.useState(null);
        
        return (
            <GoogleMap zoom={12} 
                center={center} 
                mapContainerClassName="map-container">
                {markers.map((marker) => {
                    return <Marker key={Math.random() * 1000000000} 
                    position={{lat: marker.lat, lng: marker.lng}}
                    onClick={() => {setSelected(marker)}}/>
                })}

                {selected ? <InfoWindow position={{lat: selected.lat, lng: selected.lng}} onCloseClick={() => setSelected(null)}>
                    <div className="course-info">
                        COURSE INFO GOES HERE
                    </div>
                </InfoWindow> : null}
            </GoogleMap>
        )
    }
}