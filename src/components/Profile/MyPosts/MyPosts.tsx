import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.posts}>
                <Post messages={'Hi, how are you?'}/>
                <Post messages={'It\'s my first post'}/>
            </div>
        </div>
    );
};
