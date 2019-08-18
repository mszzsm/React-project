import React from 'react'
import s from './Post.module.css'

let x = 0

let Like = (x) => { 
        console.log()
        x++;
        return x;
    }

const Post = (props) => {
    return (
        <div clssName={s.post}>
            <div className={s.item}>
                <img src="https://picsum.photos/id/10/50/50" /> 
                <div className={s.msg}>
                    <p>{props.msg}</p>
                </div>
                <div>
                    <div className={s.like}>
                        <span onClick={Like}>like {Like.props} </span> 
                    </div>
                    <div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Post