import React from "react";
import { useState, useEffect } from "react";
import HamburgerIcon from "./HamburgerIcon.jsx";
import useWindowSize from "./useWindowSize.js";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";
import Sidebar from "./Sidebar.js";
const Navbar = () => {
  const [showMenu, changeShowMenu] = useState();
  const [menuOpen, changeMenuOpen] = useState(false);
  const windowSize = useWindowSize();

  const width = windowSize.width;

  const toggleMenu = () => {
    changeMenuOpen((menuPrev) => {
      return !menuPrev;
    });
  };
  // useEffect(()=>{
  //     console.log(width)
  //    if(width<1000){
  //        changeShowMenu(true);
  //    }else{
  //        changeShowMenu(false)
  //    }
  // },[])

  useEffect(() => {
    console.log(width);
    if (width <= 1000) {
      changeShowMenu(true);
    } else {
      changeShowMenu(false);
    }
  }, [windowSize]);
  return (
    <>

      <div className={showMenu ? "Navbar-show" : "Navbar"}>
      <Sidebar menuOpen={menuOpen}/>

            <div className="Logo">LOGO</div>
            <div className="Name">SHOEDB</div>



      {showMenu ? (
                <div className={!menuOpen?"icon":"icon-open"}>
                <HamburgerIcon menuOpen={menuOpen} showMenu={showMenu} toggleMenu={toggleMenu} />
              </div>
        
        ) : (
          <div className="RightSide">
            <form className="form">
              <input
                type="text"
                name="Search"
                className="SearchBar"
                placeholder="Search For Shoes"
              />
              <button type="submit">
                <AiOutlineSearch size={20} color="white" />
              </button>
            </form>

            <div className="links">
              <div className="link"> Brands</div>
              <div className="link"> Sign in</div>
              <div className="link signup"> Sign up</div>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default Navbar;
