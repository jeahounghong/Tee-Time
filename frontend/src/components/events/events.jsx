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
        this.renderEventsPage = this.renderEventsPage.bind(this);
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
        if (Object.values(prevProps.courses).length !== Object.values(this.props.courses).length) {
            this.setState({createEventModalHidden: this.state.createEventModalHidden});
        } else if (Object.values(prevProps.users).length !== Object.values(this.props.users).length) {
            this.setState({createEventModalHidden: this.state.createEventModalHidden});
        }
    }

    renderEventsPage() {
        return (
            <div className="event-page">
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
                        <ul id="event-items">
                            
                            {Object.values(this.props.events).sort(function(e1, e2) {
                                return new Date(e1.eventTime).getTime() - new Date(e2.eventTime).getTime();
                            }).map((event, i) => {
                                if (new Date(event.eventTime).getTime() - new Date().getTime() >= 0) {
                                    return <EventItemContainer event={event} key={event+i} courses={this.props.courses} />
                                } 
                                // else {
                                //     this.props.deleteEvent(event._id);
                                // }
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

    render() {
        debugger;
        return Object.values(this.props.users).length > 0 && this.renderEventsPage();
    }
}

export default Events;