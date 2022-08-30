import '../../stylesheets/event_item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';
import EditEventModalContainer from '../modals/edit_event_modal_container';
import React from 'react';

class EventItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
        this.attendEvent = this.attendEvent.bind(this);
        this.getDate = this.getDate.bind(this);
    }

    attendEvent() {
        if (Object.values(this.props.event.users.length) < this.props.event.eventSize) {
            this.props.currentUser.events.joinedEvents.push(this.props.event);
            this.props.event.users.push(this.props.currentUser);
        }
        console.log("attending event");
    }

    getDate() {
        let date = new Date(this.props.event.eventTime);
        const months = [
            'January','February','March','April','May',
            'June','July','August','September','October',
            'November','December'
        ];

        let month = date.getMonth();
        let day = date.getDay();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (hours === 0) hours = '00';
        if (minutes === 0) minutes = '00';
        let timeSuffix = "AM";
        if (hours >= 12) timeSuffix = "PM"; 
        return `${months[month]} ${day}, ${hours}:${minutes}${timeSuffix}`;
    }

    render() {
        return (
            <div>
                <div className="event-item-container">
                    <div className="event-item-left">
                        <div className="event-img">
                            <img src="" alt="event-img" />
                        </div>
                        <div className="event-item-info">
                            <div className="event-date">{this.getDate()}</div>
                            <div className="event-name">{this.props.event.name ? this.props.event.name : "Event Name"}</div>
                            <div className="event-description">{this.props.event.description ? this.props.event.description : "Event Description"}</div>
                            <div className="attendee-count">{`${this.props.event.users.length} attendees`}</div>
                        </div>
                    </div>

                    <div className="event-item-right">
                        <div className="suggested-event">Suggested</div>
                        <div className="user-actions">
                            <div className="event-action" onClick={this.attendEvent} >
                                <p>Attend event</p>
                                <FontAwesomeIcon icon={faPersonWalkingArrowRight}></FontAwesomeIcon>
                            </div>
                            <div onClick={() => this.setState({editing: !this.state.editing})} className="event-actions-toggle">
                                edit/delete
                            </div>
                        </div>
                    </div>
                </div>
                <div className="event-item-border-container">
                    <div className="event-item-border"></div>
                </div>
                {this.state.editing ? <EditEventModalContainer className="edit-event-modal" currentUser={this.props.currentUser} event={this.props.event} courses={this.props.courses} /> : ""}
            </div>
        )
    }
}

export default EventItem;