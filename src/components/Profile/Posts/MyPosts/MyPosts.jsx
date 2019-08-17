import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

//let r = Math.random(1,100)

const MyPosts = (props) => {
   console.log(props)
    return (
        <div className={s.MyPosts}>
            <div>
                <h1>{props.massege}</h1>
            </div>
            <div>
                <textarea> </textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div clssName={s.posts}>
                <Post message="this is message 1 "/>
                <Post message="this is message 2"/>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div> 
    )
}


export default MyPosts