import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import '../../stylesheets/profile.css'
import { GiPartyPopper, GiGolfFlag, GiGolfTee } from 'react-icons/gi';
import { FiSend } from 'react-icons/fi';
import { BsCalendarDateFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';



class FriendProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userId: this.props.location.pathname.substring(7),
            imageUrl: this.props.currentUser.imageUrl, // added by Torben
            editingProfileImage: false,
            currentProfileId: this.props.match.params.id
        }
        this.userEvents = this.userEvents.bind(this);
        this.frequentlyPlayedWith = this.frequentlyPlayedWith.bind(this);
        this.playedCourses = this.playedCourses.bind(this);
        this.header = this.header.bind(this);
        // this.handleImageSubmit = this.handleImageSubmit.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
        this.renderProfilePage = this.renderProfilePage.bind(this);
        this.goToFriend = this.goToFriend.bind(this);
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
        this.props.fetchUserEvents(this.state.currentProfileId)
        this.props.fetchCourses()
        this.props.fetchUsers()
        // debugger
    }

    // might need to refactor this not know what this is doing
    componentDidUpdate(){
        if (this.state.currentProfileId !== this.props.match.params.id){
            // debugger;
            // this.setState({userId: this.props.location.pathname.substring(7)})
            this.props.fetchUserEvents(this.state.currentProfileId)
        }
    }

    handleFollow(userId) {

        let followedUser = Object.assign({}, this.props.users[userId]);
        followedUser.id = followedUser._id;
        delete followedUser._id;

        let updatedUser = Object.assign({}, this.props.users[this.props.currentUser.id]);
        updatedUser.id = updatedUser._id;
        delete updatedUser._id;

        var followerIndex = followedUser.follows.followers.indexOf(updatedUser.id);
        var followingIndex = updatedUser.follows.following.indexOf(followedUser.id);

        if (followerIndex === -1 && followingIndex === -1) {
            // debugger;
            followedUser.follows.followers.push(this.props.currentUser.id);
            updatedUser.follows.following.push(userId);
        } else {
            // debugger;
            followedUser.follows.followers = followedUser.follows.followers.slice(0, followerIndex).concat(followedUser.follows.followers.slice(followerIndex+1));
            updatedUser.follows.following = updatedUser.follows.following.slice(0, followingIndex).concat(updatedUser.follows.following.slice(followingIndex+1));
        }

        this.props.updateUser(followedUser);
        this.props.updateUser(updatedUser);
    }

    dateToString(date){
        return this.MONTH[parseInt(date.substring(5,7))] + " " + date.substring(8,10)
    }

    // commenting this functionality out for the user show page
    // toggleEditProfileImage() {
    //     this.setState({editingProfileImage: !this.state.editingProfileImage});
    // }

    //added by Torben - start
    handleImageSubmit(e) {
        e.preventDefault();
        this.props.currentUser.imageUrl = this.state.imageUrl;
        
        let tempUser = Object.assign({}, this.props.users[this.state.currentProfileId]);
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
        const tempUser = this.props.users[this.state.currentProfileId]
        if (tempUser){
            return (
                <div className='profile-header'>
                    <div className='profile-welcome'>
                        {/* CHANGE THIS TO LINK BACK TO WHOEVER'S PROFILE  */}
                        <img onClick={this.toggleEditProfileImage} src={this.props.users[this.state.currentProfileId].imageUrl} alt="profile-photo"/>
                        <div>
                            {/* refactor */}
                            {this.props.users[this.state.currentProfileId].firstName} {this.props.users[this.state.currentProfileId].lastName} <GiPartyPopper />
                            <div id="follow-stats">
                                <div id="following-stats">{this.props.users[this.state.currentProfileId].follows.following.length} following</div>
                                <div id="follower-stats">{this.props.users[this.state.currentProfileId].follows.followers.length} followers</div>
                            </div>
                        </div>
                    </div>
                    <div id='line'></div>
                    <br />
                    {this.state.editingProfileImage ? 
                    <form onSubmit={this.handleImageSubmit} className='edit-pro-pic-form'>
                    <label>Edit Image URL: </label>
                    <input type="text" value={this.state.imageUrl} onChange={this.update('imageUrl')}/>
                    <button type="submit" className='submit-image-url-button'>Submit</button>
                    </form>: ""}
                </div>
            )
        }
    }

    // redirect to profile show page
    goToFriend(e) {
        e.preventDefault();
        this.props.history.push(`/member/${e.target.id}`)
    }

    profileCircle(user){
        if (user.imageUrl){
            return (
                <img onClick={this.goToFriend} id={user._id} src={user.imageUrl} alt=""/>
            )
        }

        return user.firstName.slice(0,1)
    }
    // added by Torben - end

    frequentlyPlayedWith(){
        if (this.props.events && 
            Object.values(this.props.events)[0] && 
            Object.values(this.props.courses)[0] &&
            Object.values(this.props.users)[0]){

            let userJoinedPreviousEvents = Object.values(this.props.events).filter(event => (
                event.users.indexOf(this.state.currentProfileId) >= 0 && !this.isAfterToday(event.eventTime)
            ))

            // debugger;
            
            const playedWithCount = {}
            userJoinedPreviousEvents.forEach(event => {
                event.users.forEach(userId => {
                    if (userId !== this.state.currentProfileId){
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
                {keys.map((key, i) => <li key={key+i} className={"frequently-played-with-list-item"}>
                    <div className="freq-played-item">
                        <div id="freq-played-item-left">
                            <div className='frequently-played-with-list-item-left'>
                                <div onClick={this.goToFriend} className={`member-${i+1}`}>
                                    {this.props.users[key] ? this.profileCircle(this.props.users[key]) : ""}
                                </div>
                            </div>
                            <div className='frequently-played-with-list-item-right'>
                                <p>
                                    {this.props.users[key].firstName + " " + this.props.users[key].lastName}
                                </p>
                                <div className="played-with-text">
                                    Played with: {playedWithCount[key]} times
                                </div>
                            </div>
                        </div>
                        {this.props.users[key].follows.followers.indexOf(this.props.currentUser.id) === -1 ? 
                        <div id="freq-played-item-right" onClick={() => this.handleFollow(key)}><FiSend /> follow</div>
                        : <div id="freq-played-item-right-unfollow" onClick={() => this.handleFollow(key)}><FiSend /> unfollow</div>
                        }
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
                event.users.indexOf(this.state.currentProfileId) >= 0 && this.isAfterToday(event.eventTime)
            ))  
            // debugger;
            
            return (<ul className='profile-event-list'>
                {userJoinedEvents.map((event, i) => (<li key={event._id+i} className="profile-event-item">
                    <h3>{event.name ? event.name : "My Event"}</h3>
                    <div className='event-date-profile'>
                        {this.dateToString(event.eventTime)}
                    </div>
                    {/* <div>
                        {this.props.courses[event.courseId].name}
                    </div> */}
                    <div>
                        <h4>Attendees</h4>
                        <ul className='event-members'>
                            {event.users.map((userId, i) => this.props.users[userId] ? <li className={`member-${i+1}`}>
                                {this.props.users[userId] ? this.profileCircle(this.props.users[userId]) : ""}
                            </li> : "")}
                        </ul>
                    </div>
                    <div className="member-count">{event.users.length} / {event.eventSize} attendees</div>
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
                event.users.indexOf(this.state.currentProfileId) >= 0 && !this.isAfterToday(event.eventTime)
            ))  

            let previousCourses = {}
            userJoinedPreviousEvents.forEach(event => {
                if (this.props.courses[event.courseId]){
                    previousCourses[event.courseId] = this.props.courses[event.courseId]
                }
            })
            return (<ul id="profile-courses-list">
                {Object.values(previousCourses).map((course, i) => <li id='past-courses-list-item' key={course+i}>
                    <div className="profile-course-left">
                        <img src={course.imageUrl} className="past-courses-image" />
                    </div>
                    <div className="profile-course-right">
                        <p className="profile-course-name">{course.name}</p>
                        <p className="profile-course-description">{course.description}</p>
                    </div>
                    <div id="profile-courses-separator"></div>
                </li>)}
            </ul>)

        }
    }


    renderProfilePage(){return(<div className='profile-page'>
        <NavbarContainer {...this.props}/>
        {this.header()}
        <div className='profile-items-container'>
            <div className='profile-section-container'>
                <h1><BsCalendarDateFill /> {this.props.users[this.state.currentProfileId] ? this.props.users[this.state.currentProfileId].firstName + "'s" : ""} Upcoming Events</h1>
                {this.userEvents()}
            </div>
            <div className='profile-section-container'>
                <div className='most-played'>
                    <h1>
                        <div id="profile-courses-logo">
                            <GiGolfTee />
                        </div>
                        Frequently Played With
                        <div id="profile-played-separator"></div>
                    </h1>
                    {this.frequentlyPlayedWith()}
                </div>
            </div>
            <div className="profile-section-container">
                <div className='profile-courses'>
                    <h1>
                        <div id="profile-courses-logo">
                            <GiGolfFlag/>
                        </div>
                        Played Courses
                        <div id="profile-courses-logo-separator"></div>
                    </h1>
                    {this.playedCourses()}
                </div>
            </div>
        </div>
    </div>)}

    render() {
        return Object.values(this.props.users).length > 0 && this.renderProfilePage();
    }
}

export default FriendProfile