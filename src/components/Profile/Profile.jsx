import React from 'react'
import MyPosts from './Posts/MyPosts/MyPosts'

const Profile = (props) => {
    return (
        <div>
            <div>
                <img src="https://picsum.photos/id/10/900/200" alt="content" />
            </div>
            <div>
                <h1> {props.title} </h1>
            </div>
            <MyPosts massege="My posts"/>
        </div> 
    )
}


export default Profile