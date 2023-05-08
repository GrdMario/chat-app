import Message from "./Message"
import { MessageEvent } from "../../../models/models"
import { useEffect, useRef } from "react"
import styled from "styled-components"

interface MessagesProps {
    userId: string;
    messages: MessageEvent[]
}

const Messages = (props: MessagesProps) => {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {

        ref?.current?.scrollIntoView({ behavior: 'smooth' });

    }, [props.messages]);

    return (
        <Container>
            {props.messages.map((m, index) => <Message key={index} userId={props.userId} message={m}></Message>)}
            <div ref={ref} />
        </Container>)
}

const Container = styled.div`
  margin: 8px 0 0 0;
  padding: 8px;
  height: 600px;
  overflow-y: scroll;
  background-color: #f2f2f2;
  border: 2px solid #e4e4e4;
`

export default Messages;