import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
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
        const center = useMemo(() => ({ lat: 44, lng: -80.1 }), []);
        const [markers, setMarkers] = React.useState([]);
        const [selected, setSelected] = React.useState(null);
        return (
            <GoogleMap zoom={10} 
                center={center} 
                onClick={event => console.log(event)}
                mapContainerClassName="map-container">
                <Marker position={{lat: 44.3, lng:-80.1}} />
                {markers.map((marker) => (
                    <Marker key={Math.random() * 1000000000} 
                    position={{lat: marker.lat, lng: marker.lng}}
                    icon={{}} onClick={() => {setSelected(marker)}}/>
                ))}

                {/* {selected ? <InfoWindow>
                    <div></div>
                </InfoWindow> : null} */}
            </GoogleMap>
        )
    }
}