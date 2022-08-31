import '../../stylesheets/event_item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import EditEventModalContainer from '../modals/edit_event_modal_container';
import React from 'react';

class EventItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editing: false};
        this.attendEvent = this.attendEvent.bind(this);
        this.getDate = this.getDate.bind(this);
    }

    attendEvent() {
        if (Object.values(this.props.event.users.length) < this.props.event.eventSize &&
        this.props.event.users.indexOf(this.props.currentUser) === -1) {
            this.props.users[this.props.currentUser.id].events.joinedEvents.push(this.props.event);
            this.props.event.users.push(this.props.currentUser);
        } else {
            let idx = this.props.event.users.indexOf(this.props.currentUser);
            this.props.event.users = this.props.event.users.splice(0, idx).concat(this.props.event.users.splice(idx));
        }
        // force rerender here with setState
        this.setState({editing: this.state.editing})
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
                        {/* <div className="event-img">
                            <img src="" alt="event-img" />
                        </div> */}
                        <div className="event-item-info-container">
                            <div className="event-item-info">
                                <div className="event-name">{this.props.event.name ? this.props.event.name : "Event Name"}</div>
                                <div className="event-date">{this.getDate()}</div>
                                <div className="event-description">{this.props.event.description ? this.props.event.description : "Event Description"}</div>
                            </div>
                            <div className="event-members">
                                {this.props.event.users.map((member, i) => {
                                    // debugger;
                                    return <div className={`member-${i+1}`} key={member+i}>
                                        {this.props.users[member] ? this.props.users[member].firstName.slice(0,1) : ""}
                                    </div>
                                })}
                                <div className="member-count">{this.props.event.users.length} attendees</div>
                                {/* <div className="event-item-btn">
                                    <FontAwesomeIcon icon={faCircleArrowRight}></FontAwesomeIcon>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    
                    <div className="event-item-right">
                        <div className="suggested-event">Suggested</div>
                        <div className="user-actions">
                            <div className="event-action" onClick={this.attendEvent} >
                                {this.props.event.users.indexOf(this.props.currentUser) > -1 ?
                                <div className="leave-event">
                                    <p className="leave-event-p">Leave event</p>
                                    <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
                                </div>
                                : 
                                <div className="attend-event">
                                    <p className="attend-event-p">Attend event</p>
                                    <FontAwesomeIcon icon={faPersonWalkingArrowRight}></FontAwesomeIcon>
                                </div>
                                }
                            </div>
                            <div onClick={() => this.setState({editing: !this.state.editing})} className="event-actions-toggle">
                                <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="event-item-border-container">
                    <div className="event-item-border"></div>
                </div> */}
                <div id="edit-event-modal">
                    {this.state.editing ? <EditEventModalContainer className="edit-event-modal" 
                    currentUser={this.props.currentUser} event={this.props.event} 
                    toggleModal={() => this.setState({editing: !this.state.editing})}
                    courses={this.props.courses} />: ""}
                </div>
            </div>
        )
    }
}

export default EventItem;