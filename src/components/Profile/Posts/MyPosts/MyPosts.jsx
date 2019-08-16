import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

let r = Math.random(1,100)

const MyPosts = () => {
    return (
        <div className={s.profile}>
            My posts
            <div>
                <textarea> </textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div clssName={s.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div> 
    )
}


export default MyPosts