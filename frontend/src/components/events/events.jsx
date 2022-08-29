import NavbarContainer from '../navbar/navbar_container';
import React from 'react';

class Events extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="events-page">
                <NavbarContainer />
                <div id="events-container">
                    <ul>
                        {Object.values(this.props.events).map((event, i) => {
                            return <EventItem event={event} />
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Events;