import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import s from './Profile.module.css';


export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                    alt={"image"}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

