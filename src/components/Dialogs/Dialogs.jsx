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
    console.log('dialogs')
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItems user="Michał Sztefanica" status="" id="1" />
                <DialogItems user="Michał Sztefanica" status="" id="2" />
                <DialogItems user="Michał Sztefanica" status="" id="3" />
                <DialogItems user="Michał Sztefanica" status="" id="4" />
                <DialogItems user="Michał Sztefanica" status="" id="5" />
                <DialogItems user="Michał Sztefanica" status="" id="6" />
            </div>
            <div className={s.messages}>
                <Message msg="Witam od Michała" />
                <Message msg="Witam od Michała" />
                <Message msg="Witam od Michała" />
                <Message msg="Witam od Michała" />
                <Message msg="Witam od Michała" />
                <Message msg="Witam od Michała" />
            </div>
        </div> 

    )
}


export default Dialogs