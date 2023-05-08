import { NavLink, Outlet } from "react-router-dom"
import styled from "styled-components"

const Layout = () => {

    return (
        <>
         <AppNavBar>
            <AppLink><NavLink to={``} className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></AppLink>
            <AppLink><NavLink to={`chat`} className={({isActive}) => isActive ? "active" : ""}>Chat</NavLink></AppLink>
            <AppLink><NavLink to={`todo`} className={({isActive}) => isActive ? "active" : ""}>Todos</NavLink></AppLink>
        </AppNavBar>


        <AppBody>
            <Container>
                <Outlet />
            </Container>
        </AppBody>
        </>
    )
}

const AppNavBar = styled.div`
    padding: 0.25em 0.5em;
    background-color: #212A3E;
    display: flex;
    height: 48px;
`;

const AppLink = styled.div`
    margin: auto 0.25em;
    color: white;

    > a {
        color: white;
        text-decoration: none;
        padding: 0.25em 1em;
    }

    > a:hover {
        background-color: #394867
    }
`;

const AppBody = styled.div`
    height: calc(100vh - 56px);
    width: 100%;
`

const Container = styled.div`
    max-width: 900px;
    margin: 1em auto;
`

export default Layout;