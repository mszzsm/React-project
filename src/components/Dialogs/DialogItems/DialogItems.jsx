import React from 'react'
import s from './DialogItems.module.css'
import {NavLink} from 'react-router-dom'

const DialogItems = (props) => {
    console.log('Dialog items')
    return (
        <div className={s.dialogItems}>
            <div className={s.dialog + s.active}>
                <NavLink to={"/dialogs/" + props.id}> {props.user} </NavLink>
            </div>
        </div>
    )
}


export default DialogItems