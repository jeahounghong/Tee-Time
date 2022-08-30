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
                    <h1 className="group-name">Sample Group Name</h1>
                    {/* popup modal button */}
                    <h3 className="group-events-modal-link">Events</h3>
                </div>
                <div className="group-item-content-container">
                    <div className="group-members-container">
                        <p>User</p>
                        <p>User</p>
                        <p>User</p>
                        <p>User</p>
                    </div>
                    <div className="group-information-container">
                        <p className="group-location">Location</p>
                        <p className="group-description">Description about group goes here</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Group;