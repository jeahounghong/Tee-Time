import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import { useMemo } from 'react';
import '../../stylesheets/map.css';
import '../../stylesheets/course.css';
import React from 'react';
import keys from '../../private/keys';
import CourseEventsContainer from '../courses/course_events_container';

export default function Map(props) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: keys.googleMapsApiKey,
    });
    if (!isLoaded) return <div>Loading...</div>

    // debugger;
    return <Map />;
    

    function Map() {
        const center = useMemo(() => ({ lat: 40.7493, lng: -73.6407 }), []);
        const [markers, setMarkers] = React.useState([
            {lat: 40.7831, lng: -73.9712}, {lat: 41, lng: -75}, {lat: 42, lng: -74.5}
        ]);
        const [selected, setSelected] = React.useState(null);
        const [showEvents, toggleShowEvents] = React.useState(false);
        return (
            <GoogleMap zoom={11} 
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
                            <img className="course-image" src={selected.imageUrl} alt="course-photo"/>
                        </div>
                        <p className="course-name">{selected.name}</p>
                        <p>Golf course in Roslyn Heights, New York</p>
                        <p className="events-link" onClick={toggleShowEvents}>Events happening here...</p>
                        {showEvents ? <CourseEventsContainer course={selected} /> : ""}
                    </div>
                </InfoWindow> : null}
            </GoogleMap>
        )
    }
}