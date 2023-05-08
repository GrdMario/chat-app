import styled from "styled-components";
import { MessageEvent } from "../../../models/models";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconProp, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faCheckSquare, faCoffee)

interface MessageProps {
    userId: string;
    message: MessageEvent
}

const Message = (props: MessageProps) => {

    const isUserMessage = props.userId === props.message.member.clientData?.id;

    const direction = isUserMessage ? 'row' : 'row-reverse';
    const textDirection = isUserMessage ? 'left' : 'right';
    const i: IconName = props.message.member.clientData?.icon ?? 'user';

    return (
        <Container style={{ flexDirection: direction, textAlign: textDirection }}>
            <Avatar><FontAwesomeIcon icon={i} size="3x" /></Avatar>
            <Text >
                <div >{props.message.member.clientData?.firstName} {props.message.member.clientData?.lastName}</div>
                <div>{props.message.data}</div>
            </Text>
        </Container>)
}

const Container = styled.div`
    margin: 8px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background-color: white;
}`

const Avatar = styled.div`
  height: 50px;
  width: 50px;
  padding: 8px;
  border: 2px solid #f2f2f2;
  border-radius: 50px;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin-left: 16px;
  border-radius: 8px;
`;

export default Message;