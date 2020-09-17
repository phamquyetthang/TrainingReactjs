import React from 'react'
import styled from 'styled-components';
import './Header.css';
interface Props {
    title: string,
    bgcolor: string,
    color: string
}
const Title = styled.h1`
    color : ${props => props.color || "white"};
    margin: 0;
`;
const Header : React.FC<Props> = (props) =>(
    
    <div className="Header" style={{backgroundColor: props.bgcolor}}>
        <Title color={props.color} >{props.title}</Title>
    </div>

);
export default Header;