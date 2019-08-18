import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {

    //let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);
    
    const AddPost = () => { console.log('button add post clicked') }

    let postElements = props.data.map(el => (<Post msg={el.msg} user={el.user} id={el.id} likesCount={el.likes} />))

    let newPostElement = React.createRef();

    let addPost = () => { 
        let newPost = newPostElement.current.value
        props.addPost(newPost)
    } 

    return (
        <div className={s.myposts}>
            <div>
                <h1>{props.massege}</h1>
            </div>

            <div className={s.add_new_post}>
                <textarea ref={newPostElement}> </textarea>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>

            <div clssName={s.posts}>
                { postElements }
            </div>
        </div> 
    )
}


export default MyPosts