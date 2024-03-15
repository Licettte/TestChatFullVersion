import React, {useEffect, useState, } from "react";
import {SideBar} from "./sideBar/SideBar";
import {Body} from "./chat/body/Body";
import {Message} from "./chat/message/Message";
import {ChatFlex, Main} from "./chatPageStyle";
import {socket} from "../../core/socket";
import DatePicker from "../../calendar/DatePicker";
import {Flex} from "../../styles/Flex";
export const ChatPage = () => {

    const archiveMessages = [
        {
            text: '🎅🏻☃️🎄',
            name: 'Dima',
            id: 'r3TUlR1UG7BhcGCfAABJ-0.20965390840987275',
            dateForUser: '27 Февраля',
            data: '2024-01-27T09:00:52.558Z',
        },
        {
            text: 'На мели мы лениво ловили налима и меняли налима мы нам на линя. О любви не меня ли вы мило молили',
            name: 'Alice',
            id: 'r3TUlR1UG7BhcGCfAABJ-0.4626079959470528',
            dateForUser: '29 Февраля',
            data: '2024-01-29T09:00:52.558Z',
        },
        {
            text: 'и в туманы лимана манили меня?',
            name: 'Dima',
            id: 'r3TUlR1UG7BhcGCfAABJ-0.2096908409875',
            dateForUser: '29 Февраля',
            data: '2024-01-29T09:00:52.558Z',
        },
        {
            text: 'Нали́м (нали́ма) — лат. lota lota, крупная речная рыба до 1,2м до 18кг',
            name: 'Dima',
            id: 'r3TUlR1UG7BhcGCfAABJ-0.209653840987275',
            dateForUser: '4 Марта',
            data: '2024-02-04T09:00:52.558Z'
        },
    ];

    const [messages, setMessages] = useState(archiveMessages);
    const [status, setStatus] = useState('');
    useEffect(() => {
        socket.on('response', (data) => setMessages([...messages, data]));
    }, [socket, messages]);


    // setMessages({})
    // useEffect(() => {
    //     socket.on('response', (data) => dispatch(createMessage({
    //         text: data.text,
    //         name: data.name,
    //         datetime: data.date
    //     })));
    // }, [socket, messagesBD]);

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        socket.on('responseTyping', (data) => setStatus(data))
    }, [socket, status]);

    const [filterName, setFilterName] = useState('');
    const [chooseDate, setChooseDate] = useState('');

    return (
        <ChatFlex>
            <SideBar messages={messages} setFilterName={setFilterName}/>
            <Main $align='center'>
                <Body messages={messages} status={status} filterName={filterName} chooseDate={chooseDate}
                      setMessages={setMessages}/>
                <Message/>
                <Flex $margin="80px 0">
                    <DatePicker value={date} onChange={setDate} setChooseDate={setChooseDate}/>
                </Flex>
            </Main>
        </ChatFlex>)
};
