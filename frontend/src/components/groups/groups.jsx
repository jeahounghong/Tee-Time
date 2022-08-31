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
        };

        this.toggleCreateGroupModal = this.toggleCreateGroupModal.bind(this)
    }

    componentDidMount() {
        document.querySelector('body').style.backgroundColor = '#f3f2ee';
        this.props.fetchUserGroups(this.props.currentUser.id);
        this.props.fetchEvents();
    }

    toggleCreateGroupModal() {
        this.setState({createGroupModalHidden: !this.state.createGroupModalHidden})
    }

    render() {
        return (
            <div>
                <NavBarContainer />
                <h1 id="groups-title">My Groups</h1>
                <div id="create-group-btn" onClick={this.toggleCreateGroupModal}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <p>Create a Group</p>
                </div>
                <div id='line'></div>
                <div className='groups-page' >
                    <div className="groups-container">
                        <ul>
                            <GroupItemContainer />
                            <GroupItemContainer />
                            <GroupItemContainer />
                            <GroupItemContainer />
                        </ul>
                    </div>
                    <div className="group-show">
                        <GroupShowContainer events={this.props.events}/>
                    </div>
                </div>
                {this.state.createGroupModalHidden ? "" : 
                <Create_group_modal_container toggleModal={() => this.toggleCreateGroupModal()} action={this.state.createGroupModalHidden} /> }
            </div>
        )
    }
}

export default Groups;