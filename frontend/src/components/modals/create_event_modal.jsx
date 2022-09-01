import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/modal.css';
import '../../stylesheets/create_event_modal.css';
import React from 'react';

class CreateEventModal extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            ownerId: this.props.currentUser.id,
            courseId: "630d29898d64f824bb700abe",
            groupId: this.props.groupId,
            eventTime: new Date().toString(),
            eventSize: '',
            description: '',
            users: [this.props.currentUser],
        };

        this.getDateFormat = this.getDateFormat.bind(this);
        this.getTimeFormat = this.getTimeFormat.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.update = this.update.bind(this);
    }

    getDateFormat() {
        let date = new Date(this.state.eventTime);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();

        if (month < 10) month = `0${month}`;
        if (day < 10) day = `0${day}`;
        return `${year}-${month}-${day}`
    }

    getTimeFormat() {
        let date = new Date(this.state.eventTime);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (hours < 10) hours = `0${hours}`;
        if (minutes < 10) minutes = `0${minutes}`;
        return `${hours}:${minutes}`;
    }

    handleDate() {
        let date = new Date(this.state.eventTime);
        return e => {
            let dateInput = e.target.value.split('-');
            date.setFullYear(parseInt(dateInput[0]));
            date.setMonth(parseInt(dateInput[1])-1);
            date.setDate(parseInt(dateInput[2]));
            this.setState({eventTime: date.toString()});
        }
    }

    handleTime() {
        let date = new Date(this.state.eventTime);
        return e => {
            let timeInput = e.target.value.split(":");
            date.setHours(parseInt(timeInput[0]), parseInt(timeInput[1]));
            this.setState({eventTime: date.toString()});
        }
    }

    update(field) {
        return e => this.setState({[field]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createEvent(this.state);
        this.props.toggleModal();
    }

    renderModal() {
        return (
            <div id="create-event-modal-container">
                <div id="create-event-modal-overlay" onClick={this.props.toggleModal}></div>
                <div className="modal" id="create-event-modal">
                    <div className="modal-header">
                        <p className="modal-header-info">Create Event</p>
                        <div className="modal-close" onClick={this.props.toggleModal} >
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="modal-form-separator"></div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="modal-input">
                            <label>Name</label>
                            <input type="text" value={this.state.name} onChange={this.update('name')} required/>
                        </div>
                        <div className="modal-input">
                            <label>Date</label>
                            <input type="date" value={this.getDateFormat()} onChange={this.handleDate()} required />
                        </div>
                        <div className="modal-input">
                            <label>Time</label>
                            <input type="time" value={this.getTimeFormat()} onChange={this.handleTime()}></input>
                        </div>
                        <div className="modal-input">
                            <label>Size</label>
                            <input id="event-size" type="number" value={this.state.eventSize} onChange={this.update('eventSize')} 
                            placeholder="Enter a number between 1 and 4" min={2} max={4} required />
                        </div>
                        <div className="modal-input">
                            <label>Course</label>
                            <select value={this.state.courseId} onChange={this.update('courseId')} >
                                {Object.values(this.props.courses).map((course, i) => {
                                    return <option value={course._id} key={course+i}>{course.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="modal-input" id="create-event-modal-text-input">
                            <label>Description</label>
                            <textarea value={this.state.description} onChange={this.update('description')} className="create-event-modal-text"></textarea>
                        </div>
                        <div className="modal-submit">
                            <button type="submit">Create</button>
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

export default CreateEventModal;