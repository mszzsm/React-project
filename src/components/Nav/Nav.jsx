import React from 'react' 
import s from './Nav.module.css'

const Nav = (props) => {

    let nav = props.data.map(el => (<div className={s.item + '' + s.active}><a href={"/" + el.link}> {el.name}</a> </div>))

    return(
        <nav className={s.nav}>
            {nav}
        </nav>
    )
}

export default Nav