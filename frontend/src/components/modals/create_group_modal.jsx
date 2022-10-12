import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/group_modal.css';
import React from 'react';

class CreateGroupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ownerId: this.props.currentUser.id,
            users: [this.props.currentUser.id],
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
            // debugger;
            this.setState({users: this.state.users.concat([user._id])});
            this.setState({filteredData: []});
        }
    }

    deleteGroupMember(e) {
        e.preventDefault();
        // debugger;
        let item;
        let indexOfUser;
        let newState = this.state.users;
        if (e.currentTarget.id !== this.props.currentUser.id){
            newState = [];
            for (let i = 0; i < this.props.allUsers.length; i++) {
                let user = this.props.allUsers[i];
                if (user._id === e.currentTarget.id) {
                    debugger;
                    item = e.target;
                    indexOfUser = this.state.users.indexOf(user);
                    newState = this.state.users.filter(item => item !== user._id )
                }
            }
        }
        // debugger;
        this.setState({users: newState})
    }

    populateGroupMembers() {
        if (!this.state.users && !this.state.users[0].firstName) {
            return (
                <div onClick={this.deleteGroupMember} className='added-user' id={`${this.props.currentUser.id}`}>{this.props.currentUser.firstName} <FontAwesomeIcon className='added-user-icon' icon={faXmark}></FontAwesomeIcon></div>
            )
        }  else {
            const users = this.props.usersObjects
            return this.state.users.map((user) => {
                return (
                    // onClick should remove the relevant user from this.state.users and it should remove the div itself
                    <div onClick={this.deleteGroupMember} className='added-user' id={`${user}`}>{users[user].firstName} {users[user].lastName}<FontAwesomeIcon className='added-user-icon' icon={faXmark}></FontAwesomeIcon></div>
                )
            })
        }
    }

    // displaying data when user searches
    handleFilter(e) {
        const searchWord = e.target.value;

        const newFilter = this.props.allUsers.filter((user) => {
            return user.firstName.toLowerCase().includes(searchWord.toLowerCase()) || user.firstName.toUpperCase().includes(searchWord.toUpperCase())
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
        this.props.createGroup(this.state);
        setTimeout(() => {
            // debugger;
            if (Object.values(this.props.groupErrors).length === 0){
                this.props.toggleModal();
            }
        }, 500)
        // this.props.toggleModal();
    }

    renderModal() {
        return (
            <div id="group-modal">
                <div id="group-overlay" onClick={() => {this.props.toggleModal(); this.props.clearErrors();}}></div>
                <div className="modal-group">
                    <div className="modal-header">
                        <p className="group-modal-header-info">Create a Group</p>
                        <div className="modal-close" onClick={() => {this.props.toggleModal(); this.props.clearErrors();}} >
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="modal-form-separator"></div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="group-modal-input">
                            <label>Name</label>
                            <div className='error-input'>
                                <input type="text" value={this.state.name} onChange={this.update('name')} />
                                <span className='error'>{this.props.groupErrors.name ? this.props.groupErrors.name : ""}</span>
                            </div>
                        </div>
                        
                        <div className="users-search-container">
                        <div className="search-results-container">
                                <div className="selected-users">
                                    <h1>Current Members:</h1>
                                    <div className="added-users-container">
                                        {this.populateGroupMembers()}
                                    </div>
                                </div>
                                { this.state.filteredData && this.state.filteredData.length != 0 && (
                                    <div className="users-search-results">
                                        {this.state.filteredData.slice(0,10).map((user => {
                                            return <p onClick={this.updateUsers(user)} className="users-item">{user.firstName}</p>
                                        }))}
                                    </div>
                                    )
                                }
                            </div>
                            <div className="group-modal-input">
                                <label>Add Member</label>
                                {/* change this to this.updateUsers */}
                                <input type="text" onChange={this.handleFilter}/>
                                {/* render div of users here */}
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
                            <label>Description </label>
                            <span className='error'> {this.props.groupErrors.description ? this.props.groupErrors.description : ""}</span>
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