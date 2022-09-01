import EventItemContainer from '../events/event_item_container';
import '../../stylesheets/course_events.css';
import React from 'react';

class CourseEvents extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="course-events">
                {Object.values(this.props.events)
                .filter(event => event.courseId === this.props.course._id)
                .sort(function(e1, e2) {
                    return new Date(e1.eventTime).getTime() - new Date(e2.eventTime).getTime();
                })
                .map((event, i) => {
                    if (new Date(event.eventTime).getTime() - new Date().getTime() >= 0) {
                        return <div className="course-event" key={event+i}>
                            <EventItemContainer event={event} courses={this.props.courses} />
                            </div>
                    } 
                    // else {
                    //     this.props.deleteEvent(event._id);
                    // }
                })}
            </div>
        )
    }
}

export default CourseEvents;