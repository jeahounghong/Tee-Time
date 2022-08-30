import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/modal.css';
import React from 'react';

class CreateEventModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ownerId: this.props.currentUser.id,
            courseId: "630d29898d64f824bb700abe",
            groupId: '',
            eventTime: '',
            eventSize: '',
            description: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.update = this.update.bind(this);
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
            <div id="modal">
                <div id="overlay" onClick={this.props.toggleModal}></div>
                <div className="modal">
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
                            <input type="text" value={this.state.name} onChange={this.update('name')} />
                        </div>
                        <div className="modal-input">
                            <label>Date</label>
                            <input type="date" value={this.state.eventTime} onChange={this.update('eventTime')} />
                        </div>
                        <div className="modal-input">
                            <label>Time</label>
                            <input type="time" value="13:30" onChange={this.update('eventTime')}></input>
                        </div>
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