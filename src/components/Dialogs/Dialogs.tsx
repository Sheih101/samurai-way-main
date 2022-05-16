import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {ActionsType, DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const sendMessageHandler = () => {
        props.dispatch(sendMessageCreator())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                <div>
                    {props.dialogsPage.messages.map(m => <Message message={m.message}/>)}
                </div>
                <div>
                    <textarea placeholder={'Enter your message...'}
                              onChange={onChangeHandler}
                              value={props.dialogsPage.newMessageBody}/>
                    <div>
                        <button onClick={sendMessageHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
