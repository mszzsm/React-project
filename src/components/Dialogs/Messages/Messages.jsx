import React from 'react'
import style from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className="style.msg">
           <span> {props.msg} </span>
        </div>
    )
}


export default Messages