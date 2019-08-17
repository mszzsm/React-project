import React from 'react'
import s from'./Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <span>{props.title}</span> <br/>
            <img src="https://picsum.photos/id/20/200/300/?blur" alt="asd" />
        </header>
    )
}

export default Header