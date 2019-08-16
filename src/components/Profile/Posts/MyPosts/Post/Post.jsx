import React from 'react'
import s from './Post.module.css'

let r = Math.random(1,100)

const Post = () => {
    return (
        <div clssName={s.posts}>
            <div className={s.item}>
                <img src="https://picsum.photos/id/10/50/50" /> 
                post 1 
            </div>
        </div>
    )
}


export default Post