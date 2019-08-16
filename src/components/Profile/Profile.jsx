import React from 'react'
import s from './Profile.module.css'
import MyPosts from './Posts/MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://picsum.photos/id/10/900/200" alt="content" />
            </div>
            <div className={s.item}>
                ava+ description
            </div>
            <MyPosts />
    </div> 
    )
}


export default Profile