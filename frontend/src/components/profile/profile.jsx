import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import '../../stylesheets/profile.css'
import { Link } from 'react-router-dom';

class Profile extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            userId: this.props.location.pathname.substring(7),
            imageUrl: this.props.currentUser.imageUrl // added by Torben
        }
        this.userEvents = this.userEvents.bind(this);
        this.frequentlyPlayedWith = this.frequentlyPlayedWith.bind(this);
        this.playedCourses = this.playedCourses.bind(this);
        this.header = this.header.bind(this);
        this.handleImageSubmit = this.handleImageSubmit.bind(this);
        this.MONTH = {
            1: "JAN",
            2: "FEB",
            3: "MAR",
            4: "APR",
            5: "MAY",
            6: "JUN",
            7: "JUL",
            8: "AUG",
            9: "SEP",
            10: "OCT",
            11: "NOV",
            12: "DEC"
        }

    }

    componentDidMount(){
        this.props.fetchUserEvents(this.state.userId)
        this.props.fetchCourses()
        this.props.fetchUsers()
        // debugger
    }

    componentDidUpdate(){
        if (this.state.userId !== this.props.location.pathname.substring(7)){
            // debugger;
            // this.setState({userId: this.props.location.pathname.substring(7)})
            this.props.fetchUserEvents(this.state.userId)
        }
    }

    dateToString(date){
        return this.MONTH[parseInt(date.substring(5,7))] + " " + date.substring(8,10)
    }

    //added by Torben - start
    handleImageSubmit(e) {
        e.preventDefault();
        this.props.currentUser.imageUrl = this.state.imageUrl;
        
        let tempUser = Object.assign({}, this.props.users[this.state.userId]);
        tempUser.id = tempUser._id;
        delete tempUser._id
        tempUser.imageUrl = this.state.imageUrl;
        this.props.updateUser(tempUser);

        debugger;

        this.state.imageUrl = '';
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    header(){
        const tempUser = this.props.users[this.state.userId]
        if (tempUser){
            return (
                <div className='profile-header'>
                    <div className='profile-image-circle'>
                        <img src={tempUser.imageUrl} />
                    </div>
                    <br />
                    <form onSubmit={this.handleImageSubmit} className='edit-pro-pic-form'>
                        <label>Edit Image URL: </label>
                        <input type="text" value={this.state.imageUrl} onChange={this.update('imageUrl')}/>
                        <button type="submit" className='submit-image-url-button'>Submit</button>
                    </form>
                </div>
            )
        }
    }
    // added by Torben - end

    frequentlyPlayedWith(){
        if (this.props.events && 
            Object.values(this.props.events)[0] && 
            Object.values(this.props.courses)[0] &&
            Object.values(this.props.users)[0]){

            let userJoinedPreviousEvents = Object.values(this.props.events).filter(event => (
                event.users.indexOf(this.state.userId) >= 0 && !this.isAfterToday(event.eventTime)
            ))

            // debugger;
            
            const playedWithCount = {}
            userJoinedPreviousEvents.forEach(event => {
                event.users.forEach(userId => {
                    if (userId !== this.state.userId){
                        playedWithCount[userId] = playedWithCount[userId] || 0;
                        playedWithCount[userId] += 1
                    }
                })
            })

            const keys = Object.keys(playedWithCount)
            keys.sort(function(a,b) {
                return playedWithCount[b] - playedWithCount[a]
            })
            return <ul>    
                {keys.map((key) => <li key={key} className={"frequently-played-with-list-item"}>
                    <Link to={`/users/${key}`} onMouseDown={() => this.setState({userId: key})}>
                        {this.props.users[key].firstName + " " + this.props.users[key].lastName}
                    </Link>
                    <div>
                        Played with: {playedWithCount[key]} times
                    </div>
                </li>)}
            </ul>
        }
    }

    isAfterToday(date){
        let day = new Date()
        day = day.getFullYear() + "-" + ((day.getMonth() + 1) < 10 ? "0" + (day.getMonth() + 1) : (day.getMonth() + 1)) + "-" + 
                        (day.getDate() < 10 ? ("0" + day.getDate()) : day.getDate())
        let isAfterToday = day < date.substring(0,10)
        return isAfterToday
    }

    userEvents(){
        if (this.props.events && 
            Object.values(this.props.events)[0] && 
            Object.values(this.props.courses)[0] &&
            Object.values(this.props.users)[0]){

            // This filters for user events. This may be unnecessary but the state could have already prefetched
            // events that the user is not a part of
            let userJoinedEvents = Object.values(this.props.events).filter(event => (
                event.users.indexOf(this.state.userId) >= 0 && this.isAfterToday(event.eventTime)
            ))  
            // debugger;
            
            return (<ul className='profile-event-list'>
                {userJoinedEvents.map((event) => (<li key={event._id}>
                    <h3>{event.name ? event.name : "My Event"}</h3>
                    <div>
                        {this.dateToString(event.eventTime)}
                    </div>
                    <div>
                        {this.props.courses[event.courseId].name}
                    </div>
                    <div>
                        <h3>Attendees</h3>
                        <ul>
                            {event.users.map(userId => this.props.users[userId] ? <li>
                                {this.props.users[userId].firstName + " " + this.props.users[userId].lastName}
                            </li> : "")}
                        </ul>
                    </div>
                </li>))}    
            </ul>)
            

        } else {
        }
    }



    playedCourses(){
        if (this.props.events && 
            Object.values(this.props.events)[0] && 
            Object.values(this.props.courses)[0] &&
            Object.values(this.props.users)[0]){

            let userJoinedPreviousEvents = Object.values(this.props.events).filter(event => (
                event.users.indexOf(this.state.userId) >= 0 && !this.isAfterToday(event.eventTime)
            ))  

            let previousCourses = {}
            userJoinedPreviousEvents.forEach(event => {
                if (this.props.courses[event.courseId]){
                    previousCourses[event.courseId] = this.props.courses[event.courseId].name
                }
            })
            return (<ul>
                {Object.values(previousCourses).map(course => <li>
                    {course}
                </li>)}
            </ul>)

        }
    }


    render(){return(<div className='profile-page'>
        <NavbarContainer {...this.props}/>
        {this.header()}
        <div className='left-right'>
            <div className='user-events left'>
                <h1>{this.props.users[this.state.userId] ? this.props.users[this.state.userId].firstName + "'s" : ""} Upcoming Events</h1>
                {this.userEvents()}
            </div>
            <div className='right'>
                <div className='most-played'>
                    <h1>Frequently played with</h1>
                    {this.frequentlyPlayedWith()}
                </div>
                <div className='profile-courses'>
                    <h1>Played Courses</h1>
                    {this.playedCourses()}
                </div>
            </div>
        </div>
    </div>)}
}

export default Profile