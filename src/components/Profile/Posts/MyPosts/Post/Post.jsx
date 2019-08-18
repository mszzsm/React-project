import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
 
    return (
        <div clssName={s.post}>
            <div className={s.item}>
                <img src="https://picsum.photos/id/10/50/50" />  <span className={s.userName}> {props.user}</span>
                    <div className={s.msg}>
                        <p>{props.msg}</p>
                    </div>


                    <div className={s.like} >
                        <span >likes {props.likesCount} </span> 
                    </div>
            </div>
        </div>
    )
}


export default Post