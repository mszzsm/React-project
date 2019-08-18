import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    console.log(s)
    return (
        <div className={s.profileInfo}>
            <p> {props.name} </p>
            <p>
                <img src="https://picsum.photos/id/10/80/80" alt="content" />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ut, corporis debitis 
                eligendi harum beatae officia molestiae laudantium facilis praesentium sit nihil, 
            </p>
        </div>
    )
}

export default ProfileInfo