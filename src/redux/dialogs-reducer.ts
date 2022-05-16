import {ActionsType, DialogsPageType} from './store';

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            state.messages.push({id: 6, message: state.newMessageBody})
            state.newMessageBody = ''
            return state
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}
export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}