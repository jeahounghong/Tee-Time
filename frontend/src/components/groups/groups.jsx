import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import GroupItemContainer from './group_item_container';

class Groups extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchUserGroups(this.props.currentUser.id);
    }

    render() {
        return (
            <div>
                <NavBarContainer />
                <div className='groups-page' >
                    <div className="groups-container">
                        <h1 className='groups-heading'>My Groups</h1>
                        <ul>
                            <GroupItemContainer />
                            <GroupItemContainer />
                            <GroupItemContainer />
                            <GroupItemContainer />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Groups;