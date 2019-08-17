import React from 'react'
import s from './Post.module.css'

let r = Math.random(1,100)

const Post = (props) => {

    console.log(props.message)
    return (
        <div clssName={s.posts}>
            <div className={s.item}>
                <img src="https://picsum.photos/id/10/50/50" /> 
                {props.message}
                <div>
                    <div>
                        <span>Like</span>
                    </div>
                    <div>
                        <span>Dislike</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Post