import React from 'react' 
import s from './Nav.module.css'

const Nav = (props) => {
    console.log(props)
    let nav = props.data.map(el =>  (<div className={s.item + '' + s.active}><a href={"/" + el.link}> {el.name}</a> </div>))
    let friends = props.friends.map(el => (<div className={s.status}>
                                            <img src={el.img}></img> {el.name} 
                                        </div>))
    return(
        <nav className={s.nav}>
            {nav}
            <hr/>
            {friends}
        </nav>
    )
}

export default Nav