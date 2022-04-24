import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

const dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]
const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
]
const posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 11},
    {id: 4, message: 'Dada', likesCount: 11}
]

export type AppPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    posts: Array<PostsType>
}
type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}


ReactDOM.render(
    <App dialogs={dialogs}
         messages={messages}
         posts={posts}/>,
    document.getElementById('root')
);