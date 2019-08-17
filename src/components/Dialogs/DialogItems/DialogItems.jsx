import React from 'react'
import Messages from './Messages/Messages'
import s from './DialogItems.module.css'


console.log(s)
const DialogItems = (props) => {
    return (
        <div className={s.dialogItems}>
            {props.user}
            <Messages msg={props.msg} status={props.status}/>
        </div>
    )
}


export default DialogItems