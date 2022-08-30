import NavbarContainer from '../navbar/navbar_container';
import EventItemContainer from './event_item_container';
import '../../stylesheets/events.css';
import React from 'react';

class Events extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        document.querySelector('body').style.backgroundColor = '#f3f2ee';
    }
    render() {
        return (
            <div>
                <NavbarContainer />
                <div id="events-page">
                    <div id="events-container">
                        <p id="events-slogan">Upcoming Events</p>
                        {/* <ul>
                            {Object.values(this.props.events).map((event, i) => {
                                return <EventItem event={event} />
                            })}
                        </ul> */}
                        <ul>
                            <EventItemContainer />
                            <EventItemContainer />
                            <EventItemContainer />
                            <EventItemContainer />
                            <EventItemContainer />
                            <EventItemContainer />
                            <EventItemContainer />
                        </ul>

                    </div>

                    <div id="map">
                        MAP GOES HERE
                    </div>
                </div>
            </div>
        )
    }
}

export default Events;