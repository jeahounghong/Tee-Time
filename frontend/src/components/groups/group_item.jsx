import React from 'react';
import '../../stylesheets/group_item.css'
import GroupShowContainer from './group_show_container'
import EditGroupModalContainer from '../modals/edit_group_modal_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Group extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            showToggle: false,
            editGroupModalHidden: true,
        }

        this.toggleGroupShow = this.toggleGroupShow.bind(this);
        this.toggleEditGroupModal = this.toggleEditGroupModal.bind(this)
    };

    toggleGroupShow(e) {
        e.preventDefault();
        console.log('click working')

        this.setState({showToggle: !this.state.showToggle})
    }

    toggleEditGroupModal() {
        this.setState({editGroupModalHidden: !this.state.editGroupModalHidden})
    }

    render() {
        // replace all of these with group information
        return (
            <div className='group-item-container'>
                <div className="group-item-top-container">
                    <h1 className="group-name">{this.props.group.name}</h1>
                    {/* replace this with number of events */}
                    <h3 className='group-events-number'>{this.props.group.events.length} events this week</h3>
                </div>
                <div className="group-item-content-container">
                    <div className="group-information-container">
                        <p className="group-description">{this.props.group.description}</p>
                    </div>
                    <div className="group-members-container">
                        {this.props.group.users.map((member, i) => {
                            return <div className={`member-${i+1}`} key={member+i}>
                                {this.props.users[member] ? this.props.users[member].firstName.slice(0,1) : ""}
                            </div>
                        })}
                        <p className="group-members-number">{this.props.group.users.length} members</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Group;