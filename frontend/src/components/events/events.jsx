import NavbarContainer from '../navbar/navbar_container';
import EventItemContainer from './event_item_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CreateEventModalContainer from '../modals/create_event_modal_container';
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
        this.props.fetchUsers();
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
                        <ul>
                            
                            {Object.values(this.props.events).sort(function(e1, e2) {
                                return e1.eventTime - e2.eventTime;
                            }).map((event, i) => {
                                return <EventItemContainer event={event} key={event+i} courses={this.props.courses} />
                            })}
                        </ul>
                    </div>

                    <div id="map">
                        <MapContainer courses={this.props.courses} />
                    </div>
                </div>
                {this.state.createEventModalHidden ? "" : 
                <CreateEventModalContainer toggleModal={() => this.toggleCreateEventModal()} 
                action={this.state.createEventModalHidden} courses={this.props.courses} /> }
            </div>
        )
    }
}

export default Events;