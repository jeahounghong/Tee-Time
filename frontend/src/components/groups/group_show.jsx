import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import '../../stylesheets/group_show.css';
import EventItemContainer from '../events/event_item_container'

class GroupShow extends React.Component {
    constructor(props){
        super(props)
    };

    render() {
        return (
            <div className="group-show-container">
                <div className="group-show-top">
                    <div className="group-show-top-left">
                        <div className="group-show-heading">
                            <h1 className="group-show-name">Sample Group Name</h1>
                            <h3 className="group-show-member-status">Member</h3>
                        </div>
                        <div className="group-show-description">
                            <p className="group-show-description-content">Group description will go here describing each group</p>
                        </div>
                    </div>
                    <div className="group-show-top-right">
                        <p className="group-show-location"><FontAwesomeIcon className="group-show-top-icon" icon={faLocationDot}></FontAwesomeIcon>Los Angeles, CA</p>
                        <p className="group-show-members"><FontAwesomeIcon className="group-show-top-icon" icon={faUserGroup}></FontAwesomeIcon>4 Members</p>
                        <p className="group-show-owner"><FontAwesomeIcon className="group-show-top-icon" icon={faUser}></FontAwesomeIcon>Owner Name</p>
                    </div>
                </div>
                <div id="group-show-line"></div>
                <div className="group-show-bottom">
                    <div className="group-show-events-header">
                        <h1>Upcoming Events</h1>
                    </div>
                    <div className="group-show-events-container">
                        {/* include function to show group events */}
                        <ul >
                            {Object.values(this.props.events).map((event, i) => (
                                <EventItemContainer event={event} key={event+i} courses={this.props.courses} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

export default GroupShow;