import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import GroupItemContainer from './group_item_container';
import '../../stylesheets/groups.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Create_group_modal_container from '../modals/create_group_modal_container';
import GroupShowContainer from './group_show_container';
import EditGroupModalContainer from '../modals/edit_group_modal_container';

class Groups extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            createGroupModalHidden: true,
            editGroupModalHidden: true,
            groupShowGroup: null
        };

        this.toggleCreateGroupModal = this.toggleCreateGroupModal.bind(this)
        this.toggleEditGroupModal = this.toggleEditGroupModal.bind(this)
        this.groupShow = this.groupShow.bind(this);
        this.toggleGroupShow = this.toggleGroupShow.bind(this);
        this.renderGroupPage = this.renderGroupPage.bind(this);
        this.closeShow = this.closeShow.bind(this)
        this.unjoinedGroups = this.unjoinedGroups.bind(this)
    }

    closeShow(){
        this.setState({groupShowGroup: null})
    }

    componentDidMount() {
        document.querySelector('body').style.backgroundColor = '#f3f2ee';
        // debugger;
        this.props.fetchUserGroups(this.props.currentUser.id);
        this.props.fetchUserEvents(this.props.currentUser.id);
        this.props.fetchUsers();
        this.props.fetchGroups();
    }

    componentDidUpdate(prevProps){
        // debugger;
        if (this.props.currentUser !== prevProps.currentUser && this.props.currentUser){
            // debugger;
            this.props.fetchUserGroups(this.props.currentUser.id);
            this.props.fetchUserEvents(this.props.currentUser.id);
        }
        if (Object.values(prevProps.users).length !== Object.values(this.props.users).length) {
            this.setState({createGroupModalHidden: this.state.createGroupModalHidden});
        }

        let deleted = true;

        for(let i = 0; i < this.props.groups.length; i++){
            // debugger;
            if (this.state.groupShowGroup && this.props.groups[i]._id === this.state.groupShowGroup._id){
                deleted = false;
            }
        }

        if (this.state.groupShowGroup && deleted){
            this.setState({groupShowGroup: null})
            // debugger;
        }
    }

    toggleCreateGroupModal() {
        this.setState({createGroupModalHidden: !this.state.createGroupModalHidden})
    }

    toggleEditGroupModal() {
        // debugger;
        if (this.state.groupShowGroup){
            this.setState({editGroupModalHidden: !this.state.editGroupModalHidden})
        }
    }

    groupShow() {
        if (this.state.groupShowGroup === null) {
            return this.unjoinedGroups()
        } else {
            return (
                <GroupShowContainer group={this.state.groupShowGroup} 
                                    events={this.props.events} 
                                    toggleEditGroupModal={this.toggleEditGroupModal}
                                    closeShow = {this.closeShow}
                /> 
            )
        }
    }

    toggleGroupShow(e) {
        e.preventDefault();

        console.log(e.target.id)
        let groupNumber = e.target.id;

        this.setState({groupShowGroup: this.props.groups[groupNumber]});
    }

    componentDidUpdate(prevProps){
        this.props.groups.forEach(group => {
            if (this.state.groupShowGroup && group._id === this.state.groupShowGroup._id){
                // debugger;
            }
        })
    }

    unjoinedGroups(){
        // return <div>
        //     Unjoined Groups
        // </div>
    }

    renderGroupPage() {
        const joinedGroups = this.props.groups.filter(group => {
            return group.users.indexOf(this.props.currentUser.id) >= 0
        })
        console.log("JOINED GROUPS")
        console.log(joinedGroups)

        return (
            <div id='group'>
                <NavBarContainer />
                {/* <h1 id="groups-title">My Groups</h1>
                <div className="group-button-container">
                    <div id="create-group-btn" onClick={this.toggleCreateGroupModal}>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        <p>Create a Group</p>
                    </div>
                    <div id="edit-group-btn" onClick={this.toggleEditGroupModal}>
                        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                        <p>Edit this Group</p>
                    </div>
                </div> */}
                {/* <div id='line'></div> */}
                {/* <h1 className='select-a-group'>Select a Group</h1>
                <div className="group-selector">
                        {Object.values(this.props.groups).map((group, i) => (
                            <div onClick={this.toggleGroupShow} id={i} className='group-selector-button'>{i + 1}</div>
                        ))}
                    </div> */}
                <div className='groups-page' >
                    <div className="groups-container">
                        <div className='groups-container-header'>
                            <h1>My Groups</h1>
                            <div id="create-group-btn" onClick={this.toggleCreateGroupModal}>
                                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                <p>Create a Group</p>
                            </div>
                        </div>
                        <ul>
                        {joinedGroups.map((group, i) => (
                                <div onClick={() => {
                                    let idx = -1;
                                    for(let i = 0; i < this.props.groups.length; i++){
                                        if (this.props.groups[i]._id === group._id){
                                            idx = i
                                        }
                                    }
                                    console.log(i)
                                    // debugger;
                                    this.props.fetchGroupEvents(this.props.groups[idx]._id)
                                    this.setState({groupShowGroup: this.props.groups[idx]})
                                }}>
                                    <GroupItemContainer group={group} key={group+i} />
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="group-show" id='group-show'>
                        {this.groupShow()}
                        {/* <GroupShowContainer group={this.props.groups[1]} events={this.props.events}/> */}
                        {/* <h1>Render a group here by clicking on a card!</h1> */}
                    </div>
                </div>
                {this.state.createGroupModalHidden ? "" : 
                <Create_group_modal_container toggleModal={() => this.toggleCreateGroupModal()} action={this.state.createGroupModalHidden} /> }
                {this.state.editGroupModalHidden ? "" : 
                <EditGroupModalContainer toggleModal={() => this.toggleEditGroupModal()} action={this.state.EditGroupModalHidden} group={this.state.groupShowGroup} /> }
            </div>
        )
    }

    render() {
        return Object.values(this.props.users).length > 0 && this.renderGroupPage();
    }
}

export default Groups;