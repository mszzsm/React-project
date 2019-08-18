import React from 'react' 
import s from './Nav.module.css'

const Nav = () => {
    let navElements = [
        { name: 'Profile',  link: 'profile' },
        { name: 'Chat',     link: 'dialogs' },
        { name: 'News',     link: 'news' },
        { name: 'Music',    link: 'music' },
        { name: 'Settings', link: 'settings' },
    ]
    let nav = navElements.map(el => (<div className={s.item + '' + s.active}><a href={"/" + el.link}> {el.name}</a> </div>))

    return(
        <nav className={s.nav}>
            {nav}
        </nav>
    )
}

export default Nav