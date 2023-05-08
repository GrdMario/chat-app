import { useState } from "react";
import styled from "styled-components";

interface MemberInputProps {
    onSend: (message: string) => void;
}

const MemberInput = (props: MemberInputProps) => {
    
    const [message, setMessage] = useState<string>('');

    const onSendClick = (e: any) => {
        props.onSend(message);
        setMessage('');
    }

    const onEnterPress = (e: any) => {
        if(e.keyCode === 13) {
          e.preventDefault();
          onSendClick(e);
        }
      }
    
    return (
    <Container>
        <Textarea
             value={message}
             onKeyDown={onEnterPress}
             onChange={e => setMessage(e.target.value)}>
        </Textarea>
        <Button className="member-input-btn" onClick={onSendClick}>Click me</Button>
    </Container>)
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  padding: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const Textarea = styled.textarea`
  width: 80%;
`;

const Button = styled.button`

  width: 20%;
  color: #394867;
  background-color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #394867;
  border-radius: 3px;

  :hover {
    cursor: pointer;
    background-color: #394867;
    color: white
  }
`


export default MemberInput;