import React from 'react'
interface Props{
    title: string,
}
const Footer : React.FC<Props> = (props) => {
    return (
        <div className="footer">
            {props.title}
        </div>
    )
}
export default Footer;