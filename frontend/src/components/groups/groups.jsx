import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import GroupItemContainer from './group_item_container';
import '../../stylesheets/groups.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CreateGroupModal from '../modals/create_group_modal';

class Groups extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            createGroupModalHidden: true,
        };

        this.toggleCreateGroupModal = this.toggleCreateGroupModal.bind(this)
    }

    componentDidMount() {
        document.querySelector('body').style.backgroundColor = '#f3f2ee';
        this.props.fetchUserGroups(this.props.currentUser.id);
    }

    toggleCreateGroupModal() {
        this.setState({createGroupModalHidden: !this.state.createGroupModalHidden})
    }

    render() {
        return (
            <div>
                <NavBarContainer />
                <div className='groups-page' >
                    <div className="groups-container">
                        <div id="groups-header">
                            <p id="groups-title">My Groups</p>
                            <div id="create-group-btn" onClick={this.toggleCreateGroupModal}>
                                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                <p>Create Group</p>
                            </div>
                        </div>
                        <ul>
                            <GroupItemContainer />
                            <GroupItemContainer />
                            <GroupItemContainer />
                            <GroupItemContainer />
                        </ul>
                    </div>

                    <div className="modal">
                        Modal goes here
                    </div>
                </div>
                {this.state.createGroupModalHidden ? "" : 
                <CreateGroupModal toggleModal={() => this.toggleCreateGroupModal()} action={this.state.createGroupModalHidden} /> }
            </div>
        )
    }
}

export default Groups;