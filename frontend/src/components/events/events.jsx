import NavbarContainer from '../navbar/navbar_container';
import EventItemContainer from './event_item_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CreateEventModal from '../modals/create_event_modal';
import '../../stylesheets/events.css';
import MapContainer from '../map/map_container';
import React from 'react';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createEventModalHidden: true,
        }
        this.toggleCreateEventModal = this.toggleCreateEventModal.bind(this);
    }

    toggleCreateEventModal() {
        this.setState({createEventModalHidden: !this.state.createEventModalHidden});
    }
    
    componentDidMount() {
        document.querySelector('body').style.backgroundColor = '#f3f2ee';
        this.props.fetchEvents();
        this.props.fetchCourses();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.courses !== this.props.courses) {
            this.setState({createEventModalHidden: this.state.createEventModalHidden});
        }
    }

    render() {
        return (
            <div>
                <NavbarContainer />
                <div id="events-page">
                    <div id="events-container">
                        <div id="events-header">
                            <p id="events-slogan">Upcoming Events</p>
                            <div id="create-event-btn" onClick={this.toggleCreateEventModal}>
                                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                <p>Create Event</p>
                            </div>
                        </div>
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
                        <MapContainer courses={this.props.courses} />
                    </div>
                </div>
                {this.state.createEventModalHidden ? "" : 
                <CreateEventModal toggleModal={() => this.toggleCreateEventModal()} action={this.state.createEventModalHidden} /> }
            </div>
        )
    }
}

export default Events;