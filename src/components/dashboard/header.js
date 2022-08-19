import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
const Header = () => {
    let navigate = useNavigate();
    const sendsidebar = () => {
        navigate("/sidebar");
    }
    return ( 
        <div class="header">
            <button onClick={() => sendsidebar()} class="header__burger"></button>
        
      </div>
     );
}
 
export default Header;