import React from 'react';
import '../../stylesheets/group_item.css'

class Group extends React.Component {
    constructor(props){
        super(props)
    };

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
                        <p className="group-members-number">{this.props.group.users.length} members</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Group;