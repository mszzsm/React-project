import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
//import DialogItems from './DialogItems/DialogItems.jsx'


const DialogItems = (props) => {
    let path =  "/dialogs/" + props.id 
    return (
        <div className={s.dialogItems}>
            <div className={s.dialog + s.active}>
                <NavLink to={path}> {props.user} </NavLink>
            </div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>
            <span> {props.msg} </span>
        </div>
    )
}

const Dialogs = (props) => {
    let Items = props.data.map(item => <DialogItems user={item.user} status={item.status} id={item.id} />)
    let msg = props.data.map(item => <Message msg={item.msg} />)
    console.log('dialogs')
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
               {Items}
            </div>
            <div className={s.messages}>
               {msg}
            </div>
        </div> 
    )
}


export default Dialogs