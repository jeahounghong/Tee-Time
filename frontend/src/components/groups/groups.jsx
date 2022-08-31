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
            groupShowGroup: this.props.groups[0]
        };

        this.toggleCreateGroupModal = this.toggleCreateGroupModal.bind(this)
        this.toggleEditGroupModal = this.toggleEditGroupModal.bind(this)
        this.groupShow = this.groupShow.bind(this);
        this.toggleGroupShow = this.toggleGroupShow.bind(this);
    }

    componentDidMount() {
        document.querySelector('body').style.backgroundColor = '#f3f2ee';
        // debugger;
        this.props.fetchUserGroups(this.props.currentUser.id);
        this.props.fetchUserEvents(this.props.currentUser.id);
    }

    componentDidUpdate(prevProps){
        // debugger;
        if (this.props.currentUser !== prevProps.currentUser && this.props.currentUser){
            // debugger;
            this.props.fetchUserGroups(this.props.currentUser.id);
            this.props.fetchUserEvents(this.props.currentUser.id);
        }
    }

    toggleCreateGroupModal() {
        this.setState({createGroupModalHidden: !this.state.createGroupModalHidden})
    }

    toggleEditGroupModal() {
        this.setState({editGroupModalHidden: !this.state.editGroupModalHidden})
    }

    groupShow() {
        if (this.state.groupShowGroup === null) {
            return (
                null
            )
        } else {
            return (
                <GroupShowContainer group={this.state.groupShowGroup} events={this.props.events}/>
            )
        }
    }

    toggleGroupShow(e) {
        e.preventDefault();

        console.log(e.target.id)
        let groupNumber = e.target.id;

        this.setState({groupShowGroup: this.props.groups[groupNumber]});
    }

    render() {
        return (
            <div id='group'>
                <NavBarContainer />
                <h1 id="groups-title">My Groups</h1>
                <div className="group-button-container">
                    <div id="create-group-btn" onClick={this.toggleCreateGroupModal}>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        <p>Create a Group</p>
                    </div>
                    {/* change this to edit group modal */}
                    <div id="edit-group-btn" onClick={this.toggleEditGroupModal}>
                        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                        <p>Edit this Group</p>
                    </div>
                </div>
                <div id='line'></div>
                <div className="group-selector">
                        {Object.values(this.props.groups).map((group, i) => (
                            <div onClick={this.toggleGroupShow} id={i} className='group-selector-button'>{i + 1}</div>
                        ))}
                    </div>
                <div className='groups-page' >
                    <div className="groups-container">
                        <ul>
                        {Object.values(this.props.groups).map((group, i) => (
                                <div onClick={() => {
                                    let idx = -1;
                                    for(let i = 0; i < this.props.groups.length; i++){
                                        if (this.props.groups[i]._id === group._id){
                                            idx = i
                                        }
                                    }
                                    console.log(i)
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
}

export default Groups;