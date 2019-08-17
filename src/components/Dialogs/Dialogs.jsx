import React from 'react'
import s from './Dialogs.module.css'
import DialogItems from './DialogItems/DialogItems.jsx'


console.log(s)
const Dialogs = (props) => {
    return (
        <div>
            <img src="https://picsum.photos/id/20/900/200" alt="content" />
            <div className={s.dialogs}>
                <DialogItems user="Michał Sztefanica" msg="Witam od Michała" status="active"/>
                <DialogItems user="Daniel Butyter" msg="Witam od Daniela" />
                <DialogItems user="Michał Sztefanica" msg="Witam od Michała" />
                <DialogItems user="Daniel Butyter" msg="Witam od Daniela" />
            </div>
        </div> 
    )
}


export default Dialogs