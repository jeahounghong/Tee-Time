import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/modal.css';
import React from 'react';

class CreateGroupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ownerId: '',
            users: [],
            events: [],
            description: '',
            location: {city: '', state: ''},
            filteredData: [],
            allUsers: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.update = this.update.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
        this.updateUsers = this.updateUsers.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.populateGroupMembers = this.populateGroupMembers.bind(this);
        this.deleteGroupMember = this.deleteGroupMember.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.target.value});
    }

    updateLocation(field) {
        return e => this.setState({ location: { ...this.state.location, [field]: e.target.value}});
    }

    // need an updateUsers function
    updateUsers(user) {
        // somehow push into users
        return () => {
            this.setState({users: this.state.users.concat([user])});
            this.setState({filteredData: []});
        }
    }

    deleteGroupMember() {
        for (let i = 0; i < this.state.users.length; i++) {
            let user = this.state.users[i];
        }
    }

    populateGroupMembers() {
        return this.state.users.map((user) => {
            return (
                // onClick should remove the relevant user from this.state.users and it should remove the div itself
                <div onClick={this.deleteGroupMember()} className='added-user' id={`${user._id}`}>{user.firstName} <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></div>
            )
        })
    }

    // displaying data when user searches
    handleFilter(e) {
        const searchWord = e.target.value;

        const newFilter = this.props.allUsers.filter((user) => {
            return user.firstName.toLowerCase().includes(searchWord)
        });

        if (searchWord === "") {
            this.setState({filteredData: []})
        } else {
            this.setState({filteredData: newFilter})
        }
    }
    // create componentDidMount to fetch all users in our database
    componentDidMount() {
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.allUsers.length === 0) {
            this.setState({allUsers: this.state.allUsers })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // create event here with this.state 
        this.setState({
            name: '',
            ownerId: '',
            users: [],
            events: [],
            description: '',
            location: {city: '', state: ''}
        })
        // need to use an event we pass down via props
        // close modal after submitting form 
        this.props.toggleModal();
    }

    renderModal() {
        return (
            <div id="modal">
                <div id="overlay" onClick={this.props.toggleModal}></div>
                <div className="modal-group">
                    <div className="modal-header">
                        <p className="modal-header-info">Create Group</p>
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
                        <div className="users-search-container">
                            <div className="modal-input">
                                <label>Members</label>
                                {/* change this to this.updateUsers */}
                                <input type="text" onChange={this.handleFilter}/>
                                {/* render div of users here */}
                            </div>
                            <div className="search-results-container">
                                <div className="selected-users">
                                    <h1>Added Users</h1>
                                    <div className="added-users-container">
                                        {this.populateGroupMembers()}
                                    </div>
                                </div>
                                { this.state.filteredData.length != 0 && (
                                    <div className="users-search-results">
                                        {this.state.filteredData.slice(0,10).map((user => {
                                            return <p onClick={this.updateUsers(user)} className="users-item">{user.firstName}</p>
                                        }))}
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="modal-input">
                            <label>City</label>
                            <input type="text" onChange={this.updateLocation('city')}/>
                        </div>
                        <div className="modal-input">
                            <label>State</label>
                            <input type="text" onChange={this.updateLocation('state')}/>
                        </div>
                        <div className="modal-input" id="modal-text-input">
                            <label>Description</label>
                            <textarea className="modal-text" value={this.state.description} onChange={this.update('description')}></textarea>
                        </div>
                        <input type="submit" className="group-modal-submit" />
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return this.renderModal();
    }
}

export default CreateGroupModal;