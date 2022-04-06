import React from 'react';
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://images.cults3d.com/KFtOZzBS2kOLdpdccI6dTK-ezBM=/516x516/https://files.cults3d.com/uploaders/16795671/illustration-file/f53f9cdf-3c23-4814-82d2-96de58b60944/RRRRR.jpg"
                alt="avatar"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
};
