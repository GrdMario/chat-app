import MemberInput from "./MemberInput";
import Messages from "./Messages";
import { MessageEvent } from "../../../models/models";

interface ChatProps {
    userId: string;
    messages: MessageEvent[];
    onSend: (message: string) => void;
}

const Chat = (props: ChatProps) => {

    return (<div>
        <Messages userId={props.userId} messages={props.messages}></Messages>
        <MemberInput onSend={props.onSend}></MemberInput>
    </div>)
};

export default Chat;