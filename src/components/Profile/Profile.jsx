import React from 'react'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'

const Profile = (props) => {
    console.log(props)


    return (
        <div className={s.profile}>
            <ProfileInfo name="My Profile "/>
            <Posts massege="My posts" data={props.data} dispatch={props.dispatch}/>
        </div> 
    )
}


export default Profile