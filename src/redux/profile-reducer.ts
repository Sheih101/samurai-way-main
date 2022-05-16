import {ActionsType, PostsType, ProfilePageType} from './store';

export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export const addPostCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}
