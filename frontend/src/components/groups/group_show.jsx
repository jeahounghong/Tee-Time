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

        this.showGroupEvents = this.showGroupEvents.bind(this);
    };

    // need to create a method where we not only map through the user Events but match the groupId to the groupId on the show page
    showGroupEvents() {
        return this.props.events.map((event, i) => {
            if (event.groupId === this.props.group._id) {
                return (
                    <EventItemContainer event={event} key={event+i} courses={this.props.courses} />
                )
            }
        })
    }

    render() {
        if (this.props.group){
            return (
                <div className="group-show-container">
                    <div className="group-show-top">
                        <div className="group-show-top-left">
                            <div className="group-show-heading">
                                <h1 className="group-show-name">{this.props.group.name}</h1>
                                <h3 className="group-show-member-status">Member</h3>
                            </div>
                            <div className="group-show-description">
                                <p className="group-show-description-content">{this.props.group.description}</p>
                            </div>
                        </div>
                        <div className="group-show-top-right">
                            <p className="group-show-location"><FontAwesomeIcon className="group-show-top-icon" icon={faLocationDot}></FontAwesomeIcon>Los Angeles, CA</p>
                            <p className="group-show-members"><FontAwesomeIcon className="group-show-top-icon" icon={faUserGroup}></FontAwesomeIcon>{this.props.group.users.length} Members</p>
                            <p className="group-show-owner"><FontAwesomeIcon className="group-show-top-icon" icon={faUser}></FontAwesomeIcon>Owner: {this.props.currentUser.firstName} {this.props.currentUser.lastName}</p>
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
                                {/* (this.showGroupEvents()) */}
                                {Object.values(this.props.events).map((event, i) => (
                                    <EventItemContainer event={event} key={event+i} courses={this.props.courses} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
};

export default GroupShow;