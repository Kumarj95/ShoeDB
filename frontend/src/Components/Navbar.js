import React from "react";
import { useState, useEffect } from "react";
import HamburgerIcon from "./HamburgerIcon.jsx";
import useWindowSize from "./useWindowSize.js";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";
const Navbar = () => {
  const [showMenu, changeShowMenu] = useState();
  const [menuOpen, changeMenuOpen] = useState(false);
  const windowSize = useWindowSize();

  const width = windowSize.width;

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
    if (width < 1000) {
      changeShowMenu(true);
    } else {
      changeShowMenu(false);
    }
  }, [width]);
  return (
    <div className="Navbar">
      <div>LOGO</div>
      <div>SHOEDB</div>
      {showMenu ? (
        <div className="icon">
          <HamburgerIcon />
        </div>
      ) : (
        <div className="RightSide">
          <form className="form">
            <input type="text" name="Search"  className="SearchBar" placeholder="Search For Shoes"/>
            <button type="submit">
              <AiOutlineSearch size={20} color="white"/>
            </button>
            </form>

            <div className="links">
                <div className="link"> Brands</div>
                <div className="link"> Sign in</div>
                <div className="link"> Sign up</div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
