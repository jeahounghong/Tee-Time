import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/modal.css';
import React from 'react';

class EditEventModal extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
        this.state = {
            id: this.props.event._id,
            name: this.props.event.name || '',
            ownerId: this.props.currentUser._id,
            courseId: this.props.event.courseId,
            groupId: this.props.event.groupId || '',
            eventTime: this.props.event.eventTime,
            eventSize: this.props.event.eventSize,
            description: this.props.event.description || '',
            users: this.props.event.users || [], 
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateEvent(this.state); 
        this.props.toggleModal();
    }

    handleDelete() {
        // debugger;
        let currentUser = this.props.users[this.props.currentUser.id];
        let idx = currentUser.events.joinedEvents.indexOf(this.props.event._id);
        let updatedUser = Object.assign({}, currentUser);
        delete updatedUser._id;
        updatedUser.id = currentUser._id;
        // debugger;
        let newJoinedEvents = updatedUser.events.joinedEvents.splice(0, idx).concat(updatedUser.events.joinedEvents.splice(idx));
        let newCreatedEvents = updatedUser.events.createdEvents.splice(0, idx).concat(updatedUser.events.createdEvents.splice(idx));
        updatedUser.events.joinedEvents = newJoinedEvents;
        updatedUser.events.createdEvents = newCreatedEvents;
        this.props.deleteEvent(this.props.event._id);
        this.props.updateUser(updatedUser);
    }

    renderModal() {
        return (
            <div id="modal">
                <div id="overlay" onClick={this.props.toggleModal}></div>
                <div className="modal">
                    <div className="modal-header">
                        <p className="modal-header-info">Edit Event</p>
                        <div className="modal-close" onClick={this.props.toggleModal} >
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="modal-form-separator"></div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="modal-input">
                            <label>Name</label>
                            <input type="text" value={this.state.name} onChange={this.update('name')} />
                        </div>
                        <div className="modal-input">
                            <label>Date</label>
                            <input type="date" value={this.state.eventTime.slice(0, 10)} onChange={this.update('eventTime')} />
                        </div>
                        {/* <div className="modal-input">
                            <label>Time</label>
                            <input type="time" value="13:30" onChange={this.update('eventTime')}></input>
                        </div> */}
                        <div className="modal-input">
                            <label>Size</label>
                            <input id="event-size" type="number" value={this.state.eventSize} onChange={this.update('eventSize')} 
                            placeholder="Enter a number between 1 and 4" min={2} max={4} />
                        </div>
                        <div className="modal-input">
                            <label>Course</label>
                            <select value={this.state.courseId} onChange={this.update('courseId')}>
                                {Object.values(this.props.courses).map((course, i) => (
                                    <option value={course.id} key={course+i}>{course.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="modal-input" id="create-event-modal-text-input">
                            <label>Description</label>
                            <textarea value={this.state.description} onChange={this.update('description')} className="create-event-modal-text"></textarea>
                        </div>
                        <div className="modal-submit">
                            <button onClick={() => this.handleDelete()}>Delete</button>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return this.renderModal();
    }
}

export default EditEventModal;