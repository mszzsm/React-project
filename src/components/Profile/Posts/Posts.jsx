import React from 'react'
import s from './Posts.module.css'
import MyPosts from './MyPosts/MyPosts';

const Posts = () => {
    return (
        <div className={s.posts}>
           <MyPosts message="My posts" />
        </div> 
    )
}


export default Posts