import React from 'react'
import s from './Posts.module.css'
import MyPosts from './MyPosts/MyPosts';

const Posts = (props) => {
    return (
        <div className={s.posts}>
           <MyPosts message="My posts" data={props.data}/>
        </div> 
    )
}


export default Posts