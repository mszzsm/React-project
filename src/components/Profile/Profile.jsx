import React from 'react'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    console.log('Profile')
    return (
        <div>
            <ProfileInfo/>
            <div>
                <h1> {props.title} </h1>
            </div>
            <Posts massege="My posts"/>
        </div> 
    )
}


export default Profile