import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Sidebar.css'
const Sidebar = ({menuOpen}) => {
    const style={
        "zIndex":"1",
        "position": "fixed",
        "overflowX":"hidden",
        "order":"1",
        "display":"flex",
        "flexDirection":"column",
        "top": "0",
        "right": "-200px",
        "color": "white",
        "width": "0%",
        "height": "100vh",
        "backgroundColor": "black",
        "transition": "width 0.3s ease-in-out"
    
    }
    return (
        <div className="Sidebar" style={!menuOpen?style:{...style, right:"0" ,width:"100%"}}>

            <form className="SearchFormSide" action="/Search">
              <input
                type="text"

                className="SearchBarSide"
                placeholder="Search For Shoes"
              />
              <button type="submit">
                <AiOutlineSearch size={20} color="white" />
              </button>
            </form>
            <ul>
                <li>
                    Link 1
                </li>
                <li>
                    Link 2
                </li>
                <li>
                    link 3
                </li>
                <li>
                    link 4
                </li>
                <li>
                    link 5
                </li>
                <li>
                    link 6
                </li>
            </ul>

        </div>
    )
}

export default Sidebar
