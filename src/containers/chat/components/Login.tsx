import { IconName } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import styled from "styled-components";

interface LoginProps {
    onLoggedIn: (isLoggedIn: boolean, firstName: string, lastName: string, icon: string) => void;
}

const Login = (props: LoginProps) => {

    const icons: IconName[] = ['user', 'coffee', 'cat', 'cross'];

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [icon, setIcon] = useState<IconName>('user');

    const handleLogin = () => {
        props.onLoggedIn(true, firstName, lastName, icon);
    }

    const handleSelectChange = (e: any) => {
        setIcon(e.target.value as IconName)
    }

    return (
        <LoginContainer>
            <LoginHeader>Login</LoginHeader>
            <LoginInput value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First name" />
            <LoginInput value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last name" />
            <select onChange={handleSelectChange} placeholder="Icon">
                {icons.map((icon, index) => <option key={index} value={icon}>{icon}</option>)}
            </select>
            <LoginButton onClick={handleLogin}>Login</LoginButton>
        </LoginContainer>
    )
}


const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    padding: 8px;
    margin: 8px;
    height: 600px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    text-align: center;
`;

const LoginHeader = styled.h1`
    text-align: center;
    color: #394867;
`;

const LoginInput = styled.input`
    padding: 8px;
    margin: 8px auto;
    width: 200px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
`;

const LoginButton = styled.button`
    width: 200px;
    color: #394867;
    background-color: white;
    border: 2px solid #394867;
    padding: 8px;
    margin: 8px auto;
:hover {
  cursor: pointer;
  background-color: #394867;
  color: white
}
`;

export default Login;