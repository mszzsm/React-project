import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'




const MyPosts = (props) => {

    //let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);
    
    const AddPost = () => { console.log('button add post clicked') }

    let postElements = props.data.msgData.map(el => (<Post msg={el.msg} user={el.user} id={el.id} likesCount={el.likes} />))

    let newPostElement = React.createRef();

    let addPost = () => { 
        props.addPost()
    } 

    let changeNewPostText = () => {
        let text = newPostElement.current.value;
        props.changeNewPostText(text)
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