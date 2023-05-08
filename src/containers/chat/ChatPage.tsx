import { useEffect, useState } from "react"
import { User, MessageEvent } from "../../models/models"
import Login from "./components/Login";
import Chat from "./components/Chat";
import { v4 as uuid } from 'uuid';
import { IconName, IconProp } from "@fortawesome/fontawesome-svg-core";

const ChatPage = () => {

    const room = window.drone.subscribe('profesor-jave');

    room.on('message', (message: any) => {

        const messageEvent: MessageEvent = {
            data: message.data.data,
            id: message.data.id,
            timestamp: message.data.timestamp,
            clientId: message.data.clientId,
            member: {
                id: message.data.member.id,
                clientData: {
                    id: message.data.member.clientData.id,
                    firstName: message.data.member.clientData.firstName,
                    lastName: message.data.member.clientData.lastName,
                    icon: message.data.member.clientData.icon,
                }
            }
        };
        console.log(messageEvent);

        setMessages([...messages, messageEvent])
    });


    const [user, setUser] = useState<User>({ id: '', firstName: '', lastName: '', icon: 'user' });
    const [messages, setMessages] = useState<MessageEvent[]>([]);
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

    const handleSend = (message: string) => {

        const messageEvent: MessageEvent = {
            data: message,
            id: uuid(),
            timestamp: new Date().getUTCMilliseconds(),
            clientId: uuid(),
            member: {
                id: uuid(),
                clientData: user
            }
        };

        window.drone.publish({
            room: 'profesor-jave',
            message: messageEvent
        });

        //setMessages([...messages, messageEvent])
    }

    const handleLogin = (isLoggedIn: boolean, firstName: string, lastName: string, icon: string) => {

        const id = uuid();

        const iconName: IconName = icon as IconName;

        setUser({
            id: id,
            firstName: firstName,
            lastName: lastName,
            icon: iconName,
        });
        setLoggedIn(isLoggedIn);
    }

    return (
        <div>
            {isLoggedIn ? <Chat userId={user.id} messages={messages} onSend={handleSend} /> : <Login onLoggedIn={handleLogin} />}
        </div>
    )
}



export default ChatPage;