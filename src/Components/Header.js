import React from 'react';
import { NavLink } from "react-router-dom";
function Header() {
    return(
        <div class="topnav">
  <NavLink to="/">Home</NavLink>
  
  <NavLink to="/Products">Products</NavLink>
  <NavLink to="/Footer">Contact
  </NavLink>
  {/* <input type="text" placeholder="Search.."></input> */}
  {/* <button type="submit"><i class="fa fa-search"></i></button> */}
  <h2>Welcome to my website</h2>
</div>
    )
}
export default Header