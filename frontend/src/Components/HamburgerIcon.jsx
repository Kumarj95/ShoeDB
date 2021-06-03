import React from 'react'
import './HamburgerIcon.css'
import {useState} from 'react'
const HamburgerIcon = () => {
    const [menuOpen, changeMenuOpen]= useState(false);
    const toggleMenu=()=>{
        changeMenuOpen(
            ()=>{ return !menuOpen}
        )
    }
    return (
        <div>
            <div className={menuOpen?"menu-btn open":"menu-btn"} onClick={toggleMenu}>
                <div className="menubtn_burger" ></div>
            </div>

        </div>
    )
}

export default HamburgerIcon
