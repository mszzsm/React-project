import React from 'react'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://picsum.photos/id/10/900/200" alt="content" />
            </div>
            <div className={s.item}>
                ava+ description
            </div>
            <div className={s.item}>
                My posts
            </div>
            <div className={s.item}>
                new posts
            </div>
            <div className={s.item}>
                posts 1
            </div>
            <div className={s.item}>
                posts 2
            </div>
            
    </div> 
    )
}


export default Profile