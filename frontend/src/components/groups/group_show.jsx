import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import '../../stylesheets/group_show.css';
import EventItemContainer from '../events/event_item_container';
import CreateEventModalContainer from '../modals/create_event_modal_container';
import timespan from "jsonwebtoken/lib/timespan";

class GroupShow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            createEventModalHidden: true
        }

        this.showGroupEvents = this.showGroupEvents.bind(this);
        this.toggleCreateEventModal = this.toggleCreateEventModal.bind(this);
    };

    componentDidMount() {
        this.props.fetchGroupEvents();
    }

    toggleCreateEventModal() {
        this.setState({createEventModalHidden: !this.state.createEventModalHidden})
    }

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
                            {this.props.group.location ? 
                                <p className="group-show-location"><FontAwesomeIcon className="group-show-top-icon" icon={faLocationDot}></FontAwesomeIcon>{this.props.group.location.city}, {this.props.group.location.state}</p>
                            : ""}
                            
                            <p className="group-show-members"><FontAwesomeIcon className="group-show-top-icon" icon={faUserGroup}></FontAwesomeIcon>{this.props.group.users.length} Members</p>
                            <p className="group-show-owner"><FontAwesomeIcon className="group-show-top-icon" icon={faUser}></FontAwesomeIcon>Owner: {this.props.currentUser.firstName} {this.props.currentUser.lastName}</p>
                        </div>
                    </div>
                    <div id="group-show-line"></div>
                    <div className="group-show-bottom">
                        <div className="group-show-events-header">
                            <button onClick={this.toggleCreateEventModal} className="add-group-event"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                            <h1>Upcoming Events</h1>
                        </div>
                        <div className="group-show-events-container">
                            {/* include function to show group events */}
                            <ul className="group-events">
                                {/* (this.showGroupEvents()) */}
                                {Object.values(this.props.events).map((event, i) => (
                                    event.groupId === this.props.group._id ? 
                                    <EventItemContainer event={event} key={event+i} courses={this.props.courses}/> : ""
                                ))}
                            </ul>
                        </div>
                    </div>
                    {this.state.createEventModalHidden ? "" : 
                    <CreateEventModalContainer groupId={this.props.group._id} toggleModal={() => this.toggleCreateEventModal()} action={this.state.createEventModalHidden} courses={this.props.courses} /> }
                </div>
            )
        }
    }
};

export default GroupShow;