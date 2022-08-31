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
                    {/* replace this with number of events */}
                    <h3 className='group-events-number'>3 events this week</h3>
                </div>
                <div className="group-item-content-container">
                    <div className="group-information-container">
                        <p className="group-description">Description about group goes here more descriptions keep going just keep going this looks fire</p>
                    </div>
                    <div className="group-members-container">
                        <p className="group-members-number">18 members</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Group;