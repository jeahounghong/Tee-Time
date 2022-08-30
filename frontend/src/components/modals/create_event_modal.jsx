import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/modal.css';
import React from 'react';

class CreateEventModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ownerId: '',
            courseId: '',
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
        // create event here with this.state 

        // close modal after submitting form 
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
                            <label>Event Date</label>
                            <input type="date" value={this.state.eventTime} onChange={this.update('eventTime')} />
                        </div>
                        <div className="modal-input">
                            <label>Event Size</label>
                            <input type="text" value={this.state.eventSize} onChange={this.update('eventSize')} />
                        </div>
                        <div className="modal-input" id="modal-text-input">
                            <label>Description</label>
                            <textarea className="modal-text"></textarea>
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