import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ActionsType, PostsType, UpdateNewPostTextActionType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const addPost = () => {
        if (props.newPostText.trim() !== '') {
            props.dispatch({type: 'ADD-POST'})
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const action: UpdateNewPostTextActionType = {
            type: 'UPDATE-NEW-POST-TEXT',
            newText: e.currentTarget.value
        }
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    );
};

