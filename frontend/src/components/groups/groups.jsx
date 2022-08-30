import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import GroupItemContainer from './group_item_container';
import '../../stylesheets/groups.css';

class Groups extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        document.querySelector('body').style.backgroundColor = '#f3f2ee';
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

                    <div className="modal">
                        Modal goes here
                    </div>
                </div>
            </div>
        )
    }
}

export default Groups;