import React from 'react'
import s from './Posts.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.posts}>
           <MyPosts message="My posts" />
        </div> 
    )
}


export default Profile