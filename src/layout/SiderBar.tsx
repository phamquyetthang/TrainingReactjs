import React from 'react'
import styled from 'styled-components';
interface Props{

}

const MySide = styled.div`
    background-color: #F6A2A2;
    height: 100%;
    position: fixed;
    width: 90px;
    left: 0;
    top: 0;
    span{
        font-size: 24px;
        color: hotpink;
    }
`;
const SiderBar:React.FC<Props> = (props) => {
    return (
        <MySide >
            <span>Side bar menu</span>
        </MySide>
    )
}
export default SiderBar;