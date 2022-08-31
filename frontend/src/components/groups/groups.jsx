import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import GroupItemContainer from './group_item_container';
import '../../stylesheets/groups.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Create_group_modal_container from '../modals/create_group_modal_container';
import GroupShowContainer from './group_show_container';

class Groups extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            createGroupModalHidden: true,
            groupShowGroup: this.props.groups[1]
        };

        this.toggleCreateGroupModal = this.toggleCreateGroupModal.bind(this)
    }

    componentDidMount() {
        document.querySelector('body').style.backgroundColor = '#f3f2ee';
        this.props.fetchUserGroups(this.props.currentUser.id);
        this.props.fetchUserEvents(this.props.currentUser.id);
    }

    toggleCreateGroupModal() {
        this.setState({createGroupModalHidden: !this.state.createGroupModalHidden})
    }

    // essentially alter the state using this method to signify what group we want to pass down as props to the groups show
    toggleGroupShow() {

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
                    <div id="create-group-btn" onClick={this.toggleCreateGroupModal}>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        <p>Edit this Group</p>
                    </div>
                </div>
                <div id='line'></div>
                <div className='groups-page' >
                    <div className="groups-container">
                        <ul>
                        {Object.values(this.props.groups).map((group, i) => (
                                <GroupItemContainer group={group} key={group+i} />
                            ))}
                        </ul>
                    </div>
                    <div className="group-show">
                        <GroupShowContainer group={this.state.groupShowGroup} events={this.props.events}/>
                    </div>
                </div>
                {this.state.createGroupModalHidden ? "" : 
                <Create_group_modal_container toggleModal={() => this.toggleCreateGroupModal()} action={this.state.createGroupModalHidden} /> }
            </div>
        )
    }
}

export default Groups;