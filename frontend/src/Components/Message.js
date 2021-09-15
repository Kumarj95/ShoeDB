import React from 'react'
import './Message.css'
const Message = ({color,text,font}) => {
    return (
        <div className="Message" style={{backgroundColor:color, color:font}}>
            {text}
        </div>
    )
}

export default Message
