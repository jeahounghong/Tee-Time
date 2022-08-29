import '../../stylesheets/event_item.css';
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
                            <div className="event-date">Aug 20, 6:00pm EST</div>
                            <div>Name</div>
                            <div>Description</div>
                            <div>Number of attendees</div>
                        </div>
                    </div>

                    <div className="event-item-right">
                        <div>Suggested</div>
                        <div>user action icons</div>
                    </div>
                </div>
                <div className="event-item-border"></div>
            </div>
        )
    }
}

export default EventItem;