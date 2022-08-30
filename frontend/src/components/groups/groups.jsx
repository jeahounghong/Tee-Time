import React from 'react';
import NavBarContainer from '../navbar/navbar_container';

class Groups extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchUserGroups(this.props.currentUser.id);
    }

    render() {
        return (
            <div >
                <NavBarContainer />
                <h1>this component is working</h1>
            </div>
        )
    }
}

export default Groups;