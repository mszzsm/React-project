import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {

    //let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);
    
    const AddPost = () => { console.log('button add post clicked') }

    return (
        <div className={s.MyPosts}>
            <div>
                <h1>{props.massege}</h1>
            </div>
            <div>
                <textarea> </textarea>
                <button onClick={AddPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div clssName={s.posts}>
                <Post msg="this is message 1 "/>
                <Post msg="this is message 2"/>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div> 
    )
}


export default MyPosts