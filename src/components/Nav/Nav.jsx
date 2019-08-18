import React from 'react' 
import s from './Nav.module.css'



const Nav = () => {
    return(
        <nav className={s.nav}>
            <div className={s.item + '' + s.active}>
                <a href="/profile"> Profile</a>
            </div>
            <div className={s.item}>
                <a href="/dialogs"> Chat</a>
            </div>
            <div className={s.item}>
                <a> News</a>
            </div>
            <div className={s.item}>
                <a> Music</a>
            </div>
            <div className={s.item}>
                <a> Settigs</a>
            </div>
        </nav>
    )
}

export default Nav