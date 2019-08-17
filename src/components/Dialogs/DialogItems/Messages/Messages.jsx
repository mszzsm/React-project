import React from 'react'
import s from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={props.status}>
           <span> {props.msg} </span>
        </div>
    )
}


export default Messages