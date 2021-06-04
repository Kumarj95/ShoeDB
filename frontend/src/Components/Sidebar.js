import React from 'react'
import './Sidebar.css'
const Sidebar = ({menuOpen}) => {
    const style={
        "position": "fixed",
        "order":"1",
        "top": "0",
        "right": "-200px",
        "color": "black",
        "width": "0%",
        "height": "100vh",
        "backgroundColor": "red",
        "transition": "all 0.5s ease-in-out"
    
    }
    return (
        <div className="Sidebar" style={!menuOpen?style:{...style, right:"0" ,width:"100%"}}>
            Something
        </div>
    )
}

export default Sidebar
