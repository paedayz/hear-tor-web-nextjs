import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    height: 94px;
    padding: 0 50px 0 50px;
    margin-bottom: 20px;
    font-family: 'Kanit', sans-serif;
    user-select: none;
`

export const NavLeft = styled.div`
    display: flex;
    justify-content: left;
`

export const NavRight = styled.div`
    display: flex;
    justify-content: right;
    width: 100%;
`

interface NavMenuProps {
    isactive: string
}

export const NavMenu = styled(Link)<NavMenuProps>`
    width: 100px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    color: ${props => props.isactive === 'true'? '#35F348' : 'black'};

    &:hover {
        color: #35F348;
    }
`
