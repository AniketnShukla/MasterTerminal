// import React from "react";
// import { Nav, NavLink, NavMenu }
// 	from 'react-router-dom'

// const Navbar = () => {
// return (
// 	<>
	
// 		<nav>
// 		<NavLink to="/about" activeStyle>
// 			About
// 		</NavLink>
// 		<NavLink to="/contact" activeStyle>
// 			Contact Us
// 		</NavLink>
// 		<NavLink to="/blogs" activeStyle>
// 			Blogs
// 		</NavLink>
// 		<NavLink to="/sign-up" activeStyle>
// 			Sign Up
// 		</NavLink>
// 		</nav >

// 	</>
// );
// };

// export default Navbar;



//


import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
        <nav className="sticky">
        <a className="logo logoStyle" href="#">DELTA</a>
        <div className='navListContainer'>
            <ul>
                <li><NavLink  to="/" activeStyle>HOME</NavLink></li>
                <li><NavLink  to="/dsa" activeStyle>DSA</NavLink></li>
                <li><NavLink to="/dev" activeStyle>DEV</NavLink></li>
                <li><NavLink to="/work" activeStyle>WORK</NavLink></li>
                {/* <li><a href="#">PERSONAL</a></li> */}
            </ul>
            {/* <div className='settin4gsDropdown'>
                <button onclick="myfunc()" 
                className='dropbtn'>Gear</button>
                <div id="myDropdown" className="dropdown-content">
                    <a href="#home">Green</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div> */}
            {/* <form>
                <label> Accent </label>
                <select>
                <option value = "BMW"> BMW 
                </option>
                <option value = "Mercedes"> Mercedes 
                </option>
                <option value = "Audi"> Audi
                </option>
                <option value = "Skoda"> Skoda
                </option>
                </select>
            </form> */}
        </div>
    </nav>
    </header>
    );
}

const myfunc =()=>{
    document.getElementById("myDropdown").classList.toggle("show");
}

export default Navbar;