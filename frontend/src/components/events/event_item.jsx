import '../../stylesheets/event_item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class EventItem extends React.Component {
    constructor(props) {
        super(props);
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
                            <div className="event-date">{this.props.event.eventTime}</div>
                            <div className="event-name">{this.props.event.name}</div>
                            <div className="event-description">{this.props.event.description ? this.props.event.description : ""}</div>
                            <div className="attendee-count">Number of attendees</div>
                        </div>
                    </div>

                    <div className="event-item-right">
                        <div className="suggested-event">Suggested</div>
                        <div className="user-actions">
                            <div className="event-action">
                                <p>Attend event</p>
                                <FontAwesomeIcon icon={faPersonWalkingArrowRight}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="event-item-border-container">
                    <div className="event-item-border"></div>
                </div>
            </div>
        )
    }
}

export default EventItem;