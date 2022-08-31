import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import { useMemo } from 'react';
import '../../stylesheets/map.css';
import '../../stylesheets/course.css';
import React from 'react';
import keys from '../../private/keys';

export default function Map(props) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: keys.googleMapsApiKey,
    });
    if (!isLoaded) return <div>Loading...</div>

    // debugger;
    return <Map />;
    

    function Map() {
        const center = useMemo(() => ({ lat: 40.7626, lng: -73.5975 }), []);
        const [markers, setMarkers] = React.useState([
            {lat: 40.7831, lng: -73.9712}, {lat: 41, lng: -75}, {lat: 42, lng: -74.5}
        ]);
        const [selected, setSelected] = React.useState(null);
        return (
            <GoogleMap zoom={12} 
                center={center} 
                mapContainerClassName="map-container">
                {Object.values(props.courses).map((course) => {
                    // debugger;
                    return <Marker key={Math.random() * 1000000000} 
                    position={{lat: course.location.lat, lng: course.location.long}}
                    onClick={() => {setSelected(course)}}/>
                })}

                {selected ? <InfoWindow position={{lat: selected.location.lat, lng: selected.location.long}} onCloseClick={() => setSelected(null)}>
                    <div className="course-info">
                        <div className="course-photo">
                            {/* add course image after aws is set up */}
                            <img src="" alt="course-photo"/>
                        </div>
                        <p className="course-name">{selected.name}</p>
                        <p>Golf course in Roslyn Heights, New York</p>
                        <p className="events-link">Events happening here...</p>
                    </div>
                </InfoWindow> : null}
            </GoogleMap>
        )
    }
}