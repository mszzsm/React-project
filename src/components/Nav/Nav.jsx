import React from 'react' 
import s from './Nav.module.css'
import { AddFriendActionCreator, UpdateNewFriendActionCreator } from '../../redux/state'

const Nav = (props) => {
    console.log(props)
    let nav = props.data.navbarLinks.map(el => (<div className={s.item + '' + s.active}><a href={"/" + el.link}> {el.name}</a> </div>))
    let friends = props.data.Friends.map(el => (<div className={s.status}>
                                                    <img src={el.img} ></img> {el.name} 
                                                </div>))
    let newFriendElement = React.createRef();

    let updateFriendText = () => {
        let text = newFriendElement.current.value;
        let action = UpdateNewFriendActionCreator(text)
        props.dispatch(action)
        console.log(props.dispatch(action))
    }

    let addFriend = () => {
        let action = AddFriendActionCreator()
        props.dispatch(action)
 
    }

    return(
        <nav className={s.nav}>
            <input onChange={updateFriendText} ref={newFriendElement} value={props.data.msg}/>
            <button onClick={addFriend}> Add post</button>
            {nav}
            <hr/>
            {friends}
        </nav>
    )
}

export default Nav