import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

let AddPostActionCreator = () => {
    return {type: "ADD-POST"}
}   

let UpdateNewPostTextActionCreator = (text) => {
    return { type: "UPDATE-NEW-POST-TEXT", text: text }
}




const MyPosts = (props) => {
    console.log(props)

    //let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);

    let postElements = props.data.msgData.map(el => (<Post msg={el.msg} user={el.user} id={el.id} likesCount={el.likes} />))

    let newPostElement = React.createRef();

    let addPost = () => { 
        props.dispatch(AddPostActionCreator)
    } 

    let changeNewPostText = () => {
        let text = newPostElement.current.value;
        let action = UpdateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={s.myposts}>
            <div>
                <h1>{props.massege}</h1>
            </div>

            <div className={s.add_new_post}>
                <textarea ref={newPostElement} onChange={changeNewPostText} value={props.data.postText}/> 
                <button onClick={addPost} > Add post</button>
                <button>Remove</button>
            </div>

            <div className={s.posts}>
                { postElements }
            </div>
        </div> 
    )
}


export default MyPosts