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
                .map((event, i) => {
                    return <div className="course-event"><EventItemContainer event={event} key={event+i} /></div>
                })}
            </div>
        )
    }
}

export default CourseEvents;