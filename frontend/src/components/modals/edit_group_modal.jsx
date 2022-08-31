import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/group_modal.css';
import React from 'react';

class EditGroupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.group._id,
            name: this.props.group.name,
            ownerId: this.props.currentUser.id,
            users: [...this.props.group.users],
            events: this.props.group.events,
            description: this.props.group.description,
            location: this.props.group.location,
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
        this.handleDelete = this.handleDelete.bind(this);
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

    deleteGroupMember(e) {
        e.preventDefault();

        let item;
        let indexOfUser;
        let newState;

        for (let i = 0; i < this.props.allUsers.length; i++) {
            let user = this.props.allUsers[i];

            if (user._id === e.target.id) {
                item = e.target;
                indexOfUser = this.state.users.indexOf(user);
                newState = this.state.users.filter(item => item !== user )
            }
        }

        this.setState({users: newState})
    }

    populateGroupMembers() {
        return this.state.users.map((user) => {
            return (
                // onClick should remove the relevant user from this.state.users and it should remove the div itself
                <div onClick={this.deleteGroupMember} className='added-user' id={`${user._id}`}>{user.firstName} <FontAwesomeIcon className='added-user-icon' icon={faXmark}></FontAwesomeIcon></div>
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
    
        delete this.state.filteredData;
        delete this.state.allUsers;
        console.log(this.state)
        // need to use an event we pass down via props
        // close modal after submitting form 
        

        debugger;
        this.props.updateGroup(this.state);
        this.props.toggleModal();
    }

    handleDelete(e) {
        e.preventDefault();
    
        delete this.state.filteredData;
        delete this.state.allUsers;
        console.log(this.state)
        // need to use an event we pass down via props
        // close modal after submitting form 
        this.props.deleteGroup(this.state);
        this.props.toggleModal();
    }

    renderModal() {
        return (
            <div id="group-modal">
                <div id="group-overlay" onClick={this.props.toggleModal}></div>
                <div className="modal-group">
                    <div className="modal-header">
                        <p className="group-modal-header-info">Edit this Group</p>
                        <div className="modal-close" onClick={this.props.toggleModal} >
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="modal-form-separator"></div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="group-modal-input">
                            <label>Name</label>
                            <input type="text" value={this.state.name} onChange={this.update('name')} />
                        </div>
                        <div className="users-search-container">
                            <div className="group-modal-input">
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
                        <div className="group-modal-input">
                            <label>City</label>
                            <input type="text" onChange={this.updateLocation('city')}/>
                        </div>
                        <div className="group-modal-input">
                            <label>State</label>
                            <input type="text" onChange={this.updateLocation('state')}/>
                        </div>
                        <div className="group-modal-input" id="modal-text-input">
                            <label>Description</label>
                            <textarea className="modal-text" value={this.state.description} onChange={this.update('description')}></textarea>
                        </div>
                        <div className="edit-group-modal-button-container">
                            <input type="submit" className="group-modal-submit-edit" />
                            <button onClick={this.handleDelete} className='group-modal-submit-edit'>Delete</button>
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

export default EditGroupModal;