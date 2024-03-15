import React from "react";
import {Button, FormSend, InputMessage} from "./messageStyle";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {selectToken} from "../../../../store/slices/userSlice";
import {socket} from "../../../../core/socket";
import {getCurrentDate} from "../../../../calendar/currentDate";
import {selectMessage, setMessage} from "../../../../store/slices/messageSlice";
export const Message = () => {

    const dispatch = useAppDispatch();
    const message = useAppSelector(selectMessage);
    const token = useAppSelector(selectToken);
    const userName = token[2];

    const startTaping = () => {
        socket.emit('startTyping', `${userName}  is typing...`);
    };
    const stopTaping = () => {
        socket.emit('stopTyping', '');
    };

    console.log(message , 'message')
    const handleSend = (e) => {
      const d = new Date();
        const date = d.setMonth(d.getMonth() - 1);
        e.preventDefault();
        if (message.length && userName) {
            socket.emit('message', {
                text: message,
                name: userName,
                id: `${socket.id}-${Math.random()}`,
                dateForUser: getCurrentDate(),
                data: date,
                socketID: socket.id
            });
        }
        dispatch(setMessage(''));
    };

    return (
        <div>
            <FormSend action="" onSubmit={handleSend}>
                <InputMessage type="text"
                              value={message}
                              onChange={(e) => dispatch(setMessage(e.target.value))}
                              onFocus={startTaping}
                              onBlur={stopTaping}
                />
                <Button>send</Button>
            </FormSend>
        </div>)
};
